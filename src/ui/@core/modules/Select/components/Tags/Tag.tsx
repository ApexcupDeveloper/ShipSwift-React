import React from 'react';
import { useWithoutBubble } from '../../../../hooks/useWithoutBubble';

import { CloseIcon16 } from '../../../../../../assets/icons';
import { IconButton } from '../../../Button';
import { OptionValue } from '../Option';

import * as styled from './Tags.styled';

type Props = {
  value: OptionValue;
  disabled: boolean;
  onRemove: () => void;
};

export const Tag: React.FC<Props> = ({ value, disabled, onRemove }) => {
  const _onRemove = useWithoutBubble(onRemove);

  return (
    <styled.TagContainer>
      <styled.Label data-disabled={disabled} children={value.label} />
      {!disabled && (
        <IconButton onClick={_onRemove}>
          <CloseIcon16 />
        </IconButton>
      )}
    </styled.TagContainer>
  );
};
