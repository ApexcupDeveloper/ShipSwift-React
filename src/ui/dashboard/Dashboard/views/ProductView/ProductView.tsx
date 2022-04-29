import { useEffect, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useProductClient } from '../../../../../client/client-hook';
import { GetAllProductsRequest, ProductInfo, ProductsCountReply, ProductsCountRequest } from '../../../../../proto/product_manager_pb';
import { getCompanyId } from '../../../../../utils';

import { PageControl, PlacementCard, Tab } from '../../../../@core/modules/ListBuilder';
import { useSelectPage, useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';
import { addErrorToast } from '../../../../toast';
import { ProductList } from '../../components/ProductList';

import * as styled from './ProductView.styled';

type Props = {};

export const ProductView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { setPageCount, currentPage, pageCount, canPrev, canNext, next, prev, setCurrentPage } = useSelectPage();
  const { selectedTab } = useSelectTab();
  const getClient = useProductClient();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const [loaded, setLoaded] = useState(false);

  const [allProducts, setAllProducts] = useState<ProductInfo.AsObject[]>([]);
  const [allProductsCount, setAllProductsCount] = useState<number>(0);

  const [stepButtonValue, setStepButtonValue] = useState('');
  const [nextStepButtonValue, setNextStepButtonValue] = useState('');


  useEffect(() => {
    if (companyId) {
      getProducts(companyId, stepButtonValue)
        .then((data) => {
          const products: ProductInfo.AsObject[] = data[0].productsList;
          const nextValue = data[0].nextPageCursor;
          setNextStepButtonValue(nextValue);
          setAllProducts(products);

          const productsCount: ProductsCountReply.AsObject = data[1];
          setAllProductsCount(productsCount ? productsCount.count : 0);

          setPageCount(Math.ceil(productsCount.count / 5))

          setLoaded(true);
        })
        .catch((err) => {
          setLoaded(true);
          addErrorToast(err.message);
        })
    }
  }, [companyId, currentPage, selectedTab])

  const getProducts = (companyId: string, stepButtonValue: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          const requestProduct: GetAllProductsRequest.AsObject = {
            companyId: companyId,
            minQuantity: 0,
            maxQuantity: 0,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: ''
            },
            paginationCursor: stepButtonValue,
            includeArchived: false,
            pageSize: 5
          };

          const allProductsCountRequest: ProductsCountRequest.AsObject = {
            companyId: companyId,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: ''
            },
            minQuantity: 0,
            maxQuantity: 0,
            includeArchived: false,
          };

          Promise.all([
            client.getAllProducts(requestProduct),
            client.productsCount(allProductsCountRequest)
          ]).then(data => {
            resolve(data);
          }, error => {
            reject(error);
          });
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  const onNext = () => {
    if (loaded) {
      setLoaded(false);
      next();
      const paginationHistoryString = localStorage.getItem('dash_products_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      localStorage.setItem('dash_products_pagination', JSON.stringify([...paginationHistory, nextStepButtonValue]));
      setStepButtonValue(nextStepButtonValue);
    }
  }

  const onPrev = () => {
    if (loaded) {
      setLoaded(false);
      prev();
      const paginationHistoryString = localStorage.getItem('dash_products_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      const prevValue = paginationHistory[currentPage - 2];
      const newHistory = paginationHistory.filter((item) => item !== paginationHistory[currentPage - 1]);
      localStorage.setItem('dash_products_pagination', JSON.stringify(newHistory));
      setStepButtonValue(prevValue);
    }
  }


  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <PlacementCard.Title children={word('products')} />
          <Tab.Group>
            <Tab label={word('global.all')} count={allProductsCount} id="1" default />
            <Tab label={word('product.filter.needs-reorder')} count={3} id="2" />
            <Tab label={word('product.filter.inbound')} count={4} id="3" />
          </Tab.Group>
        </PlacementCard.Header>
        <PlacementCard.Content>
          <Tab.Content id="1">
            <ProductList products={allProducts} />
          </Tab.Content>
          <Tab.Content id="2">
            <ProductList products={allProducts} />
          </Tab.Content>
          <Tab.Content id="3">
            <ProductList products={allProducts} />
          </Tab.Content>
        </PlacementCard.Content>
        <PlacementCard.Footer>
          <PageControl showEntries onNext={onNext} onPrev={onPrev} />
        </PlacementCard.Footer>
      </PlacementCard>
    </styled.BodyWrapper>
  );
};
