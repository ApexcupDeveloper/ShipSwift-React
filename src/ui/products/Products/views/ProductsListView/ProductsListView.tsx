import { useState, useCallback, useEffect } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useShowedItemFilter } from '../../../../@core/modules/FilterBuilder/components/FiltersRow/useShowedItemFilter';

import { FilterButton } from '../../../../@core/modules/FilterBuilder';
import { InputSearch } from '../../../../@core/modules/Input';
import { PageControl, PerPage, PlacementCard, Tab } from '../../../../@core/modules/ListBuilder';
import { ProductsList } from '../../components/ProductsList';
import { MultiSelectProducts } from '../../components/ProductsList/MultiSelectProducts';
import { FiltersProductsModal } from '../../components/FiltersProductsModal';
import { FiltersProductsForm } from '../FiltersProductsForm';
import { AppliedFilters } from '../../components/AppliedFilters';
import * as styled from './ProductsListView.styled';
import { useProductClient } from '../../../../../client/client-hook';
import { addErrorToast } from '../../../../toast';
import { GetAllProductsRequest, ProductInfo, ProductsCountReply, ProductsCountRequest } from '../../../../../proto/product_manager_pb';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useStockQuantityFilter, useStoreFilter, useTagsFilter } from '../../../../@core/modules/FilterBuilder/hooks';
import { usePerPage } from '../../../../@core/modules/ListBuilder/hooks/usePerPage';
import { useSelectPage, useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';
import { useLocation } from 'react-router';

type Props = {};

export const ProductsListView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const { pathname } = useLocation();
  const { selectedTab } = useSelectTab();
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const { showed, setShowed } = useShowedItemFilter();
  const { dataApplied: tagFilter } = useTagsFilter();
  const { dataApplied: storeFilter } = useStoreFilter();
  const { dataApplied: stockQtyFilter } = useStockQuantityFilter();
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedRowsCount, setRowsCount } = usePerPage();
  const { setPageCount, currentPage, pageCount, canPrev, canNext, next, prev, setCurrentPage } = useSelectPage();

  const [allProducts, setAllProducts] = useState<ProductInfo.AsObject[]>([]);
  const [deletedProducts, setDeletedProducts] = useState<ProductInfo.AsObject[]>([]);
  const [allProductsCount, setAllProductsCount] = useState<number>(0);
  const [deletedProductsCount, setDeletedProductsCount] = useState<number>(0);

  const [loaded, setLoaded] = useState(false);
  const [selectedRows, setSelectedRows] = useState(10);
  const [handleChanged, setHandleChanged] = useState(false);
  const [stepButtonValue, setStepButtonValue] = useState('');
  const [nextStepButtonValue, setNextStepButtonValue] = useState('');
  const [changed, setChanged] = useState(false);

  const isVisible = useCallback(() => 'filterButton' === showed, [showed]);

  useEffect(() => {
    const rows = localStorage.getItem('products_row');
    if (rows) {
      setRowsCount({ label: rows, value: Number(rows) })
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('products_row', selectedRowsCount.value.toString());
    setSelectedRows(selectedRowsCount.value);
  }, [selectedRowsCount])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setChanged(prev => !prev);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [searchQuery])

  useEffect(() => {
    localStorage.setItem('products_pagination', JSON.stringify([""]));
    setStepButtonValue('');
    // setNextStepButtonValue('')
    if (pageCount) {
      setCurrentPage(1);
    } else {
      setCurrentPage(0);
    }

  }, [selectedTab, pageCount])

  useEffect(() => {
    if (companyId) {
      getProducts(companyId, storeFilter, tagFilter, stockQtyFilter, stepButtonValue, selectedRows)
        .then((data) => {
          const products: ProductInfo.AsObject[] = data[0].productsList;
          const deletedProducts: ProductInfo.AsObject[] = data[2].productsList;
          const nextValue = data[0].nextPageCursor;
          setNextStepButtonValue(nextValue);
          setAllProducts(products);
          setDeletedProducts(deletedProducts);

          const productsCount: ProductsCountReply.AsObject = data[1];
          setAllProductsCount(productsCount ? productsCount.count : 0);
          const deletedProductsCount: ProductsCountReply.AsObject = data[3];
          setDeletedProductsCount(deletedProductsCount ? deletedProductsCount.count : 0);

          if (selectedTab === '1' && productsCount) {
            setPageCount(Math.ceil(productsCount.count / selectedRows));
          } else if (selectedTab === '2' && productsCount) {
            setPageCount(Math.ceil(productsCount.count / selectedRows));
          } else if (selectedTab === '3' && productsCount) {
            setPageCount(Math.ceil(productsCount.count / selectedRows));
          } else if (selectedTab === '4' && deletedProductsCount) {
            setPageCount(Math.ceil(deletedProductsCount.count / selectedRows));
          }

          setLoaded(true);
        })
        .catch((err) => {
          setLoaded(true);
          addErrorToast(err.message);
        })
    }
  }, [companyId, storeFilter, tagFilter, stockQtyFilter, currentPage, selectedRows, selectedTab, handleChanged, pathname, changed])

  const getProducts = (companyId: string, storeFilter: any, tagFilter: any, stockQtyFilter: any, stepButtonValue: string, selectedRows: number): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          const requestProduct: GetAllProductsRequest.AsObject = {
            companyId: companyId,
            minQuantity: stockQtyFilter && stockQtyFilter[0] ? stockQtyFilter[0] : 0,
            maxQuantity: stockQtyFilter && stockQtyFilter[1] ? stockQtyFilter[1] : 0,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: searchQuery
            },
            paginationCursor: stepButtonValue,
            pageSize: selectedRows,
            includeArchived: false
          };

          const requestDeletedProduct: any = {
            companyId: companyId,
            minQuantity: 0,
            maxQuantity: 0,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: searchQuery
            },
            paginationCursor: stepButtonValue,
            pageSize: selectedRows
          };

          const allProductsCountRequest: ProductsCountRequest.AsObject = {
            companyId: companyId,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: searchQuery
            },
            minQuantity: stockQtyFilter && stockQtyFilter[0] ? stockQtyFilter[0] : 0,
            maxQuantity: stockQtyFilter && stockQtyFilter[1] ? stockQtyFilter[1] : 0,
            includeArchived: false
          };

          const deletedProductsCountRequest: ProductsCountRequest.AsObject = {
            companyId: companyId,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: searchQuery
            },
            minQuantity: 0,
            maxQuantity: 0,
            includeArchived: false
          };

          // const outStockProductsCountRequest: ProductsCountRequest.AsObject = {
          //   companyId: companyId,
          //   storeFilter: {
          //     storeId: '',
          //     sku: '',
          //     name: ''
          //   },
          //   minQuantity: stockQtyFilter && stockQtyFilter[0] ? stockQtyFilter[0] : 0,
          //   maxQuantity: stockQtyFilter && stockQtyFilter[1] ? stockQtyFilter[1] : 0
          // };

          // const lowStockProductsCountRequest: ProductsCountRequest.AsObject = {
          //   companyId: companyId,
          //   storeFilter: {
          //     storeId: '',
          //     sku: '',
          //     name: ''
          //   },
          //   minQuantity: stockQtyFilter && stockQtyFilter[0] ? stockQtyFilter[0] : 0,
          //   maxQuantity: stockQtyFilter && stockQtyFilter[1] ? stockQtyFilter[1] : 0
          // };

          Promise.all([
            client.getAllProducts(requestProduct),
            client.productsCount(allProductsCountRequest),
            client.getAllArchivedProducts(requestDeletedProduct),
            client.archivedProductsCount(deletedProductsCountRequest),
            // client.productsCount(outStockProductsCountRequest),
            // client.productsCount(lowStockProductsCountRequest)
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

  const onClose = () => {
    setShowed(undefined)
  }

  const onShow = () => {
    if (showed === 'filterButton') {
      setShowed(undefined);
    } else {
      setShowed('filterButton')
    }
  }

  const onNext = () => {
    if (loaded) {
      setLoaded(false);
      next();
      const paginationHistoryString = localStorage.getItem('products_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      localStorage.setItem('products_pagination', JSON.stringify([...paginationHistory, nextStepButtonValue]));
      setStepButtonValue(nextStepButtonValue);
    }
  }

  const onPrev = () => {
    if (loaded) {
      setLoaded(false);
      prev();
      const paginationHistoryString = localStorage.getItem('products_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      const prevValue = paginationHistory[currentPage - 2];
      const newHistory = paginationHistory.filter((item) => item !== paginationHistory[currentPage - 1]);
      localStorage.setItem('products_pagination', JSON.stringify(newHistory));
      setStepButtonValue(prevValue);
    }
  }

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <Tab.Group>
            <Tab label={word('global.all')} count={allProductsCount} id="1" default />
            <Tab label={word('product.filter.out-of-stock')} count={0} id="2" />
            <Tab label={word('product.filter.low-stock')} count={0} id="3" />
            <Tab label={word('product.filter.deleted')} count={deletedProductsCount} id="4" />
          </Tab.Group>
          <styled.FilterWrapper>
            <InputSearch width={300} value={searchQuery} onChange={(e) => setSearchQuery(e)} />
            {selectedTab !== "4" && (
              <>
                <FilterButton showed={isVisible()} onClick={onShow} />
                <FiltersProductsModal visible={isVisible()} onClose={onClose}>
                  <FiltersProductsForm visible />
                </FiltersProductsModal>
              </>
            )}
          </styled.FilterWrapper>
        </PlacementCard.Header>
        <AppliedFilters />
        <PlacementCard.Content>
          <Tab.Content id="1">
            <ProductsList products={allProducts} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
          <Tab.Content id="2">
            <ProductsList products={allProducts} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
          <Tab.Content id="3">
            <ProductsList products={allProducts} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
          <Tab.Content id="4">
            <ProductsList products={deletedProducts} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
        </PlacementCard.Content>
        <PlacementCard.Footer>
          <PageControl showEntries onNext={onNext} onPrev={onPrev} />
          <PerPage />
        </PlacementCard.Footer>
      </PlacementCard>
      {/* <MultiSelectProducts /> */}
    </styled.BodyWrapper>
  );
};
