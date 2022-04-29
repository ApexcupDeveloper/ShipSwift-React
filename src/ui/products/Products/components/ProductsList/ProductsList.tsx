import { useLocale } from '../../../../../assets/locale';

import { TooltipsList } from '../../../../@core/modules/Tooltip';
import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductRaw } from './ProductsRaw';

import * as styled from './ProductsList.styled';
import { ProductInfo } from '../../../../../proto/product_manager_pb';
import { MultiSelectProducts } from './MultiSelectProducts';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useProductClient } from '../../../../../client/client-hook';
import { addInfoToast, updateToast } from '../../../../toast';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

type Props = {
  products: ProductInfo.AsObject[];
  handleChangeEvent: () => void;
};

export const ProductsList: React.VFC<Props> = ({ products, handleChangeEvent }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const { push } = useHistory();
  const toastId = useRef<any>(null);
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const [isEdit, setIsEdit] = useState('')
  const [selectedProducts, setSelectedProducts] = useState<ProductInfo.AsObject[]>([]);
  const [productList, setProductList] = useState<ProductInfo.AsObject[]>([]);
  const [diffStock, setDiffStock] = useState(0);
  const [selectedSku, setSelectedSku] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (products) {
      setProductList(products)
    }
  }, [products])

  useEffect(() => {
      if(updating) return
      if(selectedSku && !isEdit) {
        setUpdating(true);
        toastId.current = addInfoToast('Updating product...', false);
        getClient()
          .then((client) => {
            client
              .updateStock({
                sku: selectedSku,
                companyId: companyId,
                stockOnHandAdjustment: diffStock
              })
              .then((res) => {
                handleChangeEvent();
                setDiffStock(0);
                setSelectedSku('');
                setUpdating(false);
                updateToast(toastId.current, `Successfully updated`, 'success', 2000);
              })
              .catch((err) => {
                setUpdating(false);
                setDiffStock(0);
                setSelectedSku('');
                updateToast(toastId.current, err.message, 'error', 2000);
              })
          })
          .catch((err) => {
            setUpdating(false);
            setDiffStock(0);
            setSelectedSku('');
            updateToast(toastId.current, err.message, 'error', 2000);
          })
      }
  }, [selectedSku, diffStock, isEdit])

  useEffect(() => {
    document.addEventListener("click", (evt) => {
      const flyoutElement = document.getElementById(isEdit);
      let targetElement: any = evt.target;
      do {
        if (targetElement == flyoutElement) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);
      setIsEdit('')
    });
  }, [])

  const onOpenProduct = (name: string, sku: string) => {
    if (isEdit) {
      setIsEdit('');
    } else {
      const productLink = AppRoutes.Products.Product.Index.replace(':id', sku)
      push(productLink, name)
    }
  }
  const onClickChecbox = (product: ProductInfo.AsObject) => {
    if (selectedProducts.some((item) => item.sku === product.sku)) {
      setSelectedProducts(selectedProducts.filter((item) => item.sku !== product.sku));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const onClickAll = (e: any) => {
    if (selectedProducts.length !== products.length) {
      setSelectedProducts(products);
    } else {
      setSelectedProducts([]);
    }
  };

  const onClear = () => {
    setSelectedProducts([]);
  };

  const onDelete = () => {
    toastId.current = addInfoToast(`Deleting products...`, false);
    getClient()
      .then((client) => {
        selectedProducts.map((product) => {
          client
            .unlinkAllStoreProductsFromStore({
              companyId: companyId,
              sku: product.sku
            })
            .then((res) => {
              client
                .setProductArchived({
                  companyId: companyId,
                  productSku: product.sku,
                  archived: true
                })
                .then((res) => {
                  handleChangeEvent();
                  updateToast(toastId.current, `Products deleted`, 'success', 2000);
                })
                .catch((err) => {
                  updateToast(toastId.current, err.message, 'error', 2000);
                })
            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 2000);
            })
        })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 2000);
      })
  }

  const onUpdateStock = (value: string, sku: string) => {
    if (updating) return;
    let tempArr = productList;
    let newArr: any = tempArr.map((item, index) => {
      if (item.sku === sku) {
        setSelectedSku(sku);
        setDiffStock(Number(value) - item.stockOnHand)
        return { ...item, stockOnHand: value }
      }
      return item
    })
    setProductList(newArr);
  }

  return (
    <TooltipsList itemsCount={products.length}>
      <styled.BodyWrapper>
        <TitleRaw>
          <TitleRaw.Merge flex={1.5}>
            <TitleRaw.Checkbox
              handleChangeEvent={onClickAll}
              checked={selectedProducts.length === products.length && products.length ? true : false}
            />
            <TitleRaw.Item children={word('product.name')} />
          </TitleRaw.Merge>
          <TitleRaw.Item children={word('global.sku')} />
          <TitleRaw.Item children={word('global.barcode')} />
          <TitleRaw.Item flex={0.5} children={word('global.on-hand')} />
          <TitleRaw.Item flex={0.5} children={word('global.allocated')} />
          <TitleRaw.Item flex={0.5} children={word('global.available')} />
          <TitleRaw.Item flex={0.5} children={word('global.backorder')} />
        </TitleRaw>
        {productList.map((props, index) => {
          let available = props.stockOnHand - props.stockAllocated;
          return (
            <ProductRaw
              key={props.sku}
              name={props.name}
              sku={props.sku}
              barcode={props.barcode}
              onHand={props.stockOnHand.toString()}
              available={available > 0 ? available.toString() : '0'}
              backorder={available < 0 ? (Math.abs(available)).toString() : '0'}
              allocated={props.stockAllocated.toString()}
              selectedProducts={selectedProducts}
              onClickChecbox={() => onClickChecbox(props)}
              productData={props}
              handleChangeEvent={handleChangeEvent}
              onOpenProduct={(name, sku) => { onOpenProduct(name, sku) }}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              onUpdateStock={(e: string) => { onUpdateStock(e, props.sku) }}
            />
          )
        })}
        {selectedProducts.length > 0 && (
          <MultiSelectProducts onClear={onClear} count={selectedProducts.length} productData={selectedProducts} onDelete={onDelete} />
        )}
      </styled.BodyWrapper>
    </TooltipsList>
  );
};
