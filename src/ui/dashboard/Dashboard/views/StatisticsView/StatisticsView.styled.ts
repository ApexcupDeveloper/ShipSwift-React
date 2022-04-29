import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display        : flex;
  justify-content: space-between;
  width          : 100%;
  margin-bottom  : 20px;

  & > div:first-child {
    margin-right: 20px;
  }
`;
