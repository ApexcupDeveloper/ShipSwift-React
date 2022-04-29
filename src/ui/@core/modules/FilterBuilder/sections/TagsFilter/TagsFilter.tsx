import {useCallback, useState } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import { useTagsFilter } from '../../hooks/useTagsFilter';

import { InputSearch } from '../../../Input';
import { Checkbox } from '../../../Checkbox';
import { List } from '../../components/List';
import { useEffect } from 'react';

import { TagIcon14x10 } from '../../../../../../assets/icons';

type Props = {};

const mockList: string[] = ['Product tag', 'Seconst product tag'];

export const TagsFilter: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { data, handleChange,dataApplied, getAllAplieds, hasApplied } = useTagsFilter();
  const [all, setAll] = useState(false);

useEffect(() => {
    if (getAllAplieds.split(',').filter(Boolean).length === mockList.length) {
      setAll((prev) => true);
    } else {
      setAll((prev) => false);
    }
  }, [getAllAplieds]);

  useEffect(() => {
    if (data?.tags?.length === mockList.length) {
      setAll((prev) => true);
    } else {
      setAll((prev) => false);
    }
  }, [data?.tags?.length]);

  useEffect(() => {
    if (hasApplied()) return;
    mockList.forEach((item) => {
      handleChange({ target: { name: item, value: all } });
    });
  }, [all, dataApplied?.tags, handleChange, hasApplied]);

  useEffect(() => {
    if (!hasApplied()) return;
    getAllAplieds
      .split(', ')
      .filter(Boolean)
      .forEach((item) => {
        handleChange({ target: { name: item, value: dataApplied?.tags?.includes(item) } });
      });
  }, [dataApplied?.tags, getAllAplieds, handleChange, hasApplied]);

  const onSetAll = useCallback(
    (value) => {
      mockList.forEach((item) => {
        handleChange({ target: { name: item, value: value } });
      });
      setAll(value);
    },
    [handleChange]
  );
  return (
    <List>
      <InputSearch />
      <Checkbox bold label={word('global.select.all')} checked={all} onChange={onSetAll} />
      {mockList.map((item) => (
        <Checkbox
          name={item}
          key={item}
          label={item}
          handleChangeEvent={handleChange}
          checked={data?.tags?.includes(item)}
          children={<TagIcon14x10 />}
        />
      ))}
    </List>
  );
};
