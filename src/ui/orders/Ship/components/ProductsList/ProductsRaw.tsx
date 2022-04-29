import { useEffect, useState } from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useProductClient } from '../../../../../client/client-hook';
import { GetAllProductsRequest } from '../../../../../proto/product_manager_pb';
import { getCompanyId } from '../../../../../utils';
import { InputCustom } from '../../../../@core/modules/Input';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { PlaceholderImage } from '../../../../products/Product/views/OrderFormView/images';
import { addErrorToast } from '../../../../toast';


type Props = {
  id: string,
  name: string,
  quantity: number,
  sku: string,
  shipswiftProductName: string,
  shipswiftProductSku: string,
  shipswiftProductId: number,
  api2cartOrderProductId: string
};

export const ProductsRaw: React.VFC<Props> = ({ name, quantity, sku, shipswiftProductName, shipswiftProductSku }) => {
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(PlaceholderImage);
  const [errorLoadImage, setErrorLoadImage] = useState(false);

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
              nameSkuFreeTextSearch: shipswiftProductSku
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

  return (
    <ItemRaw>
      {loaded && (
        <>
          <ItemRaw.Merge>
            <ItemRaw.ProductImage src={errorLoadImage ? PlaceholderImage : image} onError={() => setErrorLoadImage(true)} />
            <ItemRaw.NameContainer>
              <ItemRaw.Title bold children={shipswiftProductName} />
              <ItemRaw.Title children={shipswiftProductSku} />
            </ItemRaw.NameContainer>
          </ItemRaw.Merge>
          <ItemRaw.Title flex={0.2} children={quantity} />
        </>
      )}
    </ItemRaw>
  );
};
