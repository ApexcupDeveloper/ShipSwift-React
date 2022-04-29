import { ItemRaw } from '../../../../@core/modules/ListBuilder';

import * as styled from './NotificationsList.styled';

type Props = {
  date: string;
  message: string;
};

export const NotificationsRow: React.VFC<Props> = ({ date, message }) => {
  return (
    <styled.RowWrapper>
      <ItemRaw.Title children={date} />
      <ItemRaw.Title flex={5} children={message} />{' '}
    </styled.RowWrapper>
  );
};
