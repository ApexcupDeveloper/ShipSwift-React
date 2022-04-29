import { Nullable } from '../../../../../../utils';
import styled from 'styled-components';

export const RelativeContainer = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => theme.transition.default};

  display     : flex;
  margin-right: 5px;
  align-items : center;

  &[data-position='top'] {
    transform: rotate(-180deg);
  }

  &[data-opened=true] {
    &[data-position='top'] {
      transform: rotate(0deg);
    }

    &[data-position='bottom'] {
      transform: rotate(-180deg);
    }
  }

  &[data-disabled=true] svg * {
    stroke: ${({ theme }) => theme.color.greyscale[8]} !important;
  }

  svg {
    height: 16px;
    width: 16px;

    * {
      ${({ theme }) => theme.transition.default};
    }
  }
`;

export const InputWrapper = styled.div<{ height?: Nullable<number>, width?: Nullable<number>, error?: Nullable<boolean>; }>`
  ${({ theme }) => theme.layer[2]};
  ${({ theme }) => theme.transition.default};
  ${({ width }) => width ? `min-width: ${width}px` : ''};

  ${({ error, theme }) => (error ? `border: 1px solid ${theme.color.additional[1]} !important;` : '')}

  border       : 1px solid ${({ theme }) => theme.color.greyscale[3]};
  background   : ${({ theme }) => theme.color.custom[1]};
  min-height   : ${({ height }) => height}px;
  display      : flex;
  width        : 100%;
  border-radius: 5px;
  cursor       : pointer;
  align-items  : center;
  padding      : 5px;

  &[data-opened=true], :focus-within, :hover {
    border: 1px solid ${({ theme }) => theme.color.main[7]};

    ${IconWrapper.toString()} * {
      stroke: ${({ theme }) => theme.color.main[7]};
    }
  }

  &[data-disabled=true] {
    border-color: ${({ theme }) => theme.color.greyscale[3]};
    background  : ${({ theme }) => theme.color.background[2]};
    
    cursor: default;
  }
`;

export const SelectContainer = styled.div<{ height?: Nullable<number> }>`
  ${({ theme }) => theme.transition.fast};
  top: 100%;

  position  : absolute;
  width     : 100%;
  visibility: hidden;
  z-index   : 9998;

  &[data-position='top'] {
    top: auto;
    bottom: 100%;
  }

  &[data-opened=true] {
    transition: none;
    visibility: visible;
  }
`;

export const SelectBody = styled.div<{
  searchable: Nullable<boolean>
}>`
  ${({ theme }) => theme.transition.fast};

  background: ${({ theme }) => theme.color.custom[1]};
  border    : 1px solid ${({ theme }) => theme.color.background[5]};

  width         : 100%;
  min-width     : fit-content;
  max-height    : 280px;
  display       : flex;
  flex-direction: column;
  opacity       : 0;
  border-radius : 5px;
  overflow-x    : hidden;
  overflow-y    : auto;

  &[data-opened=true] {
    opacity   : 1;
    margin-top: 5px;

    &[data-position='top'] {
      margin-bottom: 5px;
    }
  }
`;

export const Placeholder = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color    : ${({ theme }) => theme.color.greyscale[10]};
  margin   : 0 10px;
  min-width: fit-content;
  max-width: 100%;
`;

export const SearchContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${({ theme }) => theme.color.greyscale[1]};
  position: absolute;
`;