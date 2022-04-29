import { useEffect, useMemo, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useSelectPage, useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';
import { PageControl, PlacementCard, Tab } from '../../../../@core/modules/ListBuilder';
import { OrdersList } from '../../components/OrdersList';
import { useOrderClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { addErrorToast } from '../../../../toast';
import * as styled from './OrdersView.styled';
import { ListOrdersRequest, OrdersCountReply, OrdersCountRequest } from '../../../../../proto/order_manager_pb';
import { OrderItem } from '../../../../../client/client';
import { cacheService } from '../../../../../utils/cache-service';
import { getCompanyId } from '../../../../../utils';

type Props = {};

export const OrdersView: React.VFC<Props> = () => {
  let dataSubscription: any;
  const { setPageCount, currentPage, pageCount, canPrev, canNext, next, prev, setCurrentPage } = useSelectPage();
  const { selectedTab } = useSelectTab();
  const { word } = useLocale();
  const getClient = useOrderClient();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const [loaded, setLoaded] = useState(false);

  const [allOrders, setAllOrders] = useState<OrderItem[]>([]);

  const [allOrdersCount, setAllOrdersCount] = useState<number>(0);
  const [readyOrdersCount, setReadyOrdersCount] = useState<number>(0);
  const [holdOrdersCount, setHoldOrdersCount] = useState<number>(0);
  const [backOrdersCount, setBackOrdersCount] = useState<number>(0);

  const [stepButtonValue, setStepButtonValue] = useState('');
  const [nextStepButtonValue, setNextStepButtonValue] = useState('');

  useEffect(() => {
    return () => {
      if (cacheService) {
        cacheService.stopPoll('dash_orders');
      }
    }
  }, [])

  const getOrders = (companyId: string, stepButtonValue: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          let numberOfLine = {
            type: '',
            value: 0,
            minValue: 0,
            maxValue: 0,
          }

          const requestOrder: ListOrdersRequest.AsObject = {
            companyId: companyId,
            statusFilterList: selectedTab === '2' ? ['Ready to ship'] : selectedTab === '3' ? ['On-Hold'] : selectedTab === '4' ? ['Backorder'] : [],
            orderFilter: {
              orderNumber: '',
              productNameCustomerFreeTextSearch: '',
              sku: '',
              shipswiftProductSku: ''
            },
            customerFilter: {
              customerName: '',
              customerEmail: '',
              customerPostcode: '',
            },
            dateFilter: {
              orderFrom: undefined,
              orderTo: undefined,
            },
            storesFilterList: [],
            lineItems: numberOfLine,
            productsEnrichedOnly: true,
            paginationCursor: stepButtonValue,
            pageSize: 5
          };

          const allOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: [],
            orderFilter: {
              orderNumber: '',
              productNameCustomerFreeTextSearch: '',
              sku: '',
              shipswiftProductSku: ''
            },
            customerFilter: {
              customerName: '',
              customerEmail: '',
              customerPostcode: '',
            },
            dateFilter: {
              orderFrom: undefined,
              orderTo: undefined,
            },
            storesFilterList: [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };

          const readyToShipOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: ['Ready to ship'],
            orderFilter: {
              orderNumber: '',
              productNameCustomerFreeTextSearch: '',
              sku: '',
              shipswiftProductSku: ''
            },
            customerFilter: {
              customerName: '',
              customerEmail: '',
              customerPostcode: '',
            },
            dateFilter: {
              orderFrom: undefined,
              orderTo: undefined,
            },
            storesFilterList: [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };

          const holdOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: ['On-Hold'],
            orderFilter: {
              orderNumber: '',
              productNameCustomerFreeTextSearch: '',
              sku: '',
              shipswiftProductSku: ''
            },
            customerFilter: {
              customerName: '',
              customerEmail: '',
              customerPostcode: '',
            },
            dateFilter: {
              orderFrom: undefined,
              orderTo: undefined,
            },
            storesFilterList: [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };

          const backOrdersCountRequest: OrdersCountRequest.AsObject = {
            companyId: companyId,
            statusFilterList: ['Backorder'],
            orderFilter: {
              orderNumber: '',
              productNameCustomerFreeTextSearch: '',
              sku: '',
              shipswiftProductSku: ''
            },
            customerFilter: {
              customerName: '',
              customerEmail: '',
              customerPostcode: '',
            },
            dateFilter: {
              orderFrom: undefined,
              orderTo: undefined,
            },
            storesFilterList: [],
            productsEnrichedOnly: true,
            lineItems: numberOfLine,
          };

          Promise.all([
            client.listOrders(requestOrder),
            client.ordersCount(allOrdersCountRequest),
            client.ordersCount(readyToShipOrdersCountRequest),
            client.ordersCount(holdOrdersCountRequest),
            client.ordersCount(backOrdersCountRequest)
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

  useEffect(() => {
    localStorage.setItem('dash_pagination', JSON.stringify([""]));
    cacheService.clearCache('dash_orders');
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
      cacheService.stopPoll('dash_orders');
      dataSubscription = cacheService.callWithCache('dash_orders', 'dash_orders', getOrders.bind(this), [companyId, stepButtonValue])
        .subscribe((data: any[]) => {
          const orderItems: OrderItem[] = data[0].ordersList;
          const nextValue = data[0].nextPageCursor;
          setNextStepButtonValue(nextValue);
          let sortedOrders = orderItems.sort((a, b) => Number(b.timestamp ? b.timestamp.seconds : 0) - Number(a.timestamp ? a.timestamp.seconds : 0))
          setAllOrders(sortedOrders);

          const ordersCount: OrdersCountReply.AsObject = data[1];
          setAllOrdersCount(ordersCount ? ordersCount.count : 0)

          const ordersReadyCount: OrdersCountReply.AsObject = data[2];
          setReadyOrdersCount(ordersReadyCount ? ordersReadyCount.count : 0)

          const ordersHoldCount: OrdersCountReply.AsObject = data[3];
          setHoldOrdersCount(ordersHoldCount ? ordersHoldCount.count : 0)

          const ordersBackCount: OrdersCountReply.AsObject = data[4];
          setBackOrdersCount(ordersBackCount ? ordersBackCount.count : 0)

          if (selectedTab === '1' && ordersCount) {
            setPageCount(Math.ceil(ordersCount.count / 5))
          } else if (selectedTab === '2' && ordersReadyCount) {
            setPageCount(Math.ceil(ordersReadyCount.count / 5))
          } else if (selectedTab === '3' && ordersHoldCount) {
            setPageCount(Math.ceil(ordersHoldCount.count / 5))
          } else if (selectedTab === '4' && ordersBackCount) {
            setPageCount(Math.ceil(ordersBackCount.count / 5))
          }
          setLoaded(true);
        }, error => {
          addErrorToast(error.message);
          setLoaded(true);
        })
    }

  }, [companyId, currentPage, selectedTab]);

  const onNext = () => {
    if(loaded) {
      setLoaded(false);
      next();
      cacheService.clearCache('dash_orders');
      const paginationHistoryString = localStorage.getItem('dash_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      localStorage.setItem('dash_pagination', JSON.stringify([...paginationHistory, nextStepButtonValue]));
      setStepButtonValue(nextStepButtonValue);
    }
  }

  const onPrev = () => {
    if(loaded) {
      setLoaded(false);
      prev();
      cacheService.clearCache('dash_orders');
      const paginationHistoryString = localStorage.getItem('dash_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      const prevValue = paginationHistory[currentPage - 2];
      const newHistory = paginationHistory.filter((item) => item !== paginationHistory[currentPage - 1]);
      localStorage.setItem('dash_pagination', JSON.stringify(newHistory));
      setStepButtonValue(prevValue);
    }
  }

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <Link to={{ pathname: useMemo(() => AppRoutes.Orders.Index, []) }}>
            <PlacementCard.Title children={word('orders')} />
          </Link>
          <Tab.Group>
            <Tab label={word('global.all')} count={allOrdersCount} id="1" default />
            <Tab label={word('order.status.ready-to-ship')} count={readyOrdersCount} id="2" />
            <Tab label={word('order.filter.on-hold')} count={holdOrdersCount} id="3" />
            <Tab label={word('global.backorder')} count={backOrdersCount} id="4" />
          </Tab.Group>
        </PlacementCard.Header>
        <PlacementCard.Content>
          <Tab.Content id="1">
            <OrdersList orders={allOrders} />
          </Tab.Content>
          <Tab.Content id="2">
            <OrdersList orders={allOrders} />
          </Tab.Content>
          <Tab.Content id="3">
            <OrdersList orders={allOrders} />
          </Tab.Content>
          <Tab.Content id="4">
            <OrdersList orders={allOrders} />
          </Tab.Content>
        </PlacementCard.Content>
        <PlacementCard.Footer>
          <PageControl showEntries={true} onNext={onNext} onPrev={onPrev} />
        </PlacementCard.Footer>
      </PlacementCard>
    </styled.BodyWrapper>
  );
};
