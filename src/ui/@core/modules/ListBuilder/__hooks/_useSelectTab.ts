import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSearchQuery } from '../../../hooks/useSearchQuery';

export const _useSelectTab = (queryKey?: string) => {
	const history = useHistory();
	const params = useSearchQuery();
  const [selectedTab, setTab] = useState<string | number>();

	const _setTab = useCallback(
    (tab: string | number) => {
      setTab(tab);
			if (!queryKey) return;

			const newParams = new URLSearchParams(window.location.search);

      newParams.set(queryKey, tab.toString());
			history.push({ search: newParams.toString() });
    },
    [queryKey, history]
  );

  useEffect(() => {
    if (!queryKey) return;
    const tab = params[queryKey];		
		
    tab && selectedTab == null && _setTab(tab);	
		tab && tab !== selectedTab && setTab(tab);
		
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return {
    selectedTab,
    setTab: _setTab,
  };
};
