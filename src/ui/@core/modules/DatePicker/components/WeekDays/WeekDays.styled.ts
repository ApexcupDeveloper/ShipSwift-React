import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display      : flex;
	align-items  : center;
	margin-top   : 21px;
	margin-bottom: 10px;
`;

export const WeekDay = styled.p`
  ${({ theme }) => theme.font.c_medium[5]};
  color: ${({ theme }) => theme.color.greyscale[18]};
  text-align: center;
`;