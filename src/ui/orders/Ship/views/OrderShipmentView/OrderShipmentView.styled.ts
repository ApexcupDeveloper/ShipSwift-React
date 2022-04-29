import styled from 'styled-components';

export const BodyWrapper = styled.div`
	& > div:not(:last-child) {
		margin-bottom: 30px;
	}
`;

export const Caption = styled.p`
	${({ theme }) => theme.font.p[6]};
	margin-bottom: 12px;
	color: ${({ theme }) => theme.color.greyscale[18]};
`;

export const IconWrapper = styled.div`
	width: 100%;
	display: flex;
  	justify-content: center;

	& > *:not(:last-child) {
		margin-right: 10px;
	}

	& > * {
		float: right;
	}
	
	button:hover svg {
		stroke: ${({ theme }) => theme.color.main[7]} !important;
	}
`;

export const TrackingNumber = styled.div`
  color: ${({ theme }) => theme.color.main[5]} !important;
`;
