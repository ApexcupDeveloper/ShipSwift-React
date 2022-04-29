import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;
`;

export const Caption = styled.p`
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[12]};
`;
