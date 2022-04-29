import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductRaw } from './ProductsRaw';

import * as styled from './ProductsList.styled';
import { getCompanyId } from '../../../../../utils';

import { PlaceholderImage } from '../../../../products/Product/views/OrderFormView/images';
import { StoreProductInfo } from '../../../../../proto/product_manager_pb';
import { useEffect, useRef, useState } from 'react';
import { useProductClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { addInfoToast, updateToast } from '../../../../toast';
import { MultiSelectLinkProducts } from '../MultiSelectLinkProducts';
import { useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';

type Props = {
  products: StoreProductInfo.AsObject[];
  stores: StoreProps[];
  shipswiftProducts: any[];
  handleChnaged: (e: string, count?: number, empty?: boolean) => void;
};

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
}

type SelectedProductProps = {
  product: StoreProductInfo.AsObject,
  shipswiftProduct: any,
  index: number
}

export const ProductsList: React.VFC<Props> = ({ products, stores, shipswiftProducts, handleChnaged }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const toastId = useRef<any>(null);
  const getProductClient = useProductClient();
  const companyId = getCompanyId(user);
  const { selectedTab } = useSelectTab();

  const [productsData, setProductsData] = useState<StoreProductInfo.AsObject[]>(products);
  const [shipswiftProductsData, setShipswiftProductData] = useState<any[]>(shipswiftProducts);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProductProps[]>([]);

  useEffect(() => {
    setProductsData(products);
    setShipswiftProductData(shipswiftProducts);
  }, [products, shipswiftProducts])

  const onClickChecbox = (product: StoreProductInfo.AsObject, shipswiftProduct: any, index: number) => {
    if (selectedProducts.some((item) => item.product.sku === product.sku)) {
      setSelectedProducts(selectedProducts.filter((item) => item.product.sku !== product.sku));
    } else {
      setSelectedProducts([...selectedProducts, { product, shipswiftProduct, index }]);
    }
  };
  
  const onClickAll = () => {
    if (selectedProducts.length !== productsData.length) {
      let tempArr: any[] = [];
      productsData.map((product, index) => {
        tempArr.push({
          product,
          shipswiftProduct: shipswiftProductsData[index]
        })
      })
      setSelectedProducts(tempArr);
    } else {
      setSelectedProducts([]);
    }
  };

  const onClear = () => {
    setSelectedProducts([]);
  };

  const onMultiAdd = () => {
    toastId.current = addInfoToast(`Creating products...`, false);
    getProductClient()
      .then((client) => {
        const promises: any = [];
        selectedProducts.map((product) => {
          if (product.shipswiftProduct !== undefined) return;
          const addRequest = {
            companyId: companyId,
            name: product.product.name,
            sku: product.product.sku,
            price: product.product.price,
            imageUrlsList: product.product.imagesList,
            weight: product.product.weight,
            width: product.product.width?.value || 0,
            height: product.product.height?.value || 0,
            length: product.product.length?.value || 0,
            stockOnHand: product.product.quantity,
          };

          promises.push(
            new Promise<any>((resolve, reject) => {
              client
                .addProduct(addRequest)
                .then((res) => {
                  const linkRequest = {
                    companyId: companyId,
                    sku: product.product.sku,
                    storeProductSku: product.product.sku,
                    storeProductUrl: product.product.url,
                  };
                  client
                    .linkProduct(linkRequest)
                    .then((resp) => {
                      resolve(resp);
                    })
                    .catch((err) => {
                      reject(err);
                    })
                })
                .catch((err) => {
                  reject(err)
                })
            })
          );

          Promise.all(promises)
            .then((data) => {
              updateToast(toastId.current, 'Successfully created product.', 'success', 5000);
              const linkCount = selectedProducts.filter((item) => item.shipswiftProduct === undefined).length;
              handleChnaged('multi-link', linkCount, linkCount === productsData.length);

              let tempShipswiftArr = shipswiftProductsData;
              selectedProducts.map((product) => {
                if(product.shipswiftProduct === undefined) {
                  tempShipswiftArr.splice(product.index, 1);
                }
              })
              setShipswiftProductData(tempShipswiftArr);

              let tempArr = productsData;
              selectedProducts.map((product) => {
                if(product.shipswiftProduct === undefined) {
                  tempArr.splice(product.index, 1);
                }
              })
              setProductsData(tempArr);
 
              onClear();
            })
            .catch((err) => {
              
              updateToast(toastId.current, err.message, 'error', 5000);
            })
        });
      })
      .catch((err) => {
        
        updateToast(toastId.current, err.message, 'error', 5000);
      });
  };

  const onMultiLink = () => {
    toastId.current = addInfoToast(`Linking products...`, false);
    getProductClient()
      .then((client) => {
        const promises: any = [];
        selectedProducts.map((product) => {
          if (product.shipswiftProduct === undefined) return;
          const linkRequest = {
            companyId: companyId,
            sku: product.product.sku,
            storeProductSku: product.product.sku,
            storeProductUrl: product.product.url,
          };
          promises.push(
            new Promise<any>((resolve, reject) => {
              client
                .linkProduct(linkRequest)
                .then(async (resp) => {
                  resolve(resp);
                })
                .catch((err) => {
                  reject(err);
                })
            })
          );
        })

        Promise.all(promises)
          .then((data) => {
            const linkCount = selectedProducts.filter(item => item.shipswiftProduct !== undefined).length;
            handleChnaged('multi-link', linkCount, linkCount === productsData.length);
            
            updateToast(toastId.current, 'Successfully linked products.', 'success', 5000);
            let tempArr = productsData.filter((product) => !selectedProducts.some((prod) => prod.shipswiftProduct && prod.product.sku === product.sku));
            setProductsData(tempArr);
            let tempShipArr = shipswiftProductsData.filter((product) => !selectedProducts.some((prod) => product && prod.shipswiftProduct && prod.shipswiftProduct.sku === product.sku));
            setShipswiftProductData(tempShipArr);
            onClear();
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        
        updateToast(toastId.current, err.message, 'error', 5000);
      });
  };

  const onMultiUnlink = () => {
    if (selectedTab === 'linked') {
      toastId.current = addInfoToast('Unlinking products...', false);
      getProductClient()
        .then((client) => {
          const promises: any = [];
          selectedProducts.map((product) => {
            if (product.shipswiftProduct === undefined) return;
            const unlinkRequest = {
              companyId: companyId,
              storeProductSku: product.product.sku,
              storeProductUrl: product.product.url,
            };
            promises.push(
              new Promise<any>((resolve, reject) => {
                client
                  .unlinkProduct(unlinkRequest)
                  .then((resp) => {
                    resolve(resp);
                  })
                  .catch((err) => {
                    reject(err);
                  })
              })
            );
          })

          Promise.all(promises)
            .then((data) => {
              updateToast(toastId.current, 'Successfully unlinked products.', 'success', 5000);
              let tempArr = productsData.filter((product) => !selectedProducts.some((prod) => prod.shipswiftProduct && prod.product.sku === product.sku));
              setProductsData(tempArr);

              let tempShipswiftArr = shipswiftProductsData;
              selectedProducts.map((product) => {
                tempShipswiftArr.splice(product.index, 1);
              })

              handleChnaged('multi-unlink', selectedProducts.length, selectedProducts.length === productsData.length);
              setShipswiftProductData(tempShipswiftArr);

              onClear();

            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 5000);
            })
        })
        .catch((err) => {
          updateToast(toastId.current, err.message, 'error', 5000);
        })
    }
  }

  const onLink = (productSku: string, productUrl: string, shipswiftSku: string, index: number) => {
    toastId.current = addInfoToast('Linking product...', false);

    getProductClient()
      .then((client) => {
        const linkRequest = {
          companyId: companyId,
          sku: shipswiftSku,
          storeProductSku: productSku,
          storeProductUrl: productUrl,
        };
        client
          .linkProduct(linkRequest)
          .then((resp) => {
            updateToast(toastId.current, 'Successfully linked product.', 'success', 5000);
            let tempShipswiftArr = shipswiftProductsData;
            tempShipswiftArr.splice(index, 1);
            setShipswiftProductData(tempShipswiftArr);

            const tempArr = productsData.filter((product) => product.sku !== productSku);
            setProductsData(tempArr);

            handleChnaged('link');
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
      })
  }

  const onUnlink = (productSku: string, productUrl: string, shipswiftSku: string, index: number) => {
    if (selectedTab === 'linked') {
      toastId.current = addInfoToast('Unlinking product...', false, );
      getProductClient()
        .then((client) => {
          const unlinkRequest = {
            companyId: companyId,
            storeProductSku: productSku,
            storeProductUrl: productUrl
          };
          client
            .unlinkProduct(unlinkRequest)
            .then((resp) => {
              updateToast(toastId.current, 'Successfully unlinked product.', 'success', 5000);

              let tempShipswiftArr = shipswiftProductsData;
              tempShipswiftArr.splice(index, 1);
              setShipswiftProductData(tempShipswiftArr);

              const tempArr = productsData.filter((product) => product.sku !== productSku);
              setProductsData(tempArr);

              handleChnaged('unlink');
            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 5000);
            })
        })
        .catch((err) => {
          updateToast(toastId.current, err.message, 'error', 5000);
        })
    }
  }

  const onAdd = (product: any, index: number) => {
    toastId.current = addInfoToast('Creating product...', false);
    getProductClient()
      .then((client) => {
        const addRequest = {
          companyId: companyId,
          name: product.name,
          sku: product.code,
          price: {
            value: product.price
          },
          imageUrlsList: product.imagesList,
          weight: product.weight,
          width: product.width ? product.width.value : 0,
          height: product.height ? product.height.value : 0,
          length: product['length'] ? product['length'].value : 0,
          stockOnHand: product.quantity,
        };
        client
          .addProduct(addRequest)
          .then((res) => {
            const linkRequest = {
              companyId: companyId,
              sku: product.code,
              storeProductSku: product.code,
              storeProductUrl: product.url
            };
            client
              .linkProduct(linkRequest)
              .then((resp) => {
                updateToast(toastId.current, 'Successfully created product.', 'success', 5000);

                let tempShipswiftArr = shipswiftProductsData;
                tempShipswiftArr.splice(index, 1);
                setShipswiftProductData(tempShipswiftArr);

                const tempArr = productsData.filter((prod) => prod.sku !== product.code);
                setProductsData(tempArr);

                handleChnaged('link');
              })
              .catch((err) => {
                updateToast(toastId.current, err.message, 'error', 5000);
              })
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
      })
  }

  const onAddShipswiftProduct = (product: any, index: number) => {
    let tempShipswiftArr = shipswiftProductsData;
    tempShipswiftArr.splice(index, 1, product);
    setShipswiftProductData(tempShipswiftArr);
  }

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Merge>
          <TitleRaw.Checkbox
            handleChangeEvent={onClickAll}
            checked={selectedProducts.length === productsData.length && productsData.length ? true : false}
          />
          <TitleRaw.Item children={word('global.product')} />
        </TitleRaw.Merge>
        <TitleRaw.Item align='left' children={word('global.matching.product.in.shipswift')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {productsData.map((props, index) => {
        let product = {
          name: props.name,
          code: props.sku,
          image: props.imagesList && props.imagesList.length && props.imagesList[0].length > 0 ? props.imagesList[0] : PlaceholderImage,
          price: props.price ? props.price.value : 0,
          url: props.url,
          productSku: props.productSku,
          imagesList: props.imagesList,
          quantity: props.quantity,
          weight: props.weight,
          width: props.width,
          height: props.height,
          length: props.length
        };
        let storeData: StoreProps[] = stores.filter((item: any) => item.id === props.storeId);
        let shipswiftProduct = shipswiftProductsData[index];

        return (
          <ProductRaw
            key={index}
            index={index}
            product={product}
            storeId={props.storeId}
            iconColour={storeData.length ? storeData[0].iconColour : ''}
            shortName={storeData.length ? storeData[0].shortName : ''}
            selectedProducts={selectedProducts}
            shipswiftProduct={shipswiftProduct}
            shipswiftProductLength={shipswiftProductsData.length}
            onClickChecbox={() => onClickChecbox(props, shipswiftProduct, index)}
            onLink={(productSku: string, productUrl: string, shipswiftSku: string, i: number) => onLink(productSku, productUrl, shipswiftSku, index)}
            onUnlink={(productSku: string, productUrl: string, shipswiftSku: string) => onUnlink(productSku, productUrl, shipswiftSku, index)}
            onAdd={(product: any, i: number) => onAdd(product, i)}
            onAddShipProduct={(product: any, i: number) => onAddShipswiftProduct(product, i)}
          />)
      })}
      {selectedProducts.length > 0 && (
        <MultiSelectLinkProducts onClear={onClear} onAdd={onMultiAdd} onLink={onMultiLink} onUnlink={onMultiUnlink} count={selectedProducts.length} />
      )}
    </styled.BodyWrapper>
  );
};
