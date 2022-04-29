import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FilterWrapper = styled.div`
  display: flex;
  max-width: 100%;

  & > *:first-child {
    margin-right: 23px;
  }
`;
