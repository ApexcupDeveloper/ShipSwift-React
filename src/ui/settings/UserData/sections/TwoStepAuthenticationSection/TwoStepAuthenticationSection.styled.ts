import { Link as LinkDefault } from 'react-router-dom';
import styled from 'styled-components';

export const BodyWrapper = styled.div`
	background-color: ${({ theme }) => theme.color.background[2]};
	display: flex;
	flex-direction: column;
	gap: 20px;
	& > :last-child {
		border: none !important;
	}
	& > :first-child {
		padding-top: 10px;
	}
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.color.greyscale[2]};
	padding: 20px 0;
	color: ${({ theme }) => theme.color.greyscale[18]};
	background-color: ${({ theme }) => theme.color.greyscale[1]};
`;

export const Link = styled(LinkDefault)`
	display: contents;
	color: ${({ theme }) => theme.color.main[6]};
	&:hover {
		color: ${({ theme }) => theme.color.main[8]};
	}
`;

export const QrCodeWrapper = styled.div`
	width: 128px;
	height: 128px;
`;
