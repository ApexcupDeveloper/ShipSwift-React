import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { PageControl, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { OrdersList } from '../../components/OrdersList';

import * as styled from './OrdersView.styled';

type Props = {};

const totalPrice = 458.93;
const currencySymbol = '£';

export const OrdersView: React.VFC<Props> = () => {
  const { word } = useLocale();

  const total = useMemo(() => `${word('global.orders.total')}: ${currencySymbol}${totalPrice}`, [word]);

  return (
    <PlacementCard>
      <PlacementCard.Header>
        <PlacementCard.Title children={word('orders')} />
        <styled.Total children={total} />
      </PlacementCard.Header>
      <PlacementCard.Content>
        <OrdersList />
      </PlacementCard.Content>
      <PlacementCard.Footer>
        <PageControl showEntries />
      </PlacementCard.Footer>
    </PlacementCard>
  );
};
