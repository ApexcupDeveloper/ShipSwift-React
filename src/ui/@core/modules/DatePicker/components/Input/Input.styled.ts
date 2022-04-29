import styled from 'styled-components';
import { Nullable } from '../../../../../../utils';

export const BodyWrapper = styled.div<{ width?: Nullable<number>; }>`
  ${({ theme }) => theme.transition.default};
  ${({ width }) => width ? `min-width: ${width}px` : ''};

  border       : 1px solid ${({ theme }) => theme.color.greyscale[3]};
  display      : flex;
  align-items  : center;
  border-radius: 5px;
  padding      : 5px;
  min-height   : 36px;
  cursor       : pointer;

  :focus-within, :hover {
    border: 1px solid ${({ theme }) => theme.color.main[7]};
  }

  &[data-disabled=true] {
    border-color: ${({ theme }) => theme.color.greyscale[4]};
    background  : ${({ theme }) => theme.color.background[2]};
    cursor      : auto;
  }
`;

export const Date = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};

  color : ${({ theme }) => theme.color.greyscale[16]};
  width : 100%;
  margin: 0 10px;

  &[data-disabled=true] {
    color: ${({ theme }) => theme.color.greyscale[8]};
    user-select: none;
  }
`;

export const IconWrapper = styled.div`
  ${({ theme }) => theme.transition.default};
  
  display     : flex;
  margin-right: 5px;
  align-items : center;

  svg {
    height: 12px;
    width: 12px;
  }

  &[data-toggle='true'] {
    transform: rotate(-180deg);
  }
`;
