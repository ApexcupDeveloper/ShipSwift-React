import { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CheckIcon16, CloseIconSquare16, PlusIcon16 } from '../../../../../assets/icons';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useProductClient } from '../../../../../client/client-hook';
import { GetAllProductsRequest, ProductInfo, StoreProductInfo } from '../../../../../proto/product_manager_pb';
import { getCompanyId } from '../../../../../utils';
import { useWithoutBubble } from '../../../../@core/hooks/useWithoutBubble';
import { IconButton } from '../../../../@core/modules/Button';
import { InputSearch } from '../../../../@core/modules/Input';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';
import { AvatarLetter } from '../../../../@core/modules/Other';
import { Tooltip } from '../../../../@core/modules/Tooltip';
import { AppRoutes } from '../../../../app/api';
import { PlaceholderImage } from '../../../../products/Product/views/OrderFormView/images';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';

import * as styled from './ProductsList.styled';

type Props = {
  index: number;
  product: {
    image: string;
    name: string;
    code: string;
    price: number;
    url: string;
    productSku: string;
    imagesList: string[];
  };
  storeId: string;
  iconColour: string;
  shortName: string;
  selectedProducts: SelectedProductProps[];
  shipswiftProduct: any;
  shipswiftProductLength: number;
  onClickChecbox?: () => void;
  onLink: (productSku: string, productUrl: string, shipswiftSku: string, index: number) => void;
  onUnlink: (productSku: string, productUrl: string, shipswiftSku: string) => void;
  onAdd: (product: any, index: number) => void;
  onAddShipProduct: (product: any, index: number) => void;
};

type SelectedProductProps = {
  product: StoreProductInfo.AsObject,
  shipswiftProduct: any
}

export const ProductRaw: React.VFC<Props> = ({ index, product, storeId, iconColour, shortName, selectedProducts, shipswiftProduct, shipswiftProductLength, onClickChecbox, onLink, onUnlink, onAdd, onAddShipProduct }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const toastId = useRef<any>(null);
  const { selectedTab } = useSelectTab();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedProducts, setSearchedProducts] = useState<ProductInfo.AsObject[]>([]);
  const [shipSwiftProduct, setShipSwiftProduct] = useState<any>(shipswiftProduct);
  const [errorLoadImage, setErrorLoadImage] = useState(false);
  const [errorLoadImage1, setErrorLoadImage1] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchedImageError, setSearchedImageError] = useState<string[]>([]);

  useEffect(() => {
    setShipSwiftProduct(shipswiftProduct);
  }, [shipswiftProduct, shipswiftProductLength])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery && !searching) {
        setSearching(true);
        const requestProduct: GetAllProductsRequest.AsObject = {
          companyId: companyId,
          minQuantity: 0,
          maxQuantity: 0,
          storeFilter: {
            storeIdsList: [],
            nameSkuFreeTextSearch: searchQuery
          },
          paginationCursor: "",
          pageSize: 1000000,
          includeArchived: false
        };
        getClient()
          .then((client) => {
            client
              .getAllProducts(requestProduct)
              .then((res: any) => {
                setSearchedProducts(res.productsList);
                setSearching(false);
              })
              .catch((err) => {
                addErrorToast(err.message);
                setSearching(false);
              })
          })
          .catch((err) => {
            addErrorToast(err.message);
            setSearching(false);
          })
      } else {
        setSearchedProducts([])
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery])

  // const onAdd = useCallback(() => push(AppRoutes.Settings.LinkProducts.Search.Product), [push]);
  const onClickWithoutBubble = useWithoutBubble();

  const onAddShipSwiftProduct = (product: any) => {
    setShipSwiftProduct(product);
    onAddShipProduct(product, index);
    setSearchQuery('');
  }

  return (
    <ItemRaw>
      <ItemRaw.Merge>
        <ItemRaw.Checkbox
          onClickWrapper={onClickWithoutBubble}
          handleChangeEvent={onClickChecbox}
          checked={selectedProducts.some((item: any) => item.product.sku === product.code)}
        />
        <AvatarLetter name={shortName} backgroundColor={iconColour} />
        <ItemRaw.ProductImage src={errorLoadImage1 ? PlaceholderImage : product.image} onError={() => setErrorLoadImage1(true)} />
        <ItemRaw.NameContainer>
          <ItemRaw.Title bold children={product.name} />
          <ItemRaw.Title children={product.code} />
        </ItemRaw.NameContainer>
      </ItemRaw.Merge>
      {shipSwiftProduct ? (
        <>
          <ItemRaw.Merge>
            <ItemRaw.ProductImage src={shipSwiftProduct.imagesList.length > 0 ? !errorLoadImage ? shipSwiftProduct.imagesList[0].url : PlaceholderImage : PlaceholderImage} onError={() => setErrorLoadImage(shipSwiftProduct.sku)} />
            <ItemRaw.NameContainer>
              <ItemRaw.Title bold children={shipSwiftProduct.name} />
              <ItemRaw.Title children={shipSwiftProduct.sku} />
            </ItemRaw.NameContainer>
          </ItemRaw.Merge>
          <styled.IconButtonWrapper>
            {selectedTab === 'unlinked' && (
              <IconButton onClick={() => {
                onLink(product.code, product.url, shipSwiftProduct.sku, index);
                setSearchQuery('');
              }}>
                <Tooltip
                  align="center"
                  position="top"
                  content={word('product.link')}
                  children={<CheckIcon16 className={'green'} />}
                />
              </IconButton>
            )}
            <IconButton onClick={() => {
              if (selectedTab === 'linked') {
                onUnlink(product.code, product.url, shipSwiftProduct.sku);
                setShipSwiftProduct(undefined);
                onAddShipProduct(undefined, index);
              } else {
                setShipSwiftProduct(undefined);
                onAddShipProduct(undefined, index);
              }
            }}>
              <Tooltip
                align="center"
                position="top"
                content={selectedTab === 'unlinked' ? word('product.dontlink') : word('product.unlink')}
                children={<CloseIconSquare16 className={'red smaller-close'} />}
              />
            </IconButton>
          </styled.IconButtonWrapper>
        </>
      ) : (
        <>
          <styled.SearchWrapper>
            <InputSearch value={searchQuery} onChange={setSearchQuery} />
            {searchedProducts.length > 0 && (
              <styled.SearchModalWrapper>
                {searchedProducts.map((product, index) => {
                  return (
                    <styled.SearchRow key={index} onClick={() => onAddShipSwiftProduct(product)}>
                      <ItemRaw.Merge>
                        <ItemRaw.ProductImage src={product.imagesList.length > 0 ? searchedImageError.filter((item) => item === product.sku).length === 0 ? product.imagesList[0].url : PlaceholderImage : PlaceholderImage} onError={() => { let tempArr = searchedImageError; tempArr.push(product.sku); setSearchedImageError(tempArr) }} style={{ objectFit: 'cover' }} />
                        <ItemRaw.NameContainer>
                          <ItemRaw.Title bold children={product.name} />
                          <ItemRaw.Title children={product.sku} />
                        </ItemRaw.NameContainer>
                      </ItemRaw.Merge>
                    </styled.SearchRow>
                  )
                })}
              </styled.SearchModalWrapper>
            )}
          </styled.SearchWrapper>
          <styled.IconButtonWrapper>
            <IconButton onClick={() => onAdd(product, index)}>
              <Tooltip
                align="center"
                position="top"
                content={word('product.create')}
                children={<PlusIcon16 className={'grey'} />}
              />
            </IconButton>
          </styled.IconButtonWrapper>
        </>
      )}
    </ItemRaw>
  );
};
