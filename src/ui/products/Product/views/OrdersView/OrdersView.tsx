import { useEffect, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useSelectPage } from '../../../../@core/modules/ListBuilder/hooks';

import { PageControl, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { OrdersList } from '../../components/OrdersList';

import * as styled from './OrdersView.styled';
import { ProductInfo } from '../../../../../proto/product_manager_pb';
import { useOrderClient } from '../../../../../client/client-hook';
import { addErrorToast } from '../../../../toast';
import { OrdersCountReply } from '../../../../../proto/order_manager_pb';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { OrderItem } from '../../../../../client/client';
import { useLocation } from 'react-router';

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
};

type Props = {
  data: ProductInfo.AsObject,
  stores: StoreProps[]
};

export const OrdersView: React.VFC<Props> = ({ data, stores }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const { pathname } = useLocation();
  const getClient = useOrderClient();
  const companyId = getCompanyId(user);
  const { setPageCount, currentPage, pageCount, canPrev, canNext, next, prev, setCurrentPage } = useSelectPage();

  const [loaded, setLoaded] = useState(false);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [stepButtonValue, setStepButtonValue] = useState('');
  const [nextStepButtonValue, setNextStepButtonValue] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    localStorage.setItem('product_orders_pagination', JSON.stringify([""]));
    setStepButtonValue('');
    // setNextStepButtonValue('')
    if (pageCount) {
      setCurrentPage(1);
    } else {
      setCurrentPage(0);
    }

  }, [pageCount])

  useEffect(() => {
    if (companyId) {
      getOrders(companyId)
        .then(response => {
          const orderItems: OrderItem[] = response[0].ordersList;
          let sortedOrders = orderItems.sort((a, b) => Number(b && b.timestamp ? b.timestamp.seconds : 0) - Number(a && a.timestamp ? a.timestamp.seconds : 0));
          setOrders(sortedOrders);

          const nextValue = response[0].nextPageCursor;
          setNextStepButtonValue(nextValue);

          const ordersCount: OrdersCountReply.AsObject = response[1];
          setPageCount(Math.ceil(ordersCount.count / 5));
          setLoaded(true);
        })
        .catch(err => {
          setLoaded(true);
          addErrorToast(err.message);
        })
    }
  }, [companyId, currentPage, pathname])

  const getOrders = (companyId: string,) => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          const requestOrder: any = {
            companyId: companyId,
            statusFilterList: [],
            orderFilter: {
              orderNumber: '',
              productNameCustomerFreeTextSearch: '',
              sku: '',
              shipswiftProductSku: data.sku
            },
            customerFilter: {
              customerName: '',
              customerEmail: '',
              customerPostcode: '',
            },
            dateFilter: {
              orderFrom: null,
              orderTo: null,
            },
            storesFilterList: [],
            lineItems: {
              type: '',
              value: 0,
              minValue: 0,
              maxValue: 0
            },
            paginationCursor: stepButtonValue,
            productsEnrichedOnly: true,
            pageSize: 5
          };

          const requestCount: any = {
            companyId: companyId,
            statusFilterList: [],
            orderFilter: {
              orderNumber: '',
              productNameCustomerFreeTextSearch: '',
              sku: '',
              shipswiftProductSku: data.sku
            },
            customerFilter: {
              customerName: '',
              customerEmail: '',
              customerPostcode: '',
            },
            dateFilter: {
              orderFrom: null,
              orderTo: null,
            },
            storesFilterList: [],
            productsEnrichedOnly: true,
            lineItems: {
              type: '',
              value: 0,
              minValue: 0,
              maxValue: 0
            }
          };

          Promise.all([
            client.listOrders(requestOrder),
            client.ordersCount(requestCount)
          ]).then(data => {
            resolve(data);
          }, error => {
            reject(error);
          });
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
      const paginationHistoryString = localStorage.getItem('product_orders_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      localStorage.setItem('product_orders_pagination', JSON.stringify([...paginationHistory, nextStepButtonValue]));
      setStepButtonValue(nextStepButtonValue);
    }
  }

  const onPrev = () => {
    if (loaded) {
      setLoaded(false);
      prev();
      const paginationHistoryString = localStorage.getItem('product_orders_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      const prevValue = paginationHistory[currentPage - 2];
      const newHistory = paginationHistory.filter((item) => item !== paginationHistory[currentPage - 1]);
      localStorage.setItem('product_orders_pagination', JSON.stringify(newHistory));
      setStepButtonValue(prevValue);
    }
  }

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <PlacementCard.Title children={word('orders')} />
        </PlacementCard.Header>
        <PlacementCard.Content>
          <OrdersList orders={orders} stores={stores} />
        </PlacementCard.Content>
        {
          pageCount > 1 && (
            <PlacementCard.Footer>
              <PageControl showEntries onNext={onNext} onPrev={onPrev} />
            </PlacementCard.Footer>
          )
        }
      </PlacementCard>
    </styled.BodyWrapper>
  );
};
