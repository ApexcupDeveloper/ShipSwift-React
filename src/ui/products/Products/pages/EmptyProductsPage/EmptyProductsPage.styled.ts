import styled from 'styled-components';

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.greyscale[1]};

	display        : flex;
	flex-direction : column;
	align-items    : center;
	justify-content: center;
	height         : 300px;

  button {
    margin-top: 25px;
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.h[9]};
  color: ${({ theme }) => theme.color.greyscale[18]};
  margin-bottom: 22px;
`;
