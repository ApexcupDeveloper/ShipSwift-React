import styled from 'styled-components';

export const BodyWrapper = styled.div`
  & > * {
    :not(:last-child, :last-child) {
      margin-bottom: 23px;
    }

    :last-child {
      margin-bottom: 0 !important;
      padding-bottom: 0 !important;
    } 
  }
`;

export const InputWrapper = styled.div`
  display: flex;

  & > * {
    width: 100px;
    margin-right: 16px;
  }
`;

export const DimensionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:last-child {
    margin-top: 16px;
  }
`;
