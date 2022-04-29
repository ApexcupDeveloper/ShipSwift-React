import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocale } from '../../../../../../assets/locale';

import * as styled from './ItemRaw.styled';
import * as config from './RoadmapStatus.config';

type Props = {
  label: config.Label;
};

export const RoadmapStatus: React.VFC<Props> = ({ label }) => {
  const { word } = useLocale();
  const isDark = useSelector((state: any) => state.theme.isDark);
  const info = useMemo(() => config.getLabelInfo(label, word), [label, word]);
  if (!info) return null;

  return (
    <styled.TagWrapper>
      <styled.RoadmapTag background={info.background} color={isDark ? "#1C1C1E" : info.color} children={info.label} />
    </styled.TagWrapper>
  );
};
