import styled from 'styled-components';

export const BodyWrapper = styled.div``;

export const Authenticator = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  color: ${({ theme }) => theme.color.greyscale[18]};
`;

export const AlertWrapper = styled.div`
  margin-top: 10px;
  max-width: 716px;
`;