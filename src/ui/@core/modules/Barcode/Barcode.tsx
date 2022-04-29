import React from 'react';
import { Document, Page, Text, Image } from '@react-pdf/renderer';
import bwipjs from 'bwip-js';
import { styles } from './Barcode.styled';
import { ProductInfo } from '../../../../proto/product_manager_pb';

type Props = {
    products: ProductInfo.AsObject[],
}

export const BarcodeComponent: React.VFC<Props> = ({ products }) => {
    return (
        <Document>
            {
                products.map((prod, index) => {
                    if(prod && prod.barcode) {
                        let canvas = document.createElement('canvas');
                        bwipjs.toCanvas(canvas, {
                            bcid: 'code128',
                            text: prod.barcode,
                            includetext: true,
                            scale:       2,
                            textxalign:  'center',
                        });

                        let height = canvas.getAttribute("height");
                        let width = canvas.getAttribute("width");
                        return (
                            <Page size={[Number(height) * 0.75, Number(width) * 0.75]} style={styles.BodyWrapper} key={"barcode" + index} orientation="landscape">
                                <Image src={canvas.toDataURL('image/png')} style={styles.QrImage} />
                            </Page>
                        )
                    } else {
                        return (
                            <Page size={"B9"} style={styles.BodyWrapper} key={"barcode" + index} orientation="landscape">
                                <Text style={styles.AddressTitle}>No barcode on {prod.name}</Text>
                            </Page>
                        )
                    }
                    
                })
            }

        </Document>
    )
};