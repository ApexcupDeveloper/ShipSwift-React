import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocale } from '../../../../../../assets/locale';

import * as styled from './ItemRaw.styled';
import * as config from './Payments.config';

type Props = {
  label?: config.Label;
  align?: styled.Align;
};

export const Payments: React.VFC<Props> = ({ label = '', align = 'center' }) => {
  const { word } = useLocale();
  const isDark = useSelector((state: any) => state.theme.isDark);
  const info = useMemo(() => config.getLabelInfo(label, word, isDark), [label, word]);
  
  if (!info) return <div/>;

  return (
    <styled.TagWrapper align={align}>
      <styled.Tag  background={info.background} color={info.color} children={info.label} />
    </styled.TagWrapper>
  );
};
