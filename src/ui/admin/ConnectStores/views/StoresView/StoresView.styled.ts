import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  width: 100%;

  & > * > * > * {
    overflow-x: visible !important;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  max-width: 100%;
`;
