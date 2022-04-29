import { useEffect, useRef, useState } from 'react';
import { useNavTabHistory } from '../../../../@core/modules/Navigation/hooks/useNavTabHistory';

import { StatisticsView } from '../../views/StatisticsView';
import { OrdersView } from '../../views/OrdersView';
import { StoreProductsView } from '../../views/StoreProductsView';
import { KitComponentsView } from '../../views/KitComponentsView';
import { ProductHistoryView } from '../../views/ProductHistoryView';
import { OrderFormView } from '../../views/OrderFormView';
import { NavTabView } from '../../views/NavTabView';
import { ProductRouteView } from '../../views/ProductRouteView';

import { OrdersContainer } from '../../containers/OrdersContainer';
import { ProductsContainer } from '../../containers/KitComponentsContainer';
import { ProductHistoryContainer } from '../../containers/ProductHistoryContainer';

import { Link, useHistory } from 'react-router-dom';
import * as styled from './ProductPage.styled';
import { useLocation, useParams } from 'react-router';
import { GetAllProductsRequest, ProductInfo, StoreProductInfo } from '../../../../../proto/product_manager_pb';
import { useGrpcClient, useProductClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { config } from '../../../../../private';
import { cacheService } from '../../../../../utils/cache-service';
import { useSelector } from 'react-redux';
import { BlobProvider } from '@react-pdf/renderer';
import { BarcodeComponent } from '../../../../@core/modules/Barcode/Barcode';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import firebase from '../../../../../utils/firebase';

type Props = {};

type ParamsProps = {
  id: string;
};

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
};


export const ProductPage: React.VFC<Props> = () => {
  const params: ParamsProps = useParams();
  const { state, pathname } = useLocation();
  const name = state as string;
  const { goBack } = useHistory();
  const { updateLabel } = useNavTabHistory();
  const getClient = useProductClient();
  const getclient = useGrpcClient();
  const { user } = useAuth0();
  const toastId = useRef<any>(null);
  const companyId = getCompanyId(user);
  const [handleChanged, setHandleChanged] = useState(false);
  const [productData, setProductData] = useState<ProductInfo.AsObject>();
  const [storeProductsData, setStoreProductsData] = useState<StoreProductInfo.AsObject[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stores, setStores] = useState<StoreProps[]>([]);
  const companyInfo = useSelector((state: any) => state.company.company);
  const [generating, setGenerating] = useState(false);

  useEffect(() => updateLabel(name), [updateLabel]);

  useEffect(() => {
    if (user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [user])

  useEffect(() => {
    if (companyId) {
      Promise.all([
        getProductData()
      ])
        .then((data: any) => {
          setProductData(data[0].productsList[0]);
          setStoreProductsData(data[0].productsList[0].storeProductsList);
          updateLabel(data[0].productsList[0].name);
        })
        .catch((err) => {
          addErrorToast(err.message);
        })

    }
  }, [companyId, handleChanged, pathname])

  const getProductData = () => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          const requestProduct: GetAllProductsRequest.AsObject = {
            companyId: companyId,
            minQuantity: 0,
            maxQuantity: 0,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: params.id
            },
            paginationCursor: "",
            pageSize: 10,
            includeArchived: false
          };
          client
            .getAllProducts(requestProduct)
            .then((res: any) => {

              resolve(res);
            })
            .catch((err) => {
              reject(err);
            })
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  useEffect(() => {
    return () => {
      cacheService.stopPoll('stores');
    }
  }, [])

  useEffect(() => {
    if (companyId) {
      cacheService.stopPoll('stores');
      cacheService.callWithCache('stores', 'main_stores', getStores.bind(this), [], config.cache.store_timeout)
        .subscribe((data: any[]) => {
          setStores(data);
        }, err => {
          addErrorToast(err.message)
        })
    }
  }, [user, companyId]);

  const getStores = () => {
    return new Promise<any>((resolve, reject) => {
      getclient()
        .then((client) => {
          Promise.all([
            client.getAllStores(companyId)
          ])
            .then(data => {
              resolve(data[0]);
            }, error => {
              reject(error);
            })
        })
        .catch((err) => {
          reject(err);
        });
    })
  };

  const onDeleteProduct = () => {
    toastId.current = addInfoToast('Deleting product...', false);
    getClient()
      .then((client) => {
        client
          .unlinkAllStoreProductsFromStore({
            companyId: companyId,
            sku: productData?.sku || ''
          })
          .then((res) => {
            client
              .setProductArchived({
                companyId: companyId,
                productSku: productData?.sku || '',
                archived: true
              })
              .then((res) => {
                updateToast(toastId.current, `Product deleted`, 'success', 2000);
                goBack()
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

  const onPrint = () => {
    setGenerating(true)
  }

  if (productData) {
    return (
      <styled.BodyWrapper>
        <NavTabView data={productData} onDelete={onDeleteProduct} onPrint={onPrint} />
        <styled.LeftWrapper>
          <StatisticsView data={productData} />
          <OrdersContainer>
            <OrdersView data={productData} stores={stores} />
          </OrdersContainer>
          <OrdersContainer>
            <StoreProductsView data={storeProductsData} stores={stores} companyInfo={companyInfo} />
          </OrdersContainer>
          {
            isAdmin && (
              <>
                <ProductsContainer>
                  <KitComponentsView />
                </ProductsContainer>
                <ProductHistoryContainer>
                  <ProductHistoryView />
                </ProductHistoryContainer>
              </>
            )
          }
        </styled.LeftWrapper>
        <OrderFormView productData={productData} companyInfo={companyInfo} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
        <ProductRouteView />
        {generating && productData && (
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
                <></>
              )
            }}
          </BlobProvider>
        )}
      </styled.BodyWrapper>
    );
  } else {
    return (
      <styled.BodyWrapper></styled.BodyWrapper>
    )
  }
};
