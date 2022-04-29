import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* & > div:nth-last-of-type(1) {
    padding-top: 30px;
  } */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: ${({theme}) => theme.color.greyscale[18]};
`;

export const BillingWrapper = styled.div`
  width  : 100%;
  display: flex;

  & > span {
    font: ${({ theme }) => theme.font.p[6]};

    margin-right: 10px;
    font-weight : 500;
  }
`;

export const BillingAddress = styled.span`
  & * {
    color: ${({ theme }) => theme.color.greyscale[18]} !important;
    font-size: 12px !important;
    font-weight: 400 !important;
  }
`;
