import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import * as styled from './Dimensions.styled';

type Props = {
  height: number;
  width: number;
  weight: number;
};

export const Dimensions: React.VFC<Props> = ({ height, width, weight }) => {
  const { word } = useLocale();
  const dynamicDimension = useMemo(
    () => `${height} x ${width} x ${weight} ${word('global.inches')}`,
    [height, weight, width, word]
  );

  return (
    <styled.BodyWrapper>
      <styled.Title children={word('order.package.dimensions')} />
      <styled.Size children={dynamicDimension} />
    </styled.BodyWrapper>
  );
};
