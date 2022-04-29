import { useEffect } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useSelectPage } from '../../../../@core/modules/ListBuilder/hooks';

import { PageControl, PerPage, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { OrderNotesList } from '../../components/OrderNotesList';

import * as styled from './OrderNotesView.styled';
import { CustomerInfo } from '../../../../../proto/order_manager_pb';

type Props = {
  customer: CustomerInfo.AsObject,
  createdDate: string,
  note: string
};

export const OrderNotesView: React.VFC<Props> = ({ customer, createdDate, note }) => {
  const { setPageCount } = useSelectPage();
  const { word } = useLocale();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPageCount(3), []);

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <PlacementCard.Title children={word('order.notes')} />
        </PlacementCard.Header>
        <PlacementCard.Content showSplitter> 
          <OrderNotesList customer={customer} createdDate={createdDate} note={note} />
        </PlacementCard.Content>
        <PlacementCard.Footer>
          <PageControl />
          <PerPage />
        </PlacementCard.Footer>
      </PlacementCard>
    </styled.BodyWrapper>
  );
};
