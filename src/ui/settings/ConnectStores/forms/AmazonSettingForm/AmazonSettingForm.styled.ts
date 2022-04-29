import styled from 'styled-components';
import { Nullable } from '../../../../../utils';

export const BodyWrapper = styled.div<{
	isDark: Nullable<boolean>
}>`
	display       : flex;
	flex-direction: column;

	& div[id^='popover'] {
		background: ${({ theme }) => theme.color.greyscale[1]} !important;
		box-shadow: ${({ isDark }) => isDark ? `
			0.2px 0.2px 3.6px rgba(0, 0, 0, 0.178),
			0.5px 0.5px 10px rgba(0, 0, 0, 0.255),
			1.2px 1.2px 24.1px rgba(0, 0, 0, 0.332),
			4px 4px 80px rgba(0, 0, 0, 0.51)
		` : null};
	}

	& div:not([class]) {
		color: ${({ isDark }) => isDark ? 'white' : '#3D3E51' };
	}
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