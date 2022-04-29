import { useLocale } from '../../../../../../assets/locale';
import { useStatusFilter } from '../../hooks/useStatusFilter';

import { Checkbox } from '../../../Checkbox';
import { List } from '../../components/List';

type Props = {};

export const StatusFilter: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { data, handleChange } = useStatusFilter();

  return (
    <List>
      <Checkbox
        name="pendingPayment"
        key="pendingPayment"
        label={word('order.status.pending-payment')}
        handleChangeEvent={handleChange}
        checked={data?.pendingPayment}
      />
      <Checkbox
        name="waitingForStock"
        key="waitingForStock"
        label={word('order.status.waiting-for-stock')}
        handleChangeEvent={handleChange}
        checked={data?.waitingForStock}
      />
      <Checkbox
        name="readyToShip"
        label={word('order.status.ready-to-ship')}
        handleChangeEvent={handleChange}
        checked={data?.readyToShip}
      />
      <Checkbox
        label={word('order.status.shipped')}
        name="shipped"
        handleChangeEvent={handleChange}
        checked={data?.shipped}
      />
      <Checkbox
        label={word('order.status.cancelled')}
        name="cancelled"
        handleChangeEvent={handleChange}
        checked={data?.cancelled}
      />
      <Checkbox
        label={word('order.status.refunded')}
        name="refunded"
        handleChangeEvent={handleChange}
        checked={data?.refunded}
      />
    </List>
  );
};
