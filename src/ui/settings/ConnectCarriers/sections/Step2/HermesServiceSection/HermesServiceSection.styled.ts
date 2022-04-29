import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 20px;
  }
`;

export const FooterWrapper = styled.div`
  display        : flex;
  justify-content: space-between;
  width          : 100%;
  align-items    : center;

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #6B6C7B;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 20px;
  }
`;