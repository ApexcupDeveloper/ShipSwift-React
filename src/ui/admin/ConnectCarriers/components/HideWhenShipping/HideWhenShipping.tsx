import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { NoSeeIcon16, SeeIcon16 } from '../../../../../assets/icons';

import * as styled from './HideWhenShipping.styled';

type Props = {
  hide: boolean;
};

export const HideWhenShipping: React.VFC<Props> = ({ hide }) => {
  const { word } = useLocale();
	
  const label = useMemo(
    () => (hide ? word('global.hide.when.shipping') : word('global.show.when.shipping')),
    [hide, word]
  );

  return (
    <styled.BodyWrapper>
      {hide ? <NoSeeIcon16 /> : <SeeIcon16 />}
      <styled.Label children={label} />
    </styled.BodyWrapper>
  );
};
