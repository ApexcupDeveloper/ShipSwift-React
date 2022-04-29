/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { Nullable } from '../../../../../../utils';

export type Align = 'center' | 'left' | 'right';
export type Justify = 'start' | 'center'

export const RawWrapper = styled.div<{ minWidth?: number, minHeight?: number, isDark?: boolean }>`
	background   : ${({ theme }) => theme.color.greyscale[1]};

	display        : flex;
	align-items    : center;
	justify-content: space-between;
	min-width      : 100%;
	min-height     : ${({ minHeight }) => `${minHeight === undefined ? 66 : minHeight}px`};
	padding        : ${({ minHeight }) => `${minHeight === undefined ? 22 : 0}px 25px`};

  & > * {
    flex: 1;
    ${({ minWidth }) => `min-width: ${minWidth != undefined ? minWidth : 100}px`};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.greyscale[2]};
  }

  & > p:first-child {
    text-align: left;
  }

  & > div:first-child {
    justify-content: left;
  }

  &[data-hover=true]:hover{
    background-color:${({ theme }) => theme.color.background[2]};
    cursor: pointer
  }

  &[data-flat=true] {
    padding: 0;
  }
`;

export const Title = styled.p<{ flex?: number, align?: Align, hover?: boolean, width?: string }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}
  ${({ theme }) => theme.font.c_regular[5]};
  ${({ width }) => width ? `width: ${width};` : null};

  color: ${({ theme }) => theme.color.greyscale[16]};

  position     : relative;
  text-align   : ${({ align }) => align ? `${align} !important` : 'center'};;
  text-overflow: ellipsis;
  overflow     : hidden;

  &[data-bold=true] {
    ${({ theme }) => theme.font.c_medium[5]};
  }

  &:hover {
    ${({ hover }) => hover ? 'color: #1FC8BE;' : null};
  }
`;

export const Editable = styled.input<{ flex?: number, align?: Align }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}
  ${({ theme }) => theme.font.c_regular[5]};

  color: ${({ theme }) => theme.color.greyscale[16]};

  position     : relative;
  text-align   : ${({ align }) => align ? `${align} !important` : 'center'};;
  text-overflow: ellipsis;
  overflow     : hidden;
  background   : ${({ theme }) => theme.color.greyscale[14]};

  &[data-bold=true] {
    ${({ theme }) => theme.font.c_medium[5]};
  }
`;

export const Merge = styled.div<{ flex?: number, justify?: Justify, margin?: string }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}

  display    : flex;
  align-items: center;
  justify-content: ${({ justify }) => justify ? `${justify} !important` : 'start'};
  ${({ margin }) => margin ? `margin:${margin}` : ''};
  & > *:not(:last-child) {
    margin-right: 12px;
  }

  & > p {
    text-align: left;
  }
`;

export const CheckboxWrapper = styled.div<{ flex?: number }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}
  margin-right: 20px !important;
`;

export const SwitchWrapper = styled.div<{ flex?: number }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}

  display        : flex;
  justify-content: center;
`;

export const TagWrapper = styled.div<{ align?: Align }>`
  display        : flex;
  justify-content: ${({ align }) => align ? `${align} !important` : 'center'};;
`;

export const Tag = styled.p<{ color?: string; background: string }>`
  ${({ theme }) => theme.font.p[7]};

  color: ${({ color, theme }) => color ?? theme.color.greyscale[1]};
  background: ${({ background }) => background};

  border-radius: 12px;
  padding      : 1px 12px;
  max-height   : 24px;
  text-align   : center;
`;

export const RoadmapTag = styled.p<{ color?: string; background: string }>`
  ${({ theme }) => theme.font.p[7]};

  color: ${({ color, theme }) => color ?? theme.color.greyscale[1]};
  background: ${({ background }) => background};

  border-radius: 4px;
  padding      : 1px 12px;
  max-height   : 28px;
  text-align   : center;
`;

export const HistoryTag = styled.p<{ flex?: number, background: string; }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}
  ${({ theme }) => theme.font.p[7]};

  background   : ${({ background }) => background};
  border-radius: 4px;
  text-align   : center;
  max-width    : 80px;
  margin       : 0 20px;
`;

export const Space = styled.div<{ flex?: number, minWidth?: number }>`
  ${({ minWidth }) => minWidth != undefined ? `min-width: ${minWidth}px;` : ''}
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}

  display        : flex;
  justify-content: center;
  align-items    : center;
`;

export const ProductImage = styled.img<{ contain?: Nullable<boolean>; }>`
  width        : 75px;
  margin       : -12px 0;
  object-fit   : ${({ contain }) => contain ? 'contain' : 'cover'};
  border-radius: 4px;
`;

export const Link = styled.a<{
  align: Nullable<'center' | 'left' | 'right'>
}>`
  color: ${({ theme }) => theme.color.greyscale[18]};
  text-align: ${({ align }) => align};
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: left;

    :last-child {
      color: ${({ theme }) => theme.color.greyscale[14]};
    }
  }
`;

export const ProductItem = styled.div<{ flex?: number }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[16]};
`;

export const NoteWrapperWithHovering = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  & > * {
    margin: 0 auto;
  };
`;

export const ProductItemRowWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const ProductItemRow = styled.div`
  overflow: hidden;
  max-width: fit-content;
  overflow-wrap: break-word;

  &:hover {
    color: #1890ff;
  }
`;

export const Bage = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0 6px;
  color: white;
  background-color: #9BBBEC;
  border-radius: 10px !important;
  ${({ theme }) => theme.font.c_regular[6]};
  line-height: 1rem;
`;