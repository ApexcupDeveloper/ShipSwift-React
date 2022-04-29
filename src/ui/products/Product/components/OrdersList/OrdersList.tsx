import { useLocale } from '../../../../../assets/locale';

import { StatusLabel, TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductRaw } from './OrdersRaw';

import * as styled from './OrdersList.styled';
import { OrderItem } from '../../../../../client/client';
import { convertTime1 } from '../../../../../utils/convert-time';

type Props = {
  orders: OrderItem[],
  stores: StoreProps[]
};

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
};

export const OrdersList: React.VFC<Props> = ({ orders, stores }) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('order.number')} />
        <TitleRaw.Item children={word('order.date')} />
        <TitleRaw.Item children={word('global.quantity')} />
        <TitleRaw.Item children={word('order.status')} />
      </TitleRaw>
      {orders.map((props) => {
        let orderDate = convertTime1(new Date(Number((props.timestamp ? props.timestamp.seconds as any : 0) * 1000)));
        let qty = 0;
        let productList = props.productsList;
        productList.map((prod) => {
          qty += prod.quantity;
        });
        let status =
          props.status === 'Ready to ship'
            ? 'ready-to-ship'
            : props.status === 'Shipped'
              ? 'shipped'
              : props.status === 'Pending Payment'
                ? 'pending-payment'
                : props.status === 'On-Hold'
                  ? 'on-hold'
                  : props.status === 'Backordered'
                    ? 'waiting-for-stock'
                    : props.status === 'Cancelled'
                      ? 'cancelled'
                      : props.status === 'Refunded'
                        ? 'refunded'
                        : 'default';

        let storeData: StoreProps[] = stores.filter((item: any) => item.id === props.storeId)

        return (
          <ProductRaw
            iconColour={storeData.length ? storeData[0].iconColour : ''}
            shortName={storeData.length ? storeData[0].shortName : ''}
            name={props.orderNumber}
            orderDate={orderDate}
            quantity={qty.toString()}
            orderStatus={status as StatusLabel}
            storeId={props.storeId}
          />
        )
      })}
    </styled.BodyWrapper>
  );
};
