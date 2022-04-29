import { useCallback } from 'react';
import { Nullable } from '../../../../../utils';
import { useObjectState } from '../../../hooks/useObjectState';
import { DateChangeEvent } from '../../DatePicker/views/DatePickerView/DatePickerView.types';
import { millisecondsToCell } from '../../DatePicker/utils/milliseconds-to-cell';
import { DateCell } from '../../DatePicker/utils/get-days-cells';
import { monthMap } from '../../DatePicker/components/Input/Input.config';
import { WordFunc } from '../../../../../assets/locale';

type Range = [Nullable<number>, Nullable<number>];

export type DateRangeFilter = Partial<{
  order: Range;
  shipped: Range;
  due: Range;
}>;

const getRange = (e: DateChangeEvent, data?: DateRangeFilter) => {
  const { target } = e;
  return (target.name && data && data[target.name as keyof DateRangeFilter]) || [0, 0];
};

export const _useDateRangeFilter = () => {
  const [data, setData, clearData] = useObjectState<DateRangeFilter>();
  const [dataApplied, setDataApplied, clearDataApplied] = useObjectState<DateRangeFilter>();

  const handleStart = useCallback(
    (e: DateChangeEvent) => {
      const range = getRange(e, data);
      if (!e.target.value || e.target.value === range[0]) return;
      setData({ [e.target.name as string]: [e.target.value, range[1]] });
    },
    [data, setData]
  );

  const handleEnd = useCallback(
    (e: DateChangeEvent) => {
      const range = getRange(e, data);
      if (!e.target.value || e.target.value === range[1] || e.target.value === range[0]) return;
      setData({ [e.target.name as string]: [range[0], e.target.value] });
    },
    [data, setData]
  );

  const apply = useCallback(() => {
    setDataApplied({
      ...data,
    });
  }, [data, setDataApplied]);

  const hasApplied = useCallback(
    () => !!(dataApplied && Object.values(dataApplied).filter((item) => item.filter(Boolean)?.length > 0).length > 0),
    [dataApplied]
  );

  const getAllAplieds = useCallback(
    (word: WordFunc) =>
      (dataApplied &&
        Object.entries(dataApplied).reduce((prev, current) => {
          const startCell = millisecondsToCell(current[1][0]) as DateCell;
          const startFormat = `${monthMap(startCell.month, word)} ${startCell.day}, ${startCell.year}`;
          const endCell = millisecondsToCell(current[1][1]) as DateCell;
          const endFormat = `${monthMap(endCell.month, word)} ${endCell.day}, ${endCell.year}`;
          const currentFormat = `${current[0]}: ${startFormat} - ${endFormat}`;
          return `${prev ? prev + ', ' : ''}${currentFormat}`;
        }, '')) ||
      '',
    [dataApplied]
  );

  const clear = useCallback(() => {
    clearDataApplied();
    clearData();
  }, [clearData, clearDataApplied]);

  return {
    data,
    dataApplied,
    apply,
    hasApplied,
    getAllAplieds,
    clear,
    handleStart,
    handleEnd,
  };
};
