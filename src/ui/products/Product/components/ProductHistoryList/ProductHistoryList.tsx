import { ProductHistoryRaw } from './ProductHistoryRaw';

import * as styled from './ProductHistoryList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(
  2,
  (i) =>
    ({
      key: 'id' + i,
      name: 'Renata. R',
      date: '02/05/2020, 08:56 PM',
      historyTag: 'customer',
      message:
        'Faucibus suspendisse et vulputate vel. Magna purus sit lacus ut laoreet. Sed viverra vel integer mauris sit quam sit congue aliquet. Nullam sed venenatis, eleifend sagittis. Pulvinar et quam ',
    } as const)
);

export const ProductHistoryList: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      {mockList.map((props) => (
        <ProductHistoryRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
