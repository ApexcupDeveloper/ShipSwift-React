import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display        : flex;
	align-items    : center;
	justify-content: space-between;
	height         : 40px;
	min-height     : 40px;
	cursor         : pointer;
	background     : ${({ theme }) => theme.color.greyscale[1]};

  &[data-selected=true], :hover {
    background: ${({ theme }) => theme.color.background[3]};
  }
`;

export const Label = styled.p`
	${({ theme }) => theme.font.c_regular[4]};
	color: ${({ theme }) => theme.color.greyscale[18]};
	margin-left: 15px;
`;

export const IconWrapper = styled.div`
	margin-right: 15px;

	svg {
		height: 16px;
		width: 16px;
	}
`;