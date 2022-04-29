import { useMemo, useState } from 'react';

import { PasswordIcon16, NoSeeIcon16, SeeIcon16 } from '../../../../../assets/icons';
import { SwitchIconButton } from '../../Button';

import { Props as CustomProps, fontMap } from '../InputCustom/InputCustom';

import * as customStyled from '../InputCustom/InputCustom.styled';
import * as styled from './InputPassword.styled';

type Props = Omit<CustomProps, 'icon' | 'multiline'>;

export const InputPassword: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  width,
  disabled = false,
  height = 36,
  hideIcon,
  onKeyDown,
  error
}) => {
  const [show, setShow] = useState(false);
  const font = useMemo(() => fontMap(height), [height]);
  return (
    <customStyled.BodyWrapper font={font} height={height} width={width} data-disabled={disabled} error={error}>
      {
        hideIcon ?
          <></>
          :
          <customStyled.IconWrapper>
            <PasswordIcon16 />
          </customStyled.IconWrapper>
      }
      <input
        placeholder={placeholder ?? ''}
        type={show ? 'text' : 'password'}
        value={value ?? ''}
        onChange={(e) => onChange && onChange(e?.target?.value)}
        onKeyPress={(e) => onKeyDown && onKeyDown(e?.key)}
      />
      <styled.EyeWrapper>
        <SwitchIconButton defaultState={false} eventOn={() => setShow(true)} eventOff={() => setShow(false)}>
          <NoSeeIcon16 />
          <SeeIcon16 />
        </SwitchIconButton>
      </styled.EyeWrapper>
    </customStyled.BodyWrapper>
  );
};
