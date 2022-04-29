import { useLocale } from '../../../../../assets/locale';

import { PageControl, PerPage, PlacementCard, Tab } from '../../../../@core/modules/ListBuilder';
import { InputSearch } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';
import { MainButton } from '../../../../@core/modules/Button';
import { ProductsList } from '../../components/ProductsList';

import { ProductTabConfig } from './LinkProductsView.config';

import * as styled from './LinkProductsView.styled';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useGrpcClient, useProductClient } from '../../../../../client/client-hook';
import { useEffect, useRef, useState } from 'react';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { GetAllProductsRequest, GetAllStoreProductsRequest, StoreProductInfo, StoreProductsCountReply, StoreProductsCountRequest } from '../../../../../proto/product_manager_pb';
import { usePerPage } from '../../../../@core/modules/ListBuilder/hooks/usePerPage';
import { useSelectPage, useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';
import { cacheService } from '../../../../../utils/cache-service';
import { config } from '../../../../../private';

type Props = {};

type StorePros = {
  label: string,
  value: string
}


type StoreDataProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
}

export const LinkProductsView: React.VFC<Props> = () => {
  let dataSubscription: any;
  const { word } = useLocale();
  const { user } = useAuth0();
  const toastId = useRef<any>(null);
  const { selectedTab } = useSelectTab();
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const getStoreClient = useGrpcClient();
  const { selectedRowsCount, setRowsCount } = usePerPage();
  const { setPageCount, currentPage, pageCount, canPrev, canNext, next, prev, setCurrentPage } = useSelectPage();

  const [allStoreProducts, setAllStoreProducts] = useState<StoreProductInfo.AsObject[]>([]);
  const [productsUnlinkedCount, setProductsUnlinkedCount] = useState<number>(0);
  const [productsLinkedCount, setProductsLinkedCount] = useState<number>(0);

  const [stores, setStores] = useState<StorePros[]>([]);
  const [storesData, setStoresData] = useState<StoreDataProps[]>([]);

  const [loaded, setLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [handleChanged, setHandleChanged] = useState(false);
  const [selectedRows, setSelectedRows] = useState(10);
  const [stepButtonValue, setStepButtonValue] = useState('');
  const [nextStepButtonValue, setNextStepButtonValue] = useState('');
  const [selectedStore, setSelectedStore] = useState<StorePros[]>([{ label: 'All stores', value: 'all' }]);
  const [isLoading, setIsLoading] = useState(true);

  const [shipswiftProducts, setShipswiftProducts] = useState<any[]>([]);

  useEffect(() => {
    const rows = localStorage.getItem('link_products_row');
    if (rows) {
      setRowsCount({ label: rows, value: Number(rows) })
    }

    return () => {
      cacheService.stopPoll('stores');
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('link_products_row', selectedRowsCount.value.toString());
    setSelectedRows(selectedRowsCount.value);
  }, [selectedRowsCount])

  useEffect(() => {
    localStorage.setItem('store_products_pagination', JSON.stringify([""]));
    setStepButtonValue('');
    // setNextStepButtonValue('')
    // setIsLoading(true);
    if (pageCount) {
      setCurrentPage(1);
    } else {
      setCurrentPage(0);
    }

  }, [selectedTab, pageCount])

  useEffect(() => {
    if (companyId) {
      setIsLoading(true);
      Promise.all([
        getAllStoreProducts(),
        getStoreData()
      ])
        .then((data) => {
          const linkedProducts: StoreProductInfo.AsObject[] = data[0][0].storeProductsList;
          const nextValue = data[0][0].nextPageCursor;
          setNextStepButtonValue(nextValue);
          setAllStoreProducts(linkedProducts);

          const productsLinkedCount: StoreProductsCountReply.AsObject = data[0][1];
          setProductsLinkedCount(productsLinkedCount ? productsLinkedCount.count : 0);

          const productsUnlinkedCount: StoreProductsCountReply.AsObject = data[0][2];
          setProductsUnlinkedCount(productsUnlinkedCount ? productsUnlinkedCount.count : 0);


          if (selectedTab === 'unlinked' && productsUnlinkedCount) {
            setPageCount(Math.ceil(productsUnlinkedCount.count / selectedRows));
          } else if (selectedTab === 'linked' && productsLinkedCount) {
            setPageCount(Math.ceil(productsLinkedCount.count / selectedRows));
          }

          let tempStores: StorePros[] = [{ label: 'All stores', value: 'all' }];
          if (data[1].length) {
            data[1].map((item: any) => {
              tempStores.push({ label: item.name, value: item.id });
            })
          }
          setStores(tempStores);
          setStoresData(data[1]);
          setLoaded(true);
        })
        .catch((err) => {
          addErrorToast(err.message);
          setIsLoading(false);
          setLoaded(true);
        })
    }
  }, [companyId, currentPage, selectedRows, selectedTab, selectedStore, searchQuery, handleChanged])

  useEffect(() => {
  }, [allStoreProducts])

  useEffect(() => {
    if (allStoreProducts.length > 0) {
      const promises: any = [];
      allStoreProducts.map((product) => {
        promises.push(getAllProducts(selectedTab === 'linked' ? product.productSku : product.sku))
      })

      Promise.all(promises)
        .then((data) => {
          setShipswiftProducts(data);
          setIsLoading(false);
        })
        .catch((err) => {
          addErrorToast(err.message);
          setIsLoading(false);
        })
    }
  }, [allStoreProducts])

  useEffect(() => {
    var loaded = false;
    if(storesData.length && allStoreProducts.length) {
      allStoreProducts.map((product) => {
        if (!loaded) {
          var tempStore = storesData.filter(store => store.id === product.storeId);
          if (tempStore.length === 0) {
            loaded = true;
            getStoreClient()
              .then((client) => {
                client
                  .getAllStores(companyId)
                  .then((res) => {
                    setStoresData(res);
                    let tempStores: StorePros[] = [{ label: 'All stores', value: 'all' }];
                    if (res.length) {
                      res.map((item: any) => {
                        tempStores.push({ label: item.name, value: item.id });
                      })
                    }
                  })
                  .catch((err) => {
                  })
              })
              .catch((err) => {
              });
          }
        }
      })
    }
  }, [storesData, allStoreProducts])

  const getAllStoreProducts = () => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          let storeIds: string[] = [];
          if (selectedStore[0].value === 'all') {
            storeIds = [];
          } else {
            storeIds = [selectedStore[0].value];
          }
          const requestLinkedProduct: GetAllStoreProductsRequest.AsObject = {
            companyId: companyId,
            storeFilter: {
              storeIdsList: storeIds,
              nameSkuFreeTextSearch: searchQuery
            },
            includeArchived: false,
            linkedOnly: selectedTab === 'linked' ? true : false,
            unlinkedOnly: selectedTab === 'unlinked' ? true : false,
            paginationCursor: stepButtonValue,
            pageSize: selectedRows
          };

          const requestUnlinkedProductCount: StoreProductsCountRequest.AsObject = {
            companyId: companyId,
            storeFilter: {
              storeIdsList: storeIds,
              nameSkuFreeTextSearch: searchQuery
            },
            includeArchived: false,
            linkedOnly: false,
            unlinkedOnly: true,
          };

          const requestLinkedProductCount: StoreProductsCountRequest.AsObject = {
            companyId: companyId,
            storeFilter: {
              storeIdsList: storeIds,
              nameSkuFreeTextSearch: searchQuery
            },
            includeArchived: false,
            linkedOnly: true,
            unlinkedOnly: false
          };

          Promise.all([
            client.getAllStoreProducts(requestLinkedProduct),
            client.storeProductsCount(requestLinkedProductCount),
            client.storeProductsCount(requestUnlinkedProductCount),
          ]).then(data => {
            resolve(data);
          }, error => {
            reject(error);
          })
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  const getStoreData = () => {
    return new Promise<any>((resolve, reject) => {
      cacheService.stopPoll('stores');
      dataSubscription = cacheService.callWithCache('stores', 'main_stores', getStores.bind(this), [], config.cache.store_timeout)
        .subscribe((data: any[]) => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })
  }

  const getStores = () => {
    return new Promise<any>((resolve, reject) => {
      getStoreClient()
        .then((client) => {
          client
            .getAllStores(companyId)
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            })
        })
        .catch((err) => {
          reject(err);
        });
    })
  };

  const getAllProducts = (sku: string) => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          const requestProduct: GetAllProductsRequest.AsObject = {
            companyId: companyId,
            minQuantity: 0,
            maxQuantity: 0,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: sku
            },
            paginationCursor: "",
            pageSize: 1,
            includeArchived: false
          };

          client
            .getAllProducts(requestProduct)
            .then((res: any) => {
              resolve(res.productsList[0]);
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

  const onNext = () => {
    if (loaded) {
      setLoaded(false);
      next();
      const paginationHistoryString = localStorage.getItem('store_products_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      localStorage.setItem('store_products_pagination', JSON.stringify([...paginationHistory, nextStepButtonValue]));
      setStepButtonValue(nextStepButtonValue);
    }
  }

  const onPrev = () => {
    if (loaded) {
      setLoaded(false);
      prev();
      const paginationHistoryString = localStorage.getItem('store_products_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      const prevValue = paginationHistory[currentPage - 2];
      const newHistory = paginationHistory.filter((item) => item !== paginationHistory[currentPage - 1]);
      localStorage.setItem('store_products_pagination', JSON.stringify(newHistory));
      setStepButtonValue(prevValue);
    }
  }

  const onLinkorUnlink = () => {
    if (selectedTab === 'linked') {
      toastId.current = addInfoToast('Unlinking products...', false);
      getClient()
        .then((client) => {
          const promises: any[] = [];
          allStoreProducts.map((product) => {
            const unlinkRequest = {
              companyId: companyId,
              storeProductSku: product.sku,
              storeProductUrl: product.url
            };
            promises.push(
              new Promise<any>((resolve, reject) => {
                client
                  .unlinkProduct(unlinkRequest)
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
              updateToast(toastId.current, 'Successfully unlinked products.', 'success', 5000);
              setHandleChanged(prev => !prev);
            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 5000);
            })
        })
        .catch((err) => {
          updateToast(toastId.current, err.message, 'error', 5000);
        })
    } else {
      toastId.current = addInfoToast('Linking products...', false);
      getClient()
        .then((client) => {
          const promises: any[] = [];
          allStoreProducts.map((product) => {
            const requestProduct: GetAllProductsRequest.AsObject = {
              companyId: companyId,
              minQuantity: 0,
              maxQuantity: 0,
              storeFilter: {
                storeIdsList: [],
                nameSkuFreeTextSearch: product.sku
              },
              paginationCursor: "",
              pageSize: 1,
              includeArchived: false
            };

            promises.push(
              new Promise<any>((resolve, reject) => {
                client
                  .getAllProducts(requestProduct)
                  .then((res: any) => {
                    if (res && res.productsList && res.productsList.length > 0) {
                      const linkRequest = {
                        companyId: companyId,
                        sku: res.productsList[0].sku,
                        storeProductSku: res.productsList[0].sku,
                        storeProductUrl: res.productsList[0].url
                      };
                      client
                        .linkProduct(linkRequest)
                        .then((resp) => {
                          resolve(resp);
                        })
                        .catch((err) => {
                          reject(err);
                        })
                    } else {
                      resolve({});
                    }
                  })
                  .catch((err) => {
                    reject(err);
                  })
              })
            );
          })

          Promise.all(promises)
            .then((data) => {
              updateToast(toastId.current, 'Successfully linked products.', 'success', 5000);
              setHandleChanged(prev => !prev);
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

  const handleChnaged = (e: string, count?: number, empty?: boolean) => {
    if (e === 'link') {
      setProductsUnlinkedCount(productsUnlinkedCount - 1);
      setProductsLinkedCount(productsLinkedCount + 1);
    }
    else if (e === 'unlink') {
      setProductsUnlinkedCount(productsUnlinkedCount + 1);
      setProductsLinkedCount(productsLinkedCount - 1);
    }
    else if (e === 'multi-link' && count) {
      setProductsUnlinkedCount(productsUnlinkedCount - count);
      setProductsLinkedCount(productsLinkedCount + count);
      if (empty) {
        setHandleChanged(prev => !prev);
      }
    }
    else if (e === 'multi-unlink' && count) {
      setProductsUnlinkedCount(productsUnlinkedCount + count);
      setProductsLinkedCount(productsLinkedCount - count);
      if (empty) {
        setHandleChanged(prev => !prev);
      }
    }
  }

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <Tab.Group>
            <Tab label={word('global.linked')} count={productsLinkedCount} id={ProductTabConfig.Linked} />
            <Tab label={word('global.unlinked')} count={productsUnlinkedCount} id={ProductTabConfig.Unlinked} default />
          </Tab.Group>
          <styled.RightHeaderSection>
            <InputSearch width={300} value={searchQuery} onChange={(e) => setSearchQuery(e)} />
            <Select
              width={198}
              values={stores}
              defaultValues={selectedStore}
              selectedValues={selectedStore}
              onSelectedChanged={setSelectedStore}
            />
            <MainButton children={selectedTab === 'linked' ? word('global.unlink.matched') : word('global.link.matched')} onClick={onLinkorUnlink} />
          </styled.RightHeaderSection>
        </PlacementCard.Header>
        {
          !isLoading && (
            <PlacementCard.Content>
              <Tab.Content id={ProductTabConfig.Linked}>
                <ProductsList products={allStoreProducts} shipswiftProducts={shipswiftProducts} stores={storesData} handleChnaged={handleChnaged} />
              </Tab.Content>
              <Tab.Content id={ProductTabConfig.Unlinked}>
                <ProductsList products={allStoreProducts} shipswiftProducts={shipswiftProducts} stores={storesData} handleChnaged={handleChnaged} />
              </Tab.Content>
            </PlacementCard.Content>
          )
        }
        <PlacementCard.Footer>
          <PageControl showEntries onNext={onNext} onPrev={onPrev} />
          <PerPage />
        </PlacementCard.Footer>
      </PlacementCard>
    </styled.BodyWrapper>
  );
};
