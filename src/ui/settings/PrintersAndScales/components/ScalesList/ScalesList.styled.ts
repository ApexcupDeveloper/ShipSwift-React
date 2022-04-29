import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const PrinterList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 14px;
  }
`;