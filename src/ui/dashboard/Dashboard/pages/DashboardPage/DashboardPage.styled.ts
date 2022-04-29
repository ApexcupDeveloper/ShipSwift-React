import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display       : flex;
  flex-direction: column;
  width         : 100%;

  & > :not(:first-child, :last-child) {
    margin-bottom: 15px;
  }
`;
