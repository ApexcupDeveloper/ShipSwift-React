import { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router';
import { ItemRaw, StatusLabel } from '../../../../@core/modules/ListBuilder';
import { AppRoutes } from '../../../../app/api';
import { AvatarLetter } from '../../../../@core/modules/Other';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { CustomerInfo, OrderValue, Product } from '../../../../../proto/order_manager_pb';

type Props = {
  name: string;
  shortName: string;
  orderDate: string;
  customerName: string;
  country: string;
  shippingMethod: string;
  orderStatus: StatusLabel;
  iconColour: string;
  storeId: string;
  products: Product.AsObject[];
  customer: CustomerInfo.AsObject;
  orderValue: OrderValue.AsObject;
  createdDate: string;
  note: React.ReactNode;
  paymentMethod: string;
};

type ParamsProps = {
  id: string;
  storeId: string;
};

export const ProductRaw: React.VFC<Props> = ({
  name,
  shortName,
  iconColour,
  orderDate,
  customerName,
  country,
  shippingMethod,
  orderStatus,
  storeId,
  products,
  customer,
  orderValue,
  createdDate,
  note,
  paymentMethod,
}) => {

  const { push } = useHistory();
  const orderLink = useMemo(() => AppRoutes.Orders.Order.Index.replace(':storeId', storeId).replace(':id', name), [storeId, name]);
  const onOpenOrder = useCallback(() => push(orderLink, {}), [orderLink, push]); //props for Product. Looks like in OrderRaw

  return (
    <ItemRaw hover onClick={onOpenOrder}>
      <ItemRaw.Merge>
        <AvatarLetter name={shortName} size={34} backgroundColor={iconColour} />
        <ItemRaw.Title bold children={name} />
      </ItemRaw.Merge>
      <ItemRaw.Title children={parse(orderDate)} />
      <ItemRaw.Title children={customerName} />
      <ItemRaw.Title children={country} />
      <ItemRaw.Title children={shippingMethod} />
      <ItemRaw.OrderStatus label={orderStatus} />
    </ItemRaw>
  );
};
