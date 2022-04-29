import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  align-items: center;
  margin-top: 80px !important;
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.c_medium[4]};
  color: ${({ theme }) => theme.color.greyscale[18]};
  margin-right: 8px;
`;

export const Size = styled.p`
  ${({ theme }) => theme.font.p[5]};
  color: ${({ theme }) => theme.color.greyscale[14]};
`;
