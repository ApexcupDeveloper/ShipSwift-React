import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;
  & > * {
    width: 342px;
  }
`;
