import {useCallback, useMemo} from 'react';
import {Nullable} from '../../../../../utils';
import {ChangeEventHandler} from '../../../hooks/useInputState';

import * as styled from './InputCustom.styled';

export type Props = {
  height?: number;
  icon?: React.ReactNode;
  width?: number;
  placeholder?: Nullable<string>;
  value?: Nullable<string>;
  flex?: number;
  disabled?: boolean;
  prefix?: string;
  multiline?: boolean;
  onChange?: (value: string) => void;
  onKeyDown?: (key: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void;
  handleChangeEvent?: ChangeEventHandler;
  name?: string;
  type?: 'text' | 'number' | 'password';
  maxLength?: number;
  hideIcon?: boolean;
  id?: string;
  error?: boolean;
  fixedMaxLength?: boolean;
  autoFocus?: boolean;
  style?: React.CSSProperties;
};

export const fontMap = (height: number): 4 | 5 => {
  if (height <= 36) return 4;
  return 5;
};

export const InputCustom: React.FC<Props> = ({
  placeholder,
  value,
  width,
  multiline = false,
  flex = 1,
  prefix,
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  onClick,
  onDoubleClick,
  handleChangeEvent,
  name,
  icon,
  disabled = false,
  height = 36,
  type = 'text',
  maxLength,
  id = '',
  error,
  fixedMaxLength = false,
  autoFocus = false,
  style
}) => {
  const font = useMemo(() => fontMap(height), [height]);

  const onHandleChangeEvent = useCallback(
    (e) =>
      (onChange && onChange(e?.target?.value)) ||
      (handleChangeEvent &&
        handleChangeEvent({
          target: {
            name,
            value: e?.target?.value,
          },
        })),
    []
  );

  return (
    <styled.BodyWrapper data-disabled={disabled} font={font} flex={flex} width={width} height={height} error={error}>
      {icon && <styled.IconWrapper>{icon}</styled.IconWrapper>}
      {multiline ? (
        <textarea
          placeholder={placeholder ?? ''}
          value={value ?? ''}
          id={id ?? ''}
          disabled={disabled}
          onChange={onHandleChangeEvent}
          onKeyDown={(e) => onKeyDown && onKeyDown(e?.key)}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
          onDoubleClick={(e) => {}}
          maxLength={maxLength ?? undefined}
          autoFocus={autoFocus}
          style={style}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder ?? ''}
          value={value ?? ''}
          id={id ?? ''}
          disabled={disabled}
          onChange={onHandleChangeEvent}
          onKeyDown={(e) => onKeyDown && onKeyDown(e?.key)}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          maxLength={maxLength ?? undefined}
          autoFocus={autoFocus}
          style={style}
        />
      )}
      {prefix && <styled.Prefix children={prefix} fixed={fixedMaxLength} height={height} />}
    </styled.BodyWrapper>
  );
};
