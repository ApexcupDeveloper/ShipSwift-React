import { useMemo } from 'react';
import { useLocale } from '../../../../../../assets/locale';

import * as styled from './ItemRaw.styled';
import * as config from './ActiveStatus.config';
import { useSelector } from 'react-redux';

type Props = {
  label: config.Label;
};

export const ActiveStatus: React.VFC<Props> = ({ label }) => {
  const { word } = useLocale();
  const isDark = useSelector((state: any) => state.theme.isDark);

  const info = useMemo(() => config.getLabelInfo(label, word, isDark), [label, word, isDark]);
  if (!info) return null;

  return (
    <styled.TagWrapper>
      <styled.Tag background={info.background} color={info.color} children={info.label} />
    </styled.TagWrapper>
  );
};
