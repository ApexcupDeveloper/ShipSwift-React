import styled from 'styled-components';

export const BodyWrapper = styled.div`

`;

export const ShopName = styled.p`
  ${({ theme }) => theme.font.c_regular[4]};
  color: ${({ theme }) => theme.color.greyscale[18]};
`;
