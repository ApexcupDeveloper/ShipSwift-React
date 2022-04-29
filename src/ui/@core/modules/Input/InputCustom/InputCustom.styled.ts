/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { Nullable } from '../../../../../utils';

export const BodyWrapper = styled.div<{
  height?: Nullable<number>;
  width?: Nullable<number>;
  flex?: Nullable<number>;
  font: 4 | 5;
  error?: Nullable<boolean>;
}>`
  ${({ theme }) => theme.transition.default};
  ${({ width }) => (width ? `max-width: ${width}px;` : '')}
  ${({ flex }) => (flex != undefined ? `flex: ${flex} !important;` : '')}
  ${({ error, theme }) => (error ? `border: 1px solid ${theme.color.additional[1]} !important;` : '')}
 
  border       : 1px solid ${({ theme }) => theme.color.greyscale[3]};
  background: ${({ theme }) => theme.color.custom[1]};
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0 5px;
  min-height: ${({ height }) => height}px;
  position: relative;

  :focus-within,
  :hover {
    border: 1px solid ${({ theme }) => theme.color.main[7]};
  }

  &[data-disabled='true'] {
    border-color: ${({ theme }) => theme.color.greyscale[3]};
    background: ${({ theme }) => theme.color.background[2]};
  }

  input,
  textarea {
    ${({ theme, font }) => theme.font.c_regular[font ?? 4]};
    min-height: ${({ height }) => (height ? height - 20 : 0)}px;
    background: ${({ theme }) => theme.color.custom[1]};

    border: 0px;
    color: ${({ theme }) => theme.color.greyscale[18]};
    width: 100%;
    margin: 0 5px;
    text-align: justify;
    resize: none;

    ::placeholder {
      color: ${({ theme }) => theme.color.greyscale[10]};
    }

    :disabled {
      color: ${({ theme }) => theme.color.greyscale[8]};
      background: ${({ theme }) => theme.color.background[2]};

      ::placeholder {
        color: ${({ theme }) => theme.color.greyscale[8]};
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 30px;
  height: 18px;
  padding-right: 10px;
  margin-left: 5px;
  border-right: 1px solid ${({ theme }) => theme.color.greyscale[3]};
  align-items: center;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const Prefix = styled.p<{
  height?: Nullable<number>;
  fixed?: Nullable<boolean>;
}>`
  ${({ theme }) => theme.font.c_regular[6]};
  ${({ fixed, height }) => (fixed ? `position: absolute; bottom: 10px; right: 5px;` : '')}
  color: ${({ theme }) => theme.color.background[8]};
  margin-right: 5px;
`;
