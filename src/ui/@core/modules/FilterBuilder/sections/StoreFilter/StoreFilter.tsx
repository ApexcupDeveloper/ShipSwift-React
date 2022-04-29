import { useState, useEffect } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import { useStoreFilter } from '../../hooks/useStoreFilter';

import { InputSearch } from '../../../Input';
import { Checkbox } from '../../../Checkbox';
import { List } from '../../components/List';
import { useCallback } from 'react';
import { useGrpcClient } from '../../../../../../client/client-hook';
import { useAuth0 } from '../../../../../../business/auth/hooks';
import { addErrorToast } from '../../../../../toast';
import { StoresItem } from '../../../../../../client/client';
import { getCompanyId } from '../../../../../../utils';
import { cacheService } from '../../../../../../utils/cache-service';
import { config } from '../../../../../../private';

type Props = {};

export const StoreFilter: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { data, handleChange, dataApplied, hasApplied, getAllAplieds } = useStoreFilter();
  const [all, setAll] = useState(false);
  const [allList, setAllList] = useState<StoresItem[]>([]);
  const [mockList, setMockList] = useState<StoresItem[]>([]);
  const [query, setQuery] = useState('');
  const getclient = useGrpcClient();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);

  useEffect(() => {
    if (companyId) {
      cacheService.stopPoll('stores');
      cacheService.callWithCache('stores', 'main_stores', getStores.bind(this), [], config.cache.store_timeout)
        .subscribe((data: any[]) => {
          setMockList(data);
          setAllList(data);
        }, err => {
          addErrorToast(err.message)
        })
    }
  }, [user, companyId]);

  const getStores = () => {
    return new Promise<any>((resolve, reject) => {
      getclient()
        .then((client) => {
          Promise.all([
            client.getAllStores(companyId)
          ])
            .then(data => {
              resolve(data[0]);
            }, error => {
              reject(error);
            })
        })
        .catch((err) => {
          reject(err);
        });
    })
  };

  useEffect(() => {
    if (query.length) {
      let tempArr = allList.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      setMockList(tempArr)
    } else {
      setMockList(allList)
    }
  }, [query, allList])

  useEffect(() => {
    if (getAllAplieds.split(', ').filter(Boolean).length === mockList.length) {
      setAll((prev) => true);
    } else {
      setAll((prev) => false);
    }
  }, [getAllAplieds, mockList.length]);

  useEffect(() => {
    if (dataApplied?.stores?.length === mockList.length && dataApplied.stores.length > 0) {
      setAll(true);
    } else {
      setAll(false);
    }
  }, [dataApplied?.stores, mockList.length]);

  useEffect(() => {
    if (hasApplied()) return;
    mockList.forEach((item) => {
      handleChange(item, { target: { name: item.name, value: all } });
    });
  }, [all, dataApplied?.stores, handleChange, hasApplied, mockList]);

  useEffect(() => {
    if (!hasApplied()) return;
    getAllAplieds
      .split(', ')
      .filter(Boolean)
      .forEach((item, index) => {
        handleChange(dataApplied?.stores[index] as StoresItem, { target: { name: item, value: dataApplied?.stores?.some(store => store.id === dataApplied?.stores[index].id) } });
      });
  }, [dataApplied?.stores, getAllAplieds, handleChange, hasApplied]);

  const onSetAll = useCallback(
    (value) => {
      mockList.forEach((item) => {
        handleChange(item, { target: { name: item.name, value: value } });
      });
      setAll(value);
    },
    [handleChange, mockList]
  );

  const onChangeFilter = (e: string) => {
    setQuery(e)
  }

  return (
    <List>
      <InputSearch onChange={onChangeFilter} value={query} />
      <Checkbox bold label={word('global.select.all')} checked={all} onChange={onSetAll} />
      {mockList.map((item) => (
        <Checkbox
          name={item.name}
          key={item.id}
          label={item.name}
          handleChangeEvent={(e) => handleChange(item, e)}
          checked={data?.stores?.some(store => store.id === item.id)}
        />
      ))}
    </List>
  );
};
