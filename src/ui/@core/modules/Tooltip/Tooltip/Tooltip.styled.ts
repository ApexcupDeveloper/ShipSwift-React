import styled from 'styled-components';
import { Nullable } from '../../../../../utils';

export type Align = 'left' | 'right' | 'center';
export type Position = 'top' | 'bottom' | 'center';

export const BodyWrapper = styled.div<{
  flex: Nullable<number>;
}>`
  position: relative;
  display : flex;

  ${({ flex }) => flex ? `flex: ${flex}; justify-content: center; width: 100%;` : null};

  :hover, &[data-visible=true] {
    > :last-child {
      visibility: visible;
      opacity   : 1;

      &[data-align='center'] {
        transform: translateX(-50%);
      }
    }
  }
`;

export const TooltipContainer = styled.div`
  ${({ theme }) => theme.transition.default};
  ${({ theme }) => theme.shadow.medium};
  ${({ theme }) => theme.layer[6]};

  background: ${({ theme }) => theme.color.greyscale[1]};

  display       : flex;
  flex-direction: column;
  opacity       : 0;
  display       : flex;
  position      : absolute;
  max-width     : 300px;
  width         : max-content;
  border-radius : 6px;
  visibility    : hidden;
  padding       : 10px 0;
  margin        : -10px 0;

  &[data-align='left'] {
    left: 120%;
  }

  &[data-align='right'] {
    right: 120%;
  }

  &[data-align='center'] {
    left     : 50%;
    transform: translateX(-50%);
  }

  &[data-position='center'] {
    bottom: 100%;
    transform: translateY(50%);
  }

  &[data-position='center']&[data-align='center'] {
    bottom   : 100%;
    left     : 50%;
    transform: translateX(-50%) translateY(50%);
  }

  &[data-position='top'] {
    bottom: 200%;
  }

  &[data-position='bottom'] {
    top: 200%;
  }

  & > * {
    display: flex;
  }
`;

export const TextTooltip = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[16]};
  
  padding: 0 25px;
  margin : 0 -5px;
`;