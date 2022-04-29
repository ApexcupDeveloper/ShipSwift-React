import styled from 'styled-components';

export const BodyWrapper = styled.div`
  & > div:nth-last-of-type(1) {
    padding-top: 30px;
  }

  & > * {
    padding: 5px 0;
  }
`;

export const AddButtonWrapper = styled.div`
  margin-top: 12px;
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
  color: ${({ theme }) => theme.color.greyscale[10]};
  font: ${({ theme }) => theme.font.p[6]};
`;
