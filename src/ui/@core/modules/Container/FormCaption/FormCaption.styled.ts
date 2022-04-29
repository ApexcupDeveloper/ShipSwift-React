import styled from 'styled-components';

export const Error = styled.div`
  &[data-show='true'] {
    & > div {
      border: 1px solid ${({ theme }) => theme.color.additional[1]} !important;
      border-radius: 4px;
    }
  }
`;
