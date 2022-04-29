import React, { useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductRaw } from './OrdersRaw';

import * as styled from './OrdersList.styled';
import { OrderItem } from '../../../../../client/client';
import { convertTime, convertTime1 } from '../../../../../utils/convert-time';
import { CustomerInfo, OrderValue, Product } from '../../../../../proto/order_manager_pb';
import { addErrorToast } from '../../../../toast';
import { cacheService } from '../../../../../utils/cache-service';
import { useGrpcClient } from '../../../../../client/client-hook';
import { getCompanyId } from '../../../../../utils';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';

type Props = {
  orders: OrderItem[]
};

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
}

export const OrdersList: React.VFC<Props> = ({ orders }) => {
  let dataSubscription: any;
  const { word } = useLocale();
  const { user } = useAuth0();
  const [loaded, setLoaded] = useState(false);
  const [stores, setStores] = React.useState<StoreProps[]>([]);
  const getclient = useGrpcClient();
  const companyId = getCompanyId(user);

  React.useEffect(() => {
    return () => {
      cacheService.stopPoll('stores');
    }
  }, [])

  React.useEffect(() => {
    if (companyId) {
      cacheService.stopPoll('stores');
      dataSubscription = cacheService.callWithCache('stores', 'main_stores', getStores.bind(this), [], config.cache.store_timeout)
      .subscribe((data: any[]) => {
        setStores(data);
      }, err => {
        addErrorToast(err.message)
      })
    }
  }, [user, companyId]);

  React.useEffect(() => {
    if(stores.length && orders.length) {
      orders.map((order) => {
        if (!loaded) {
          var tempStore = stores.filter(store => store.id === order.storeId);
          if (tempStore.length === 0) {
            setLoaded(true)
            getclient()
              .then((client) => {
                client
                  .getAllStores(companyId)
                  .then((res) => {
                    setStores(res);
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
  }, [orders, stores])

  const getStores = () => {
    return new Promise<any>((resolve, reject) => {
      getclient()
        .then((client) => {
          Promise.all([
            client.getAllStores(companyId)
          ])
            .then(data => {
              resolve(data[0]);
            }, error => {
              reject(error);
            })
        })
        .catch((err) => {
          reject(err);
        });
    })
  };

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('order.number')} />
        <TitleRaw.Item children={word('order.date')} />
        <TitleRaw.Item children={word('order.customer-name')} />
        <TitleRaw.Item children={word('order.country')} />
        <TitleRaw.Item children={word('order.shipping-method')} />
        <TitleRaw.Item children={word('order.status')} />
      </TitleRaw>

      {orders.map((props, index) => {
        let orderDate = convertTime1(new Date(Number(props.timestamp ? props.timestamp.seconds as any * 1000 : 0)));
        let createdDate = convertTime(new Date(Number(props.timestamp ? props.timestamp.seconds as any * 1000 : 0)));
        let status: any =
          props.status === 'Ready to ship' ? 'ready-to-ship' :
            props.status === 'Pending Payment' ? 'pending-payment' :
              props.status === 'Shipped' ? 'shipped' :
                props.status === 'On-Hold' ? 'on-hold' :
                  props.status === 'Backordered' ? 'waiting-for-stock' :
                    props.status === 'Cancelled' ? 'cancelled' :
                      props.status === 'Refunded' ? 'refunded' : 'default';

        let storeData: StoreProps[] = stores.filter((item: any) => item.id === props.storeId)
        let productList: Product.AsObject[] = props.productsList

        if (index >= 5) return null

        return (
          <ProductRaw
            key={index}
            name={props.orderNumber}
            iconColour={storeData.length ? storeData[0].iconColour : ''}
            shortName={storeData.length ? storeData[0].shortName : ''}
            orderDate={orderDate}
            customerName={props.customer ? props.customer.fullName : ''}
            country={props.customer ? props.customer.countryCode2 : ''}
            shippingMethod={props.shippingMethod}
            orderStatus={status}
            createdDate={createdDate}
            storeId={props.storeId}
            paymentMethod={props.paymentMethod}
            customer={props.customer as CustomerInfo.AsObject}
            note={props.customerNotes}
            products={productList as Product.AsObject[]}
            orderValue={props.orderValue as OrderValue.AsObject}
          />
        )
      })}
    </styled.BodyWrapper>
  );
};
