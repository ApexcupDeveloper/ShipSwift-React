import { useState, useCallback, useEffect } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useShowedItemFilter } from '../../../../@core/modules/FilterBuilder/components/FiltersRow/useShowedItemFilter';

import { InputSearch } from '../../../../@core/modules/Input';
import { PageControl, PerPage, PlacementCard, Tab } from '../../../../@core/modules/ListBuilder';
import { OrdersList } from '../../components/OrdersList';
import { FilterButton } from '../../../../@core/modules/FilterBuilder';
import { AppliedFilters } from '../../components/AppliedFilters';
import { FiltersOrderModal } from '../../components/FiltersOrderModal';
import { FiltersOrderForm } from '../FiltersOrderForm';

import * as styled from './OrdersView.styled';
import { useOrderClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { OrderItem, StoresItem } from '../../../../../client/client';
import { ListOrdersRequest, OrdersCountReply, OrdersCountRequest } from '../../../../../proto/order_manager_pb';
import { addErrorToast } from '../../../../toast';
import {
  useCustomerFilter,
  useDateRangeFilter,
  useNumberOfLineItemsFilter,
  useOrderFilter,
  useStatusFilter,
  useStoreFilter
} from '../../../../@core/modules/FilterBuilder/hooks';
import { StoreFilter } from "../../../../@core/modules/FilterBuilder/__hooks/_useStoreFilter";
import { cacheService } from "../../../../../utils/cache-service";
import { useSelectPage, useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';
import { usePerPage } from '../../../../@core/modules/ListBuilder/hooks/usePerPage';
import { getCompanyId } from '../../../../../utils';
import { useLocation } from 'react-router';

type Props = {};

export const OrdersView: React.VFC<Props> = () => {
  let dataSubscription: any;
  const { word } = useLocale();
  const { user } = useAuth0();
  const { pathname } = useLocation();
  const { selectedTab } = useSelectTab();
  const { setPageCount, currentPage, pageCount, canPrev, canNext, next, prev, setCurrentPage } = useSelectPage();
  const { selectedRowsCount, setRowsCount } = usePerPage();
  const getClient = useOrderClient();
  const { getAllAplieds: statusFilter } = useStatusFilter();
  const { dataApplied: orderFilter } = useOrderFilter();
  const { dataApplied: customerFilter } = useCustomerFilter();
  const { dataApplied: dateRangeFilter } = useDateRangeFilter();
  const { dataApplied: storeFilter } = useStoreFilter();
  const { dataApplied: numberOfLineFilter } = useNumberOfLineItemsFilter();
  const [searchQuery, setSearchQuery] = useState('');

  const companyId = getCompanyId(user);
  const [loaded, setLoaded] = useState(false);
  const [allOrders, setAllOrders] = useState<OrderItem[]>([]);
  const [handleChanged, setHandleChanged] = useState(false);

  const [allOrdersCount, setAllOrdersCount] = useState<number>(0);
  const [readyOrdersCount, setReadyOrdersCount] = useState<number>(0);
  const [holdOrdersCount, setHoldOrdersCount] = useState<number>(0);
  const [backOrdersCount, setBackOrdersCount] = useState<number>(0);
  const [shipOrdersCount, setShipOrdersCount] = useState<number>(0);

  const [stepButtonValue, setStepButtonValue] = useState('');
  const [nextStepButtonValue, setNextStepButtonValue] = useState('');
  const [selectedRows, setSelectedRows] = useState(10);
  const [changed, setChanged] = useState(false);
  const { showed, setShowed } = useShowedItemFilter();

  const isVisible = useCallback(() => 'filterButton' === showed, [showed]);

  useEffect(() => {
    const rows = localStorage.getItem('orders_row');
    if (rows) {
      setRowsCount({ label: rows, value: Number(rows) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('orders_row', selectedRowsCount.value.toString());
    setSelectedRows(selectedRowsCount.value);
    /** Enable next line later for cache server */
    // cacheService.clearCache('main_orders');
  }, [selectedRowsCount])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setChanged(prev => !prev);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [searchQuery])

  useEffect(() => {
    localStorage.setItem('orders_pagination', JSON.stringify([""]));
    /** Enable next line later for cache server */
    // cacheService.clearCache('main_orders');
    setStepButtonValue('');
    // setNextStepButtonValue('')
    if (pageCount) {
      setCurrentPage(1);
    } else {
      setCurrentPage(0);
    }

  }, [selectedTab, pageCount])

  /** Enable next function later for cache server */

  // useEffect(() => {
  //   return () => {
  //     cacheService.stopPoll('main_orders');
  //   }
  // }, [])

  useEffect(() => {
    if (companyId) {
      /** Enable next function later for cache server */

      // cacheService.stopPoll('main_orders');
      // dataSubscription = cacheService.callWithCache('main_orders', 'main_orders', getOrders.bind(this), [companyId, statusFilter, orderFilter, customerFilter, dateRangeFilter, storeFilter, numberOfLineFilter, stepButtonValue])
      //   .subscribe((data: any[]) => {
      //     const orderItems: OrderItem[] = data[0].ordersList;
      //     const nextValue = data[0].nextPageCursor;
      //     setNextStepButtonValue(nextValue);
      //     let sortedOrders = orderItems.sort((a, b) => Number(b && b.timestamp ? b.timestamp.seconds : 0) - Number(a && a.timestamp ? a.timestamp.seconds : 0))
      //     setAllOrders(sortedOrders);

      //     const ordersCount: OrdersCountReply.AsObject = data[1];
      //     setAllOrdersCount(ordersCount ? ordersCount.count : 0)

      //     const ordersReadyCount: OrdersCountReply.AsObject = data[2];
      //     setReadyOrdersCount(ordersReadyCount ? ordersReadyCount.count : 0)

      //     const ordersHoldCount: OrdersCountReply.AsObject = data[3];
      //     setHoldOrdersCount(ordersHoldCount ? ordersHoldCount.count : 0)

      //     const ordersBackCount: OrdersCountReply.AsObject = data[4];
      //     setBackOrdersCount(ordersBackCount ? ordersBackCount.count : 0)

      //     const ordersShipCount: OrdersCountReply.AsObject = data[5];
      //     setShipOrdersCount(ordersShipCount ? ordersShipCount.count : 0)

      //     if (selectedTab === '1' && ordersCount) {
      //       setPageCount(Math.ceil(ordersCount.count / selectedRows));
      //     } else if (selectedTab === '2' && ordersReadyCount) {
      //       setPageCount(Math.ceil(ordersReadyCount.count / selectedRows));
      //     } else if (selectedTab === '3' && ordersHoldCount) {
      //       setPageCount(Math.ceil(ordersHoldCount.count / selectedRows));
      //     } else if (selectedTab === '4' && ordersBackCount) {
      //       setPageCount(Math.ceil(ordersBackCount.count / selectedRows));
      //     } else if (selectedTab === '5' && ordersShipCount) {
      //       setPageCount(Math.ceil(ordersShipCount.count / selectedRows));
      //     }
      //     setLoaded(true);
      //   }, error => {
      //     addErrorToast(error.message);
      //     setLoaded(true);
      //   })

      getOrders(companyId, statusFilter, orderFilter, customerFilter, dateRangeFilter, storeFilter, numberOfLineFilter, stepButtonValue)
        .then((data) => {
          const orderItems: OrderItem[] = data[0].ordersList;
          const nextValue = data[0].nextPageCursor;
          setNextStepButtonValue(nextValue);
          let sortedOrders = orderItems.sort((a, b) => Number(b && b.timestamp ? b.timestamp.seconds : 0) - Number(a && a.timestamp ? a.timestamp.seconds : 0))
          setAllOrders(sortedOrders);

          const ordersCount: OrdersCountReply.AsObject = data[1];
          setAllOrdersCount(ordersCount ? ordersCount.count : 0)

          const ordersReadyCount: OrdersCountReply.AsObject = data[2];
          setReadyOrdersCount(ordersReadyCount ? ordersReadyCount.count : 0)

          const ordersHoldCount: OrdersCountReply.AsObject = data[3];
          setHoldOrdersCount(ordersHoldCount ? ordersHoldCount.count : 0)

          const ordersBackCount: OrdersCountReply.AsObject = data[4];
          setBackOrdersCount(ordersBackCount ? ordersBackCount.count : 0)

          const ordersShipCount: OrdersCountReply.AsObject = data[5];
          setShipOrdersCount(ordersShipCount ? ordersShipCount.count : 0)

          if (selectedTab === '1' && ordersCount) {
            setPageCount(Math.ceil(ordersCount.count / selectedRows));
          } else if (selectedTab === '2' && ordersReadyCount) {
            setPageCount(Math.ceil(ordersReadyCount.count / selectedRows));
          } else if (selectedTab === '3' && ordersHoldCount) {
            setPageCount(Math.ceil(ordersHoldCount.count / selectedRows));
          } else if (selectedTab === '4' && ordersBackCount) {
            setPageCount(Math.ceil(ordersBackCount.count / selectedRows));
          } else if (selectedTab === '5' && ordersShipCount) {
            setPageCount(Math.ceil(ordersShipCount.count / selectedRows));
          }
          setLoaded(true);
        })
        .catch((err) => {
          addErrorToast(err.message);
          setLoaded(true);
        })
    }
  }, [companyId, statusFilter, orderFilter, customerFilter, dateRangeFilter, storeFilter, numberOfLineFilter, currentPage, selectedRows, selectedTab, handleChanged, pathname, changed]);


  const getOrders = (companyId: string, statusFilter: any, orderFilter: any, customerFilter: any, dateRangeFilter: any, storeFilter: StoreFilter | undefined, numberOfLineFilter: any, stepButtonValue: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          let numberOfLine = {
            type: numberOfLineFilter?.min && numberOfLineFilter?.max ? 'Between' : numberOfLineFilter?.min && !numberOfLineFilter.max ? 'Above' : !numberOfLineFilter?.min && numberOfLineFilter?.max ? 'Below' : '',
            value: numberOfLineFilter?.min && !numberOfLineFilter.max ? numberOfLineFilter?.min : !numberOfLineFilter?.min && numberOfLineFilter?.max ? numberOfLineFilter?.max : 0,
            minValue: numberOfLineFilter?.min && numberOfLineFilter?.max ? numberOfLineFilter?.min : 0,
            maxValue: numberOfLineFilter?.min && numberOfLineFilter?.max ? numberOfLineFilter?.max : 0,
          }

          let tempStatusFilter = [];
          if (selectedTab === '1') {
            tempStatusFilter = statusFilter.length ? statusFilter.split(', ') : [];
          } else if (selectedTab === '2') {
            tempStatusFilter = statusFilter.length ? [...statusFilter.split(', '), 'Ready to ship'] : ['Ready to ship'];
          } else if (selectedTab === '3') {
            tempStatusFilter = statusFilter.length ? [...statusFilter.split(', '), 'On-Hold'] : ['On-Hold'];
          } else if (selectedTab === '4') {
            tempStatusFilter = statusFilter.length ? [...statusFilter.split(', '), 'Backorder'] : ['Backorder'];
          } else if (selectedTab === '5') {
            tempStatusFilter = statusFilter.length ? [...statusFilter.split(', '), 'Shipped'] : ['Shipped'];
          }

          const requestOrder: ListOrdersRequest.AsObject = {
            companyId: companyId,
            statusFilterList: tempStatusFilter,
            orderFilter: {
              orderNumber: orderFilter?.number ? orderFilter?.number.toString() : '',
              productNameCustomerFreeTextSearch: searchQuery,
              sku: '',
              shipswiftProductSku: orderFilter?.sku ? orderFilter?.sku.toString() : ''
            },
            customerFilter: {
              customerName: customerFilter?.name ? customerFilter.name : '',
              customerEmail: customerFilter?.email ? customerFilter.email : '',
              customerPostcode: customerFilter?.postcode ? customerFilter.postcode.toString() : '',
            },
            dateFilter: {
              orderFrom: dateRangeFilter?.order ? dateRangeFilter.order[0] : null,
              orderTo: dateRangeFilter?.order ? dateRangeFilter.order[1] : null,
            },
            storesFilterList: storeFilter?.stores ? storeFilter.stores.map(item => item.id) : [],
            lineItems: numberOfLine,
            productsEnrichedOnly: true,
            paginationCursor: stepButtonValue,
            pageSize: selectedRows
          };

          const allOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: [],
            orderFilter: {
              orderNumber: orderFilter?.number ? orderFilter?.number.toString() : '',
              productNameCustomerFreeTextSearch: searchQuery,
              sku: '',
              shipswiftProductSku: orderFilter?.sku ? orderFilter?.sku.toString() : ''
            },
            customerFilter: {
              customerName: customerFilter?.name ? customerFilter.name : '',
              customerEmail: customerFilter?.email ? customerFilter.email : '',
              customerPostcode: customerFilter?.postcode ? customerFilter.postcode.toString() : '',
            },
            dateFilter: {
              orderFrom: dateRangeFilter?.order ? dateRangeFilter.order[0] : null,
              orderTo: dateRangeFilter?.order ? dateRangeFilter.order[1] : null,
            },
            storesFilterList: storeFilter?.stores ? storeFilter.stores.map(item => item.id) : [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };

          const readyToShipOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: ['Ready to ship'],
            orderFilter: {
              orderNumber: orderFilter?.number ? orderFilter?.number.toString() : '',
              productNameCustomerFreeTextSearch: searchQuery,
              sku: '',
              shipswiftProductSku: orderFilter?.sku ? orderFilter?.sku.toString() : ''
            },
            customerFilter: {
              customerName: customerFilter?.name ? customerFilter.name : '',
              customerEmail: customerFilter?.email ? customerFilter.email : '',
              customerPostcode: customerFilter?.postcode ? customerFilter.postcode.toString() : '',
            },
            dateFilter: {
              orderFrom: dateRangeFilter?.order ? dateRangeFilter.order[0] : null,
              orderTo: dateRangeFilter?.order ? dateRangeFilter.order[1] : null,
            },
            storesFilterList: storeFilter?.stores ? storeFilter.stores.map(item => item.id) : [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };

          const holdOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: ['On-Hold'],
            orderFilter: {
              orderNumber: orderFilter?.number ? orderFilter?.number.toString() : '',
              productNameCustomerFreeTextSearch: searchQuery,
              sku: '',
              shipswiftProductSku: orderFilter?.sku ? orderFilter?.sku.toString() : ''
            },
            customerFilter: {
              customerName: customerFilter?.name ? customerFilter.name : '',
              customerEmail: customerFilter?.email ? customerFilter.email : '',
              customerPostcode: customerFilter?.postcode ? customerFilter.postcode.toString() : '',
            },
            dateFilter: {
              orderFrom: dateRangeFilter?.order ? dateRangeFilter.order[0] : null,
              orderTo: dateRangeFilter?.order ? dateRangeFilter.order[1] : null,
            },
            storesFilterList: storeFilter?.stores ? storeFilter.stores.map(item => item.id) : [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };

          const backOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: ['Backorder'],
            orderFilter: {
              orderNumber: orderFilter?.number ? orderFilter?.number.toString() : '',
              productNameCustomerFreeTextSearch: searchQuery,
              sku: '',
              shipswiftProductSku: orderFilter?.sku ? orderFilter?.sku.toString() : ''
            },
            customerFilter: {
              customerName: customerFilter?.name ? customerFilter.name : '',
              customerEmail: customerFilter?.email ? customerFilter.email : '',
              customerPostcode: customerFilter?.postcode ? customerFilter.postcode.toString() : '',
            },
            dateFilter: {
              orderFrom: dateRangeFilter?.order ? dateRangeFilter.order[0] : null,
              orderTo: dateRangeFilter?.order ? dateRangeFilter.order[1] : null,
            },
            storesFilterList: storeFilter?.stores ? storeFilter.stores.map(item => item.id) : [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };

          const shippedOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: ['Shipped'],
            orderFilter: {
              orderNumber: orderFilter?.number ? orderFilter?.number.toString() : '',
              productNameCustomerFreeTextSearch: searchQuery,
              sku: '',
              shipswiftProductSku: orderFilter?.sku ? orderFilter?.sku.toString() : ''
            },
            customerFilter: {
              customerName: customerFilter?.name ? customerFilter.name : '',
              customerEmail: customerFilter?.email ? customerFilter.email : '',
              customerPostcode: customerFilter?.postcode ? customerFilter.postcode.toString() : '',
            },
            dateFilter: {
              orderFrom: dateRangeFilter?.order ? dateRangeFilter.order[0] : null,
              orderTo: dateRangeFilter?.order ? dateRangeFilter.order[1] : null,
            },
            storesFilterList: storeFilter?.stores ? storeFilter.stores.map(item => item.id) : [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };
          Promise.all([
            client.listOrders(requestOrder),
            client.ordersCount(allOrdersCountRequest),
            client.ordersCount(readyToShipOrdersCountRequest),
            client.ordersCount(holdOrdersCountRequest),
            client.ordersCount(backOrdersCountRequest),
            client.ordersCount(shippedOrdersCountRequest)
          ]).then(data => {
            resolve(data);
          }, error => {
            reject(error);
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
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
      cacheService.clearCache('main_orders');
      const paginationHistoryString = localStorage.getItem('orders_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      localStorage.setItem('orders_pagination', JSON.stringify([...paginationHistory, nextStepButtonValue]));
      setStepButtonValue(nextStepButtonValue);
    }
  }

  const onPrev = () => {
    if (loaded) {
      setLoaded(false);
      prev();
      cacheService.clearCache('main_orders');
      const paginationHistoryString = localStorage.getItem('orders_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      const prevValue = paginationHistory[currentPage - 2];
      const newHistory = paginationHistory.filter((item) => item !== paginationHistory[currentPage - 1]);
      localStorage.setItem('orders_pagination', JSON.stringify(newHistory));
      setStepButtonValue(prevValue);
    }
  }

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <Tab.Group>
            <Tab label={word('global.all')} count={allOrdersCount} id="1" default />
            <Tab label={word('order.status.ready-to-ship')} count={readyOrdersCount} id="2" />
            <Tab label={word('order.filter.on-hold')} count={holdOrdersCount} id="3" />
            <Tab label={word('global.backorder')} count={backOrdersCount} id="4" />
            <Tab label={word('order.status.shipped')} count={shipOrdersCount} id="5" />
          </Tab.Group>
          <styled.FilterWrapper>
            <InputSearch width={300} value={searchQuery} onChange={(e) => setSearchQuery(e)} />
            <FilterButton showed={isVisible()} onClick={onShow} />
            <FiltersOrderModal visible={isVisible()} onClose={onClose}>
              <FiltersOrderForm visible />
            </FiltersOrderModal>
          </styled.FilterWrapper>
        </PlacementCard.Header>
        <AppliedFilters />
        <PlacementCard.Content>
          <Tab.Content id="1">
            <OrdersList orders={allOrders} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
          <Tab.Content id="2">
            <OrdersList orders={allOrders} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
          <Tab.Content id="3">
            <OrdersList orders={allOrders} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
          <Tab.Content id="4">
            <OrdersList orders={allOrders} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
          <Tab.Content id="5">
            <OrdersList orders={allOrders} handleChangeEvent={() => setHandleChanged(!handleChanged)} />
          </Tab.Content>
        </PlacementCard.Content>
        <PlacementCard.Footer>
          <PageControl showEntries onNext={onNext} onPrev={onPrev} />
          <PerPage />
        </PlacementCard.Footer>
      </PlacementCard>
      {/* <MultiSelectOrders /> */}
    </styled.BodyWrapper>
  );
};
