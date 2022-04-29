import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { HistoryLabel } from '../../../../@core/modules/ListBuilder';

import * as styled from './ProductHistoryList.styled';

type Props = {
  name      : string;
  date      : string;
  historyTag: HistoryLabel;
  message   : string;
};

export const ProductHistoryRaw: React.VFC<Props> = ({ name, date, historyTag, message }) => {
  return (
    <ItemRaw>
      <styled.NameContainer>
        <ItemRaw.Title bold children={name} />
        <ItemRaw.Title children={date} />
      </styled.NameContainer>
      <ItemRaw.HistoryTag label={historyTag} />
      <ItemRaw.Title flex={5} children={message} />
    </ItemRaw>
  );
};
