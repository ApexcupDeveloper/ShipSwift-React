import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  
  & > *:first-child {
    min-width: 30px;
    margin-right: 30px;
  }
`;

export const ChildrenContainer = styled.div`
  padding-bottom: 20px;
`;