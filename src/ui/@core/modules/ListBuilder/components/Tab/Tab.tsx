import { useCallback, useEffect, useMemo } from 'react';
import { useSelectTab } from '../../hooks/useSelectTab';

import { DisplayRound } from '../../../Other';
import { Content } from './Content';

import * as styled from './Tab.styled';

type Props = {
  label   : string;
  id      : string | number;
  count?  : number;
  default?: boolean;
};

type FCTab = React.FC<Props> & {
  Group: typeof styled.Group;
  Content: typeof Content;
};

const Tab: FCTab = ({ label, count, id, default: byDefault }) => {
  const { selectedTab, setTab } = useSelectTab();

  const onSelect = useCallback(() => setTab(id), [id, setTab]);
  const selected = useMemo(() => id === selectedTab, [id, selectedTab]);
  const formattedLabel = useMemo(() => (`${label}${count !== undefined ? ` (${count})` : ''}`), [label, count]);

  useEffect(() => {
    byDefault && selectedTab == null && setTab(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [byDefault]);

  return (
    <DisplayRound overflow>
      <styled.Tab onClick={onSelect} children={formattedLabel} data-active={selected} />
    </DisplayRound>
  );
};

Tab.Group = styled.Group;
Tab.Content = Content;

export default Tab;
export { Tab };
