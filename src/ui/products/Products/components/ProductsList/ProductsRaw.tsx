import { useEffect, useMemo, useRef, useState } from 'react';
import { useWithoutBubble } from '../../../../@core/hooks/useWithoutBubble';
import { useLocale } from '../../../../../assets/locale';

import { Link, useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

import { ItemRaw, MoreMenu } from '../../../../@core/modules/ListBuilder';
import { useCallback } from 'react';
import { ProductInfo } from '../../../../../proto/product_manager_pb';
import { BlobProvider } from '@react-pdf/renderer';
import { BarcodeComponent } from '../../../../@core/modules/Barcode/Barcode';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useProductClient } from '../../../../../client/client-hook';
import { addInfoToast, updateToast } from '../../../../toast';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import firebase from '../../../../../utils/firebase';
import { config } from '../../../../../private';
import { useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';
import * as styled from './ProductsList.styled';
import { Tooltip } from '../../../../@core/modules/Tooltip';

type Props = {
  name: string;
  sku: string;
  barcode: string;
  onHand: string;
  available: string;
  backorder: string;
  allocated: string;
  selectedProducts: ProductInfo.AsObject[];
  onClickChecbox?: () => void;
  productData: ProductInfo.AsObject;
  handleChangeEvent: () => void;
  onOpenProduct: (name: string, sku: string) => void;
  isEdit: string;
  setIsEdit: (e: string) => void;
  onUpdateStock: (e: string) => void;
};

export const ProductRaw: React.VFC<Props> = ({ name, sku, barcode, onHand, available, backorder, allocated, selectedProducts, onClickChecbox, productData, handleChangeEvent, onOpenProduct, isEdit, setIsEdit, onUpdateStock }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const toastId = useRef<any>(null);
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const { selectedTab } = useSelectTab();

  const [generating, setGenerating] = useState(false);
  const onClickWithoutBubble = useWithoutBubble();

  const onDeleteProduct = () => {
    toastId.current = addInfoToast('Deleting product...', false);
    getClient()
      .then((client) => {
        client
          .unlinkAllStoreProductsFromStore({
            companyId: companyId,
            sku: sku
          })
          .then((res) => {
            client
              .setProductArchived({
                companyId: companyId,
                productSku: sku,
                archived: true
              })
              .then((res) => {
                updateToast(toastId.current, `Product deleted`, 'success', 2000);
                handleChangeEvent();
              })
              .catch((err) => {
                updateToast(toastId.current, err.message, 'error', 2000);
              })
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 2000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 2000);
      })
  }

  const onRestoreProduct = () => {
    toastId.current = addInfoToast('Restoring product...', false);
    getClient()
      .then((client) => {
        client
          .setProductArchived({
            companyId: companyId,
            productSku: sku,
            archived: false
          })
          .then((res) => {
            updateToast(toastId.current, `Product deleted`, 'success', 2000);
            handleChangeEvent();
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 2000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 2000);
      })
  }

  return (
    <ItemRaw hover={selectedTab !== '4'} onClick={() => {
      if(selectedTab !== '4') {
        onOpenProduct(name, sku);
      }
    }}>
      <ItemRaw.Merge flex={1.5}>
        <ItemRaw.Checkbox
          onClickWrapper={onClickWithoutBubble}
          handleChangeEvent={onClickChecbox}
          checked={selectedProducts.some((item) => item.sku === sku)}
        />
        <ItemRaw.Title bold children={name} />
      </ItemRaw.Merge>
      <ItemRaw.Title children={sku} />
      <ItemRaw.Title children={barcode} />
      <ItemRaw.Editable flex={0.5} children={onHand} id={sku} isEdit={isEdit} setIsEdit={setIsEdit} onChange={onUpdateStock} minWidth={'60px'} maxWidth={'120px'}/>
      <ItemRaw.Title flex={0.5} children={allocated} />
      <ItemRaw.Title flex={0.5} children={available} />
      <ItemRaw.Merge flex={0.5}>
        <ItemRaw.Space flex={1} />
        <ItemRaw.Title children={backorder} />
        {selectedTab === '4' ? (
          <styled.NoteWrapperWithHovering onClick={onRestoreProduct}>
            <Tooltip align="right" position="top" content={word('global.restore.product')}>
              <styled.RestoreIcon />
            </Tooltip>
          </styled.NoteWrapperWithHovering>
        ) : (
          <MoreMenu position="bottom" onClickWrapper={onClickWithoutBubble}>
            {
              !generating ?
                <MoreMenu.Button children={word('global.print.barcode')} onClick={() => setGenerating(true)} />
                :
                <BlobProvider document={<BarcodeComponent products={[productData]} />}>
                  {({ blob, url, loading, error }) => {
                    if (!loading && url && blob) {
                      toastId.current = addInfoToast(`Generating barcode...`, false);

                      const storage = getStorage(firebase, config.firebase.barcodes);
                      const storageRef = ref(storage, `${companyId}/${name}/${Math.random()}.pdf`);
                      const uploadTask = uploadBytesResumable(storageRef, blob);

                      uploadTask.on('state_changed', async (snapshot: any) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                        updateToast(toastId.current, `Generating barcode... ${Math.round(progress)}%`, 'info', false);
                      }, (err) => {
                        updateToast(toastId.current, err.message, 'error', 2000);
                      }, () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                          .then((downloadUrl) => {
                            updateToast(toastId.current, `Successfully generated.`, 'success', 2000);
                            window.open(downloadUrl, '_blank')
                            setGenerating(false);
                          })
                          .catch((err) => {
                            setGenerating(false);
                            updateToast(toastId.current, err.message, 'error', 2000);
                          })
                      })
                    }
                    return (
                      <MoreMenu.Button children={word('global.print.barcode')} />
                    )
                  }}
                </BlobProvider>
            }
            <MoreMenu.Button children={word('global.export.csv')} />
            <MoreMenu.Button children={word('global.edit.product')} />
            <MoreMenu.Button children={word('global.delete.product')} onClick={onDeleteProduct} />
          </MoreMenu>
        )}
      </ItemRaw.Merge>
    </ItemRaw>
  );
};
