import styled, { Color } from 'styled-components';

export type ButtonType = 'secondary' | 'default' | 'danger' | 'outline' | 'text' | 'text-green' | 'text-red' | 'text-white' | 'default-grey';
export type Palette = {
  color           : string;
  background      : string;
  border?         : string;
  activeColor     : string;
  activeBackground: string;
  activeBorder?   : string;
};

export const paletteMap =
  (themeColor: Color) =>
  (type: ButtonType): Palette => {
    switch (type) {
      case 'secondary':
        return {
          color           : themeColor.main[7],
          background      : themeColor.main[1],
          activeColor     : themeColor.greyscale[1],
          activeBackground: themeColor.main[8],
        };

      case 'text': 
        return {
          color           : themeColor.greyscale[14],
          background      : 'transparent',
          activeColor     : themeColor.greyscale[14],
          activeBackground: 'transparent',
        };

      case 'text-green': 
        return {
          color           : themeColor.main[7],
          background      : 'transparent',
          activeColor     : themeColor.main[8],
          activeBackground: 'transparent',
        };

      case 'text-red': 
        return {
          color           : themeColor.additional[1],
          background      : 'transparent',
          activeColor     : themeColor.additional[1],
          activeBackground: 'transparent',
        };

      case 'text-white': 
        return {
          color           : '#FFF',
          // color           : themeColor.greyscale[1],
          background      : 'transparent',
          activeColor     : themeColor.greyscale[8],
          activeBackground: 'transparent',
        };

      case 'danger': 
        return {
          color           : themeColor.main[7],
          background      : '#FF7171',
          activeColor     : themeColor.greyscale[1],
          activeBackground: '#F66666',
        };

      case 'outline': 
        return {
          color           : themeColor.greyscale[14],
          background      : themeColor.greyscale[1],
          border          : `border: 1px solid ${themeColor.greyscale[10]}`,
          activeColor     : themeColor.greyscale[14],
          activeBackground: themeColor.greyscale[4],
        };

      case 'default-grey': 
        return {
          color           : themeColor.greyscale[1],
          background      : themeColor.greyscale[8],
          activeColor     : themeColor.greyscale[1],
          activeBackground: themeColor.greyscale[6],
        };

      default: 
        return {
          color           : '#FFF',
          background      : themeColor.main[7],
          activeColor     : themeColor.greyscale[1],
          activeBackground: themeColor.main[8],
        };
    }
  };

export const BodyWrapper = styled.button<{ height: number; palette: Palette }>`
  ${({ theme }) => theme.font.c_regular[5]};
  ${({ theme }) => theme.transition.default};
  ${({ palette }) => palette?.border};

  color     : ${({ palette }) => palette.color};
  background: ${({ palette }) => palette.background};

  display        : flex;
  border-radius  : 5px;
  border         : none;
  cursor         : pointer;
  align-items    : center;
  justify-content: center;

  &[data-flat='false'] {
    min-height: ${({ height }) => height}px;
    height    : ${({ height }) => height}px;
    padding   : 0 ${({ height }) => height / 3}px;

    min-width: 120px;
  }

  &[data-width='164'] {
    min-width: 164px;
  }

  :hover,
  :active {
    border-color: transparent;
    ${({ palette }) => palette?.activeBorder};

    color     : ${({ palette }) => palette.activeColor};
    background: ${({ palette }) => palette.activeBackground};

    * {
      stroke: ${({ palette }) => palette.activeColor};
    }
  }

  :disabled {
    cursor    : default;
    opacity   : 0.15;
    background: ${({ palette }) => palette.background} !important;
  }
`;

export const IconWrapper = styled.div<{ margin?: boolean; palette: Palette; iconSize: number }>`
  display: flex;

  * {
    ${({ theme }) => theme.transition.fast};

    stroke: ${({ palette }) => palette.color};
    height: ${({ iconSize }) => iconSize}px;
    width : ${({ iconSize }) => iconSize}px;
  }

  &[data-margin='true'] {
    margin-right: 5px;
  }
`;
