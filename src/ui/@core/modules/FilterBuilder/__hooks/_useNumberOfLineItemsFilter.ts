import { useCallback, useMemo } from 'react';
import { useObjectState } from '../../../hooks/useObjectState';
import { ChangeEvent } from '../../../hooks/useInputState';

export type NumberOfLineItemsFilter = {
  min: number;
  max: number;
};

const getNum = (value: string) => {
  let parse;
  parse = parseInt(value + '');
  const result = parse || parse === 0 ? parse : undefined;

  return result;
};

export const _useNumberOfLineItemsFilter = () => {
  const [data, setData, clearData] = useObjectState<NumberOfLineItemsFilter>();
  const [dataApplied, setDataApplied, clearDataApplied] = useObjectState<NumberOfLineItemsFilter>();

  const handleChange = (e: ChangeEvent) => {
    setData({
      [e.target.name as string]: getNum(e.target.value + ''),
    });
  };

  const clear = useCallback(() => {
    clearData();
    clearDataApplied();
  }, [clearData, clearDataApplied]);

  const apply = useCallback(() => {
    setDataApplied({ ...data });
  }, [data, setDataApplied]);

  const hasApplied = useCallback(() => !!(dataApplied && (dataApplied.min || dataApplied.max)), [dataApplied]);

  const getAllAplieds = useMemo(() => {
    const min = dataApplied?.min;
    const max = dataApplied?.max;
    if (min && max) return `between: ${min} - ${max}`;
    return [(min || min === 0) && `above: ${min}`, (max || max === 0) && `below: ${max}`].filter(Boolean).join(', ');
  }, [dataApplied?.max, dataApplied?.min]);

  return {
    handleChange,
    data,
    dataApplied,
    apply,
    hasApplied,
    getAllAplieds,
    clear,
  };
};
