/* eslint-disable no-mixed-operators */
import { useMemo, useRef } from 'react';

import { DateCell as Cell } from '../../utils/get-days-cells';

import * as styled from './DateCell.styled';
import * as config from './DateCell.config';
import { DateCellOrEmpty } from '../../__hooks/_useDatePicker';
import { useEffect } from 'react';
import { isEmpty } from '../../../../../../utils';

export type DateSelectMode = 'one' | 'multi';

type DateCellProps = Cell & {
  mode: DateSelectMode;
  startRange: DateCellOrEmpty;
  endRange: DateCellOrEmpty;
  selectCell: (cell: Cell) => void;
  setHoverCell: (cell: DateCellOrEmpty) => void;
  hoverCell?: DateCellOrEmpty;
};

export const DateCell: React.VFC<DateCellProps> = ({
  mode,
  selectCell,
  setHoverCell,
  startRange,
  endRange,
  hoverCell,
  ...cell
}) => {
  const start = useMemo(() => config.isActive(cell, startRange), [cell, startRange]);
  const end = useMemo(() => config.isActive(cell, endRange), [cell, endRange]);

  const subActive = useMemo(() => config.isSubActive(cell, startRange, endRange), [cell, endRange, startRange]);
  const active = useMemo(() => start || end, [start, end]);

  const select = () => selectCell(cell);

  const containerRef = useRef<HTMLDivElement>(null);
  const subHoverActive = useMemo(
    () =>
      isEmpty(endRange) &&
      hoverCell &&
      (config.isSubActive(cell, startRange, hoverCell) || config.isSubActive(cell, hoverCell, startRange)),
    [cell, endRange, hoverCell, startRange]
  );
  const hoverActive = useMemo(
    () => isEmpty(endRange) && hoverCell && !isEmpty(startRange) && config.isActive(cell, hoverCell),
    [cell, endRange, hoverCell, startRange]
  );

  useEffect(() => {
    const current = containerRef.current;

    const onMouseOver = () => {
      setHoverCell((prev: DateCellOrEmpty) => cell);
    };

    if (!current || isEmpty(startRange) || !isEmpty(endRange)) return;
    current.removeEventListener('mouseover', onMouseOver);
    current.addEventListener('mouseover', onMouseOver);

    return () => {
      if (!current) return;
      current.removeEventListener('mouseover', onMouseOver);
    };
  }, [cell, endRange, hoverCell, setHoverCell, startRange]);

  return (
    <styled.CellContainer ref={containerRef}>
      <styled.CellActiveContainer
        onClick={select}
        data-active={active || (mode === 'multi' && hoverActive)}
        data-sub-active={!active && (subActive || (mode === 'multi' && !hoverActive && subHoverActive))}
        data-select-mode={mode}
        data-multi-select={(start && 'start') || (end && 'end')}
      >
        <styled.Content data-active={active}>{cell?.day}</styled.Content>
      </styled.CellActiveContainer>
    </styled.CellContainer>
  );
};
