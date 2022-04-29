import { OrderNotesRaw } from './OrderNotesRaw';

import * as styled from './OrderNotesList.styled';
import { CustomerInfo } from '../../../../../proto/order_manager_pb';

type Props = {
  customer: CustomerInfo.AsObject,
  createdDate: string,
  note: string
};

export const OrderNotesList: React.VFC<Props> = ({ customer, createdDate, note }) => {

  return (
    <styled.BodyWrapper>
      {
        note && (
          <OrderNotesRaw key={customer.id} name={customer.fullName} date={createdDate} historyTag={'customer'} message={note} />
        )
      }
      {/* Below loop would be used for interval user's notes */}
      {/* {mockList.map((props) => {
        return (
          <OrderNotesRaw {...props} />
        )
      })} */}
    </styled.BodyWrapper>
  );
};
