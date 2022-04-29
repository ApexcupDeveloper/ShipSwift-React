/* eslint-disable no-mixed-operators */
import { useCallback, useMemo, useState } from 'react';
import { isEmpty, Nullable } from '../../../../../utils';

import { DateSelectMode } from '../components/DateCell';
import { DateCell } from '../utils/get-days-cells';
import { DateChangeEvent } from '../views/DatePickerView/DatePickerView.types';

import { cellToMilliseconds } from '../utils/cell-to-milliseconds';
import { millisecondsToCell } from '../utils/milliseconds-to-cell';

const today = new Date();
export type DateCellOrEmpty = DateCell | {};

type Props = {
  name?: string;
  mode?: DateSelectMode;
  startDate?: Nullable<number>;
  endDate?: Nullable<number>;
  onSelectStart?: (event: DateChangeEvent) => void;
  onSelectEnd?: (event: DateChangeEvent) => void;
};

export const _useDatePicker = ({ name, mode = 'one', onSelectEnd, onSelectStart, startDate, endDate }: Props) => {
  const startRange = useMemo(() => millisecondsToCell(startDate), [startDate]);
  const endRange = useMemo(() => millisecondsToCell(endDate), [endDate]);

  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [hoverCell, setHoverCell] = useState<DateCellOrEmpty>();

  const nextMonth = useCallback(() => {
    if (currentMonth < 11) {
      return setCurrentMonth((m) => ++m);
    }

    setCurrentMonth(0);
    setCurrentYear((y) => ++y);
  }, [currentMonth]);

  const prevMonth = useCallback(() => {
    if (currentMonth > 1) {
      return setCurrentMonth((m) => --m);
    }

    setCurrentMonth(11);
    setCurrentYear((y) => --y);
  }, [currentMonth]);

  const onSelectStartRange = useCallback(
    (cell: DateCellOrEmpty) => {
      onSelectStart?.({
        target: {
          value: cellToMilliseconds(cell as DateCell),
          name,
        },
      });
    },
    [name, onSelectStart]
  );

  const onSelectEndRange = useCallback(
    (cell: DateCellOrEmpty) => {
      onSelectEnd?.({
        target: {
          value: cellToMilliseconds(cell as DateCell),
          name,
        },
      });
    },
    [name, onSelectEnd]
  );

  const selectCell = useCallback(
    (cell: DateCellOrEmpty) => {
      if (isEmpty(cell)) return;

      if (mode === 'one' || isEmpty(startRange)) {
        return onSelectStartRange(cell);
      }

      if (!isEmpty(startRange)) {
        const { year: sYear, month: sMonth, day: sDay } = startRange as DateCell;
        const { year: eYear, month: eMonth, day: eDay } = cell as DateCell;

        const sameCell = sYear === eYear && sMonth === eMonth && sDay === eDay;
        if (sameCell || !isEmpty(endRange)) {
          onSelectEndRange({});

          if (sameCell) {
            onSelectStartRange({});
            return;
          }
        }

        const needToSwap = eYear < sYear || eMonth < sMonth || eDay < sDay;
        if (needToSwap && !sameCell) {
          onSelectEndRange(startRange as DateCell);
          return onSelectStartRange(cell);
        }

        return onSelectEndRange(cell);
      }
    },
    [endRange, mode, onSelectEndRange, onSelectStartRange, startRange]
  );

  return {
    mode,
    startRange,
    endRange,
    hoverCell,
    currentYear,
    currentMonth,
    selectCell,
    setStartRange: onSelectStartRange,
    setEndRange: onSelectEndRange,
    setHoverCell,
    nextMonth,
    prevMonth,
  };
};
