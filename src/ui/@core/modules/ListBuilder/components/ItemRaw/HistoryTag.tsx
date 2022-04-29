import { useMemo } from 'react';
import { useLocale } from '../../../../../../assets/locale';

import { getLabel } from './HistoryTag.config';
import * as styled from './ItemRaw.styled';

export type HistoryLabel = 'system' | 'customer';

type Props = {
  label: HistoryLabel;
  flex?: number;
};

export const HistoryTag: React.VFC<Props> = ({ label, flex = 1 }) => {
  const { word } = useLocale();
  const info = useMemo(() => getLabel(label, word), [label, word]);

  return <styled.HistoryTag flex={flex} background={info.background} children={info.label} />;
};
