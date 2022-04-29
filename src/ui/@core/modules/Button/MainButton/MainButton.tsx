import { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Nullable } from '../../../../../utils';

import * as styled from './MainButton.styled';

type Props = {
  height?  : 36 | 40;
  icon?    : React.ReactNode;
  disabled?: boolean;
  type?    : styled.ButtonType;
  onClick? : Nullable<() => void>;
  width?   : 164;
  bgColor?   : string;
  textColor? : string;
  style?: any;
  /**
   * @default 16px
   */
  iconSize?: number;

  /**
   * Resets basic margin, padding, width and height.
   */
  flat?: boolean;
};

export const MainButton: React.FC<Props> = ({
  icon,
  children,
  onClick,
  iconSize = 16,
  flat = false,
  disabled = false,
  type = 'default',
  height = 36,
  width,
  bgColor,
  textColor,
  style
}) => {
  const { color } = useTheme();

  const palette = useMemo(() => styled.paletteMap(color), [color]);
  const selectedPalette = useMemo(() => palette(type), [palette, type]);

  return (
    <styled.BodyWrapper
      data-flat={flat}
      data-width={width}
      height={height}
      disabled={disabled}
      palette={selectedPalette}
      onClick={onClick as any}

      style={{ background: bgColor, color: textColor, ...style }}
    >
      {icon && (
        <styled.IconWrapper palette={selectedPalette} iconSize={iconSize} data-margin={!!children}>
          {icon}
        </styled.IconWrapper>
      )}
      {children}
    </styled.BodyWrapper>
  );
};
