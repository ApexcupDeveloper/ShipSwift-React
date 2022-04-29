import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display        : flex;
	justify-content: space-between;
	align-items    : center;
`;

export const Price = styled.p`
  ${({ theme }) => theme.font.c_medium[5]};
  color: ${({ theme }) => theme.color.greyscale[18]};
`;