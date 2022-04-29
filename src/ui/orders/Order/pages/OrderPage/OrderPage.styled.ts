import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftWrapper = styled.div`
  // display       : flex;
  flex-direction: column;
  margin-right  : 30px;
  width         : 100%;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }
`;
