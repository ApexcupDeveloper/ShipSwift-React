import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
`;

export const ComponentContainer = styled.div`
  display   : flex;
  max-height: 100vh;
  width     : 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background: ${({ theme }) => theme.color.background[1]};
`;

export const Component = styled.div`
  display   : flex;
  padding   : 40px 40px 0 40px;
  overflow-x: auto;
  overflow-y: auto;
  width     : 100%;

  & > div > :last-child > div:last-child {
    margin-bottom: 40px;
  }
`;
