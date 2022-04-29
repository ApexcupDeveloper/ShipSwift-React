import { useMemo } from 'react';
import { ItemRaw, StatusLabel } from '../../../../@core/modules/ListBuilder';
import { AvatarLetter } from '../../../../@core/modules/Other';

type Props = {
  name          : string;
  orderDate     : string;
  country       : string;
  orderItems    : number | string;
  shippingMethod: string;
  total         : number | string;
  orderStatus   : StatusLabel;
};

const currencySymbol = '£';

export const OrdersRaw: React.VFC<Props> = ({ name, orderDate, orderItems, country, shippingMethod, total, orderStatus }) => {
  const formattedTotal = useMemo(() => `${currencySymbol}${total}`, [total]);
  
  return (
    <ItemRaw>
      <ItemRaw.Merge flex={1.5}>
        <ItemRaw.Checkbox />
        <AvatarLetter name={name} size={34} />
        <ItemRaw.Title bold children={name} />
      </ItemRaw.Merge>
      <ItemRaw.Title children={orderDate} />
      <ItemRaw.Title children={country} />
      <ItemRaw.Title children={orderItems} />
      <ItemRaw.Title children={shippingMethod} />
      <ItemRaw.Title children={formattedTotal} />
      <ItemRaw.OrderStatus label={orderStatus} />
    </ItemRaw>
  );
};
