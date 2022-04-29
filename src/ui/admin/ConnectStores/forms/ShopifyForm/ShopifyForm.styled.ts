import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display       : flex;
	flex-direction: column;
`;

export const AuthorizeWrapper = styled.div`
	display: flex;
	flex-direction: column;

	& > *:not(:last-child) {
		margin-bottom: 16px;
	}

	& > :last-child {
		width: 161px;
	}
`;

export const ColorPickerWrapper = styled.div`
	display: flex;
`;