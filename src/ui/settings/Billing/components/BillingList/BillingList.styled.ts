import styled from 'styled-components';

export const BodyWrapper = styled.div`
`;

export const PaymentStatus = styled.span`
display: inline-block;
  background-color: ${({ theme }) => theme.color.greyscale[2]};
  padding: 4px 11px;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const Order = styled.span`
  color: ${({theme}) => theme.color.greyscale[20]} !important;
`;