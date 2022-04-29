import { NotificationsRow } from './NotificationsRow';

import * as styled from './NotificationsList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(
  5,
  (i) =>
    ({
      key: i,
      date: '02/05/2020, 08:56 PM',
      message:
        'Faucibus suspendisse et vulputate vel. Magna purus sit lacus ut laoreet. Sed viverra vel integer mauris sit quam sit congue aliquet. Nullam sed venenatis, eleifend sagittis. Pulvinar et quam ',
    } as const)
);

export const NotificationsList: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      {mockList.map((props) => (
        <NotificationsRow {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
