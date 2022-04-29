import styled from 'styled-components';

export const Description = styled.p`
	${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[16]};
`;
