import { useCallback, useEffect, useMemo } from 'react';
import { useObjectState } from '../../../hooks/useObjectState';
import { ChangeEvent } from '../../../hooks/useInputState';
import { StoresItem } from '../../../../../client/client';

export type StoreFilter = {
  stores: StoresItem[];
};

const getStore = (stores: StoresItem[], item: StoresItem, e: ChangeEvent) => {
  if (e.target.value && e.target.name && !stores.some(store => store.id === item.id)) {
    stores.push(item);
  } else if (!e.target.value) {
    let index = stores.findIndex((store) => store.id === item.id);
    if (~index) stores.splice(index, 1);
  }
  return stores;
};

export const _useStoreFilter = () => {
  const [data, setData, clearData] = useObjectState<StoreFilter>();
  const [dataApplied, setDataApplied, clearDataApplied] = useObjectState<StoreFilter>();

  useEffect(() => {
    setData({ 'stores': [] })
  }, [setData])

  const handleChange = useCallback(
    (item: StoresItem, e: ChangeEvent) => {
      const stores = data && data?.stores ? data.stores : [];
      setData({ ['stores' as string]: getStore(stores, item, e) });
    },
    [data?.stores, setData]
  );
  const clear = useCallback(() => {
    clearData();
    clearDataApplied();
  }, [clearData, clearDataApplied]);

  const apply = useCallback(() => {
    setDataApplied(data);
  }, [data, setDataApplied]);

  const hasApplied = useCallback(() => !!(dataApplied && dataApplied?.stores?.length > 0), [dataApplied]);
  const getAllAplieds = useMemo(() => {
    let applied: string[] = [];
    if (dataApplied && dataApplied?.stores && dataApplied?.stores.length) {
      dataApplied?.stores.forEach(item => applied.push(item.name))
    }
    return applied.length ? applied.join(', ') : '';
  }, [dataApplied]);
  // cons

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
