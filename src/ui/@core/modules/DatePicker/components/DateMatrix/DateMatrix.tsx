import { useMemo } from 'react';
import { useDatePicker } from '../../hooks/useDatePicker';

import { getDaysCells } from '../../utils/get-days-cells';
import { DateCell, CellContainer } from '../DateCell';

import * as styled from './DateMatrix.styled';

type Props = {};

export const DateMatrix: React.VFC<Props> = () => {
  const { currentMonth, currentYear, startRange, endRange, mode, selectCell, setHoverCell, hoverCell } = useDatePicker();
  const cells = useMemo(() => getDaysCells(currentYear, currentMonth), [currentYear, currentMonth]);

  return (
    <styled.BodyWrapper>
      {cells.map((cell, i) => {
        if (!cell) return <CellContainer key={i} />;
        return (
          <DateCell
            mode={mode}
            key={`${cell.year}.${cell.month}.${cell.day}`}
            {...{ startRange, endRange, selectCell, setHoverCell, hoverCell, ...cell }}
          />
        );
      })}
    </styled.BodyWrapper>
  );
};
