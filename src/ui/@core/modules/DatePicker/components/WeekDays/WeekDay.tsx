import { CellContainer } from '../DateCell';

import * as styled from './WeekDays.styled';

type Props = {};

export const WeekDay: React.FC<Props> = ({ children }) => {
  return (
    <CellContainer>
      <styled.WeekDay>{children}</styled.WeekDay>
    </CellContainer>
  );
};
