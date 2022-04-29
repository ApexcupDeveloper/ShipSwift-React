import React from 'react';
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import QRCode from 'qrcode';
import { OrderItem } from '../../../../client/client';
import { convertDate1 } from '../../../../utils/convert-time';
import { ShipSwiftImage } from '../../../../assets/images';
import { styles } from './Invoice.styled';
import { CompanyInfo } from '../../../../proto/company_manager_pb';
import { addAddress } from '../../../../utils';

type Props = {
    order: OrderItem[],
    companyData: CompanyInfo.AsObject,
    logoUrl: string
}

export const InvoiceComponent: React.VFC<Props> = ({ order, companyData, logoUrl }) => {
    const getCurrency = (currency: string) => {
        if (currency === 'GBP') {
          return '£';
        } else if (currency === 'EUR') {
          return '€';
        } else {
          return '$';
        }
      }

    return (
        <Document>
            {
                order.map((invoice, index) => {
                    return (
                        <Page size="A4" style={styles.BodyWrapper} key={"invoice" + index}>
                            <View style={styles.Header}>
                                <Image src={logoUrl ? {
                                    uri: logoUrl,
                                    method: 'GET',
                                    headers: {},
                                    body: ''
                                } : ShipSwiftImage} style={styles.Logo} />
                                <Image src={QRCode.toDataURL("orderid/" + invoice.storeId + '/' + invoice.orderNumber)} style={styles.QrImage} />
                            </View>
                            <View style={styles.Section}>
                                <Text style={styles.SectionTitle}>{'Shpping address'}</Text>
                                <View style={styles.SectionContent}>
                                    <View style={styles.SectionTitleWrapper}>
                                        {invoice.customer?.fullName ? <Text style={styles.AddressTitle}>{invoice.customer?.fullName}</Text> : null}
                                        {invoice.customer?.address1 ? <Text style={styles.AddressTitle}>{invoice.customer?.address1}</Text> : null}
                                        {invoice.customer?.address2 ? <Text style={styles.AddressTitle}>{invoice.customer?.address2}</Text> : null}
                                        {invoice.customer?.city ? <Text style={styles.AddressTitle}>{invoice.customer?.city}</Text> : null}
                                        {invoice.customer?.stateName ? <Text style={styles.AddressTitle}>{invoice.customer?.stateName}</Text> : null}
                                        {invoice.customer?.postcode ? <Text style={styles.AddressTitle}>{invoice.customer?.postcode}</Text> : null}
                                        {invoice.customer?.country ? <Text style={styles.AddressTitle}>{invoice.customer?.country}</Text> : null}
                                    </View>
                                    <View style={styles.List}>
                                        <View style={styles.Row}>
                                            <Text style={styles.RowFirstChild}>Order Date</Text>
                                            <Text style={styles.RowLastChild}>{convertDate1(new Date(Number(invoice && invoice.timestamp ? invoice.timestamp.seconds as any * 1000 : 0)))}</Text>
                                        </View>
                                        <View style={styles.Row}>
                                            <Text style={styles.RowFirstChild}>Invoice number</Text>
                                            <Text style={styles.RowLastChild}>#{invoice.orderNumber}</Text>
                                        </View>
                                        <View style={styles.Row}>
                                            <Text style={styles.RowFirstChild}>Shipping method</Text>
                                            <Text style={styles.RowLastChild}>{invoice.shippingMethod}</Text>
                                        </View>
                                        <View style={styles.Row}>
                                            <Text style={styles.RowFirstChild}>Email</Text>
                                            <Text style={styles.RowLastChild}>{invoice.billing ? invoice.billing.email : ''}</Text>
                                        </View>
                                        <View style={styles.Row}>
                                            <Text style={styles.RowFirstChild}>Phone</Text>
                                            <Text style={styles.RowLastChild}>{invoice.billing ? invoice.billing.phoneNumber : ''}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.Section}>
                                <Text style={styles.SectionTitle}>Invoice: #{invoice.orderNumber}</Text>
                                <View>
                                    <View style={styles.TitleRaw}>
                                        <Text style={styles.TitleRawItem0L}>QTY</Text>
                                        <Text style={styles.TitleRawItem2}>Item</Text>
                                        <Text style={styles.TitleRawItem1}>SKU</Text>
                                        <Text style={styles.TitleRawItem1}>Price</Text>
                                        <Text style={styles.TitleRawItem0R}>Total</Text>
                                    </View>
                                    {
                                        invoice.productsList && invoice.productsList.map((product, i) => {
                                            return (
                                                <View style={styles.ItemRaw} key={'invoice-product' + i}>
                                                    <Text style={styles.ItemRawTitle0}>{product.quantity}</Text>
                                                    <Text style={styles.ItemRawTitle2}>{product.shipswiftProductName}</Text>
                                                    <Text style={styles.ItemRawTitle1}>{product.shipswiftProductSku}</Text>
                                                    <Text style={styles.ItemRawTitle1}>{getCurrency(companyData.defaultCurrency)}{(product.price?.value || 0).toFixed(2)}</Text>
                                                    <Text style={styles.ItemRawTitle0R}>{getCurrency(companyData.defaultCurrency)}{(product.quantity * (product.price?.value || 0)).toFixed(2)}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={styles.SectionContent1}>
                                            <View style={styles.ItemRaw}>
                                                <Text style={styles.ItemRawTitle1}>Subtotal net</Text>
                                                <Text style={styles.ItemRawTitle1R}>{getCurrency(companyData.defaultCurrency)}{Number(invoice.orderValue ? invoice.orderValue.subtotal : 0).toFixed(2)}</Text>
                                            </View>
                                            <View style={styles.ItemRaw}>
                                                <Text style={styles.ItemRawTitle1}>Shipping Cost</Text>
                                                <Text style={styles.ItemRawTitle1R}>{getCurrency(companyData.defaultCurrency)}{Number(invoice.orderValue ? invoice.orderValue.shipping : 0).toFixed(2)}</Text>
                                            </View>
                                            <View style={styles.ItemRaw}>
                                                <Text style={styles.ItemRawTitle1}>Tax</Text>
                                                <Text style={styles.ItemRawTitle1R}>{getCurrency(companyData.defaultCurrency)}{Number(invoice.orderValue ? invoice.orderValue.tax : 0).toFixed(2)}</Text>
                                            </View>
                                            <View style={styles.ItemRaw}>
                                                <Text style={styles.ItemRawTitle1}>Invoice gross</Text>
                                                <Text style={styles.ItemRawTitle1R}>{getCurrency(companyData.defaultCurrency)}{Number(invoice.orderValue ? invoice.orderValue.total : 0).toFixed(2)}</Text>
                                            </View>
                                            <View style={styles.Devider}></View>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.Space}></View>
                            <View style={styles.Footer}>
                                <Text style={styles.Address}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 11 }}>Adress: {addAddress(companyData?.name)}</Text>
                                    {addAddress(companyData?.address1)}
                                    {addAddress(companyData?.address2)}
                                    {addAddress(companyData?.address3)}
                                    {addAddress(companyData?.city)}
                                    {addAddress(companyData?.region)}
                                    {addAddress(companyData?.postcode)}
                                    {companyData?.country}
                                </Text>
                                <Text style={styles.Address}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 11 }}>Email: </Text>
                                    {companyData.email}
                                </Text>
                                {companyData && companyData.phone && companyData.phone.length ? (
                                    <Text style={styles.Address}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 11 }}>Phone: </Text>
                                        {companyData.phone}
                                    </Text>
                                ) : null}
                                {companyData && companyData.vatNumber && companyData.vatNumber.length ? (
                                    <Text style={styles.Address}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 11 }}>VAT Number: </Text>
                                        {companyData.vatNumber}
                                    </Text>
                                ) : null}
                            </View>
                        </Page>
                    )
                })
            }
        </Document>
    )
};