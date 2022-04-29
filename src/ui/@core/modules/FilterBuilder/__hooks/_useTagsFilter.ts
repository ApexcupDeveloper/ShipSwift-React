import { useMemo, useCallback } from 'react';
import { useObjectState } from '../../../hooks/useObjectState';
import { ChangeEvent } from '../../../hooks/useInputState';

export type TagsFilter = {
  tags: string[];
};

const getTags = (tags: string[], e: ChangeEvent) => {
  if (e.target.value && e.target.name && !tags.includes(e.target.name)) {
    tags.push(e.target.name);
  } else if (!e.target.value) {
    let index = tags.findIndex((item) => item === e.target.name);
    if (~index) tags.splice(index, 1);
  }
  return tags;
};

export const _useTagsFilter = () => {
  const [data, setData, clearData] = useObjectState<TagsFilter>();
  const [dataApplied, setDataApplied, clearDataApplied] = useObjectState<TagsFilter>();

  const handleChange = useCallback(
    (e: ChangeEvent) => {
      const tags = data?.tags || [];
      setData({ ['tags' as string]: getTags(tags, e) });
    },
    [data?.tags, setData]
  );
  const clear = useCallback(() => {
    clearData();
    clearDataApplied();
  }, [clearData, clearDataApplied]);

  const apply = useCallback(() => {
    setDataApplied(data);
  }, [data, setDataApplied]);

  const hasApplied = useCallback(() => !!(dataApplied && dataApplied.tags?.length > 0), [dataApplied]);
  const getAllAplieds = useMemo(() => (dataApplied && dataApplied?.tags?.join(', ')) || '', [dataApplied]);

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
