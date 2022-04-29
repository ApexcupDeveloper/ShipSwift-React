import { useWithoutBubble } from '../../../../hooks/useWithoutBubble';

import { CloseIcon16 } from '../../../../../../assets/icons';
import { IconButton } from '../../../Button';
import { OptionValue } from '../Option';
import { Tag } from './Tag';

import * as styled from './Tags.styled';

type Props = {
  values: OptionValue[];
  disabled: boolean;
  onRemove: (value: OptionValue) => void;
  onClear: () => void;
};

export const Tags: React.FC<Props> = ({ values, disabled, onRemove, onClear }) => {
  const _onClear = useWithoutBubble(onClear);

  return (
    <styled.BodyWrapper>
      <styled.TagList>
        {values.map((value) => (
          <Tag key={value.value} disabled={disabled} value={value} onRemove={() => onRemove(value)} />
        ))}
      </styled.TagList>
      {!disabled && !!values.length && (
        <styled.ClearIcon>
          <IconButton onClick={_onClear}>
            <CloseIcon16 />
          </IconButton>
        </styled.ClearIcon>
      )}
    </styled.BodyWrapper>
  );
};
