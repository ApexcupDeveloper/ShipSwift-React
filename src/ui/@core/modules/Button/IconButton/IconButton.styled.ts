import styled from 'styled-components';

export const IconWrapper = styled.button<{ disabled: boolean | undefined }>`
  ${({ disabled }) => disabled && 'opacity: 0.3'};
  ${({ disabled }) => !disabled && 'cursor: pointer'};
  display   : flex;
  background: none;
  border    : none;

  :hover {
    ${({ disabled }) => !disabled && 'opacity: 0.9'};
  }

  :active {
    ${({ disabled }) => !disabled && 'opacity: 0.5'};
  }
`;