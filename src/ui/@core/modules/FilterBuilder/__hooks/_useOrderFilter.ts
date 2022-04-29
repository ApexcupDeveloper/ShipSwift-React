import { useCallback, useMemo } from 'react';
import { useObjectState } from '../../../hooks/useObjectState';
import { ChangeEvent } from '../../../hooks/useInputState';

export type OrderFilter = {
  number: number;
  name: string;
  sku: number;
};

export const _useOrderFilter = () => {
  const [data, setData, clearData] = useObjectState<OrderFilter>();
  const [dataApplied, setDataApplied, clearDataApplied] = useObjectState<OrderFilter>();

  const handleChange = useCallback(
    (e: ChangeEvent) => {
      setData({ [e.target.name as string]: e.target.value });
    },
    [setData]
  );
  const clear = useCallback(() => {
    clearData();
    clearDataApplied();
  }, [clearData, clearDataApplied]);

  const apply = useCallback(() => {
    setDataApplied(data);
  }, [data, setDataApplied]);

  const hasApplied = useCallback(() => !!(dataApplied && Object.values(dataApplied).find(Boolean)), [dataApplied]);

  const getAllAplieds = useMemo(
    () => (dataApplied && Object.values(dataApplied).filter(Boolean)?.join(', ')) || '',
    [dataApplied]
  );

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
