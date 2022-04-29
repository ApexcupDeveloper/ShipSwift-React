import { useMemo, useCallback } from 'react';
import { useObjectState } from '../../../hooks/useObjectState';

export type FilterKeys = 'name' | 'email' | 'postcode';

type CustomerFilter = Partial<{
  name: string;
  email: string;
  postcode: string;
}>;

export const _useCustomerFilter = () => {
  const [data, setData, clearData] = useObjectState<CustomerFilter>();
  const [dataApplied, setDataApplied, clearDataApplied] = useObjectState<CustomerFilter>();

  const handleChange = useCallback(
    (e: any) => setData({ [e.target.name]: e.target.value }),
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
    data,
    dataApplied,
    handleChange,
    clear,
    apply,
    hasApplied,
    getAllAplieds,
  };
};
