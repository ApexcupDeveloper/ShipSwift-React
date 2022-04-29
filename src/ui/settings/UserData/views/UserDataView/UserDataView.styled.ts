import styled from 'styled-components';

export const BodyWrapper = styled.div``;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	& > * {
		display: flex;
		flex-direction: column;
		gap: 10px;
		background-color: ${({ theme }) => theme.color.greyscale[1]};
		padding: 20px 30px;
		border-bottom: 1px solid ${({ theme }) => theme.color.greyscale[2]};
	}
`;

export const Footer = styled.div`
	display: flex;
	gap: 25px;
	background-color: ${({ theme }) => theme.color.greyscale[1]};
	padding: 20px 30px;
	justify-content: flex-end;
`;

export const Title = styled.h3`
	${({ theme }) => theme.font.h[12]};
	color: ${({ theme }) => theme.color.greyscale[18]};
	margin: 0px;
`;
