import { useCallback, useMemo, useState } from 'react';

const getNum = (value: string) => {
  const parse = parseInt(value);
  const result = parse || parse === 0 ? parse : undefined;
  return result;
};

export const _useStockQuantityFilter = () => {
  const [dataMin, setDataMin] = useState<number | undefined>();
  const [dataMax, setDataMax] = useState<number | undefined>();
  const [dataApplied, setDataApplied] = useState<[number | undefined, number | undefined]>();

  const handleStart = useCallback((e) => {
    setDataMin(getNum(e.target.value));
  }, []);

  const handleEnd = useCallback((e) => {
    setDataMax(getNum(e.target.value));
  }, []);

  const handleRange = useCallback((e) => {
    setDataMin(getNum(e.target.value?.[0]));
    setDataMax(getNum(e.target.value?.[1]));
  }, []);

  const apply = useCallback(() => {
    setDataApplied([dataMin, dataMax]);
  }, [dataMax, dataMin]);

  const hasApplied = useCallback(() => !!((dataApplied?.[0] === 0 || dataApplied?.[0]) && (dataApplied?.[1] === 0 || dataApplied?.[1] )), [dataApplied]);

  const getAllAplieds = useMemo(() => {
    const result = dataApplied && `${dataApplied?.[0] || 0}-${dataApplied?.[1]}`;
    return result || '';
  }, [dataApplied]);

  const clear = useCallback(() => {
    setDataApplied(undefined);
    setDataMin(undefined);
    setDataMax(undefined);
  }, [setDataApplied]);

  // const data = [dataMin, dataMax];

  return {
    // data,
    dataMin,
    dataMax,
    dataApplied,
    apply,
    hasApplied,
    getAllAplieds,
    clear,
    handleStart,
    handleEnd,
    handleRange,
  };
};
