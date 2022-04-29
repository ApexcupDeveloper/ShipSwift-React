import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { CloseIconSquare16 } from '../../../../../assets/icons';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useProductClient } from '../../../../../client/client-hook';
import { GetAllProductsRequest } from '../../../../../proto/product_manager_pb';
import { getCompanyId } from '../../../../../utils';
import { IconButton } from '../../../../@core/modules/Button';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { AppRoutes } from '../../../../app/api';
import { PlaceholderImage } from '../../../../products/Product/views/OrderFormView/images';
import { addErrorToast } from '../../../../toast';

type Props = {
  id: string;
  name: string;
  quantity: string;
  price: string;
};

export const ProductsRaw: React.VFC<Props> = ({ id, name, quantity, price }) => {
  const { user } = useAuth0();
  const { push } = useHistory();
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const [loaded, setLoaded] = useState(false);
  const [errorLoadImage, setErrorLoadImage] = useState(false);
  const [image, setImage] = useState(PlaceholderImage);

  useEffect(() => {
    if (companyId) {
      setLoaded(false);
      getClient()
        .then((client) => {
          const requestProduct: GetAllProductsRequest.AsObject = {
            companyId: companyId,
            minQuantity: 0,
            maxQuantity: 0,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: id
            },
            paginationCursor: "",
            pageSize: 1,
            includeArchived: false
          };
          client
            .getAllProducts(requestProduct)
            .then((res: any) => {
              const productData = res.productsList[0];
              const img = productData && productData.imagesList.length > 0 ? productData.imagesList[0].url : PlaceholderImage;
              setImage(img);
              setLoaded(true);
            })
            .catch((err) => {
              addErrorToast(err.message);
              setLoaded(true);
            })
        })
        .catch((err) => {
          addErrorToast(err.message);
          setLoaded(true);
        })
    }
  }, [companyId])

  const onLinkProduct = useCallback(() => push(AppRoutes.Products.Product.Index.replace(':id', id)), [id, push]);


  return (
    <ItemRaw hover onClick={onLinkProduct}>
      {loaded && (
        <>
          <ItemRaw.Merge>
            <ItemRaw.ProductImage src={errorLoadImage ? PlaceholderImage : image} onError={() => setErrorLoadImage(true)} />
            <ItemRaw.NameContainer>
              <ItemRaw.Title bold children={name} />
              <ItemRaw.Title children={id} />
            </ItemRaw.NameContainer>
          </ItemRaw.Merge>
          <ItemRaw.Title flex={0.2} children={price} />
          <ItemRaw.Title flex={0.2} children={quantity} />
          <ItemRaw.Title flex={0.2} children={quantity} />
          <ItemRaw.Space flex={0} minWidth={30} >
            <IconButton>
              <CloseIconSquare16 />
            </IconButton>
          </ItemRaw.Space>
        </>
      )}
    </ItemRaw>
  );
};
