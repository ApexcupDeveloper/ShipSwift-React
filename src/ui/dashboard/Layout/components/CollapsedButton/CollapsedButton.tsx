import { useMemo } from 'react';

import { ComponentRotate } from '../../../../@core/modules/Other';
import { MainButton } from '../../../../@core/modules/Button';

import { ArrowLeftIcon16 } from '../../../../../assets/icons';

import * as styled from './CollapsedButton.styled';

type Props = {
  onClick: () => void;
  showLabel: boolean;
};

export const CollapsedButton: React.FC<Props> = ({ onClick, showLabel }) => {
  const angle = useMemo(() => (showLabel ? 0 : 180), [showLabel]);

  return (
    <styled.BodyWrapper>
      <ComponentRotate angle={angle}>
        <MainButton
          onClick={onClick}
          flat
          type={'default-grey'}
          icon={
            <styled.IconWrapper>
              <ArrowLeftIcon16 />
            </styled.IconWrapper>
          }
        />
      </ComponentRotate>
    </styled.BodyWrapper>
  );
};
