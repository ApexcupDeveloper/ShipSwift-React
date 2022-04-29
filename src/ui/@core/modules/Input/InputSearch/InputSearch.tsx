import { useCallback, useState } from 'react';

import { CloseIcon16, SearchIcon16 } from '../../../../../assets/icons';
import { useLocale } from '../../../../../assets/locale';
import { IconButton } from '../../Button';
import { Props as CustomProps } from '../InputCustom/InputCustom';

import * as customStyled from '../InputCustom/InputCustom.styled';
import * as styled from './InputSearch.styled';

type Props = Omit<CustomProps, 'icon' | 'height' | 'placeholder' | 'multiline'>;

export const InputSearch: React.FC<Props> = ({ value, disabled, width, onChange }) => {
  const { word } = useLocale();
  const [clearVisible, setClearVisible] = useState(false);

  const clear = useCallback(() => onChange && onChange(''), [onChange]);
  const onClearVisibleOn = useCallback(() => setClearVisible(true), []);
  const onClearVisibleOff = useCallback(() => setTimeout(() => setClearVisible(false), 250), []);

  return (
    <customStyled.BodyWrapper font={4} height={36} width={width} data-disabled={disabled}>
      <styled.IconWrapper>
        <SearchIcon16 />
      </styled.IconWrapper>
      <input
        placeholder={word('global.search')}
        value={value ?? ''}
        onChange={(e) => onChange && onChange(e?.target?.value)}
        onFocus={onClearVisibleOn}
				onBlur={onClearVisibleOff}
      />
      {value && clearVisible && (
        <styled.CloseWrapper>
          <IconButton onClick={clear} >
            <CloseIcon16 />
          </IconButton>
        </styled.CloseWrapper>
      )}
    </customStyled.BodyWrapper>
  );
};
