import { useMemo } from 'react';
import { useSelectTab } from '../../hooks/useSelectTab';

type Props = {
  id: string | number;
};

export const Content: React.FC<Props> = ({ id, children }) => {
  const { selectedTab } = useSelectTab();
  
  const selected = useMemo(() => id === selectedTab, [id, selectedTab]);
  if (!selected) return null;

  return <>{children}</>;
};
