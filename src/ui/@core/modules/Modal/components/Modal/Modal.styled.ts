import styled from 'styled-components';
import { Nullable } from '../../../../../../utils';

export const RelativeWrapper = styled.div`
	position: relative;
	visibility: hidden;

	&[data-visible=true] {
		visibility: visible;
	}
`;

export const BodyWrapper = styled.div`
	${({ theme }) => theme.transition.fast};

  top            : 0;
  right          : 0;
  position       : fixed;
  display        : flex;
  opacity        : 0;
  align-items    : center;
  justify-content: center;
  z-index        : 9999;
  margin-bottom  : 0px !important;

	&[data-visible=true] {
		opacity: 1;
	}

	&[data-pin=false] {
		left      : 0;
		bottom    : 0;
		background: rgba(56, 61, 61, 0.8);

		/* backdrop-filter: blur(3px); */
	}

	&[data-pin=true] {
		top: calc(100% + 10px);
		position: absolute;
	}
	&[data-pos=right] {
		right: -120px;
	}
	&[data-pos=left] {
		right: 0;
	}
`;

export const DialogWrapper = styled.div<{ height?: Nullable<number>; width?: Nullable<number>; }>` 
	${({ height }) => height ? `height: ${height}px` : ''};
	${({ width }) => width ? `width: ${width}px` : ''};

	${({ theme }) => theme.transition.fast};
  ${({ theme }) => theme.shadow.medium};
	
	background: ${({ theme }) => theme.color.greyscale[1]};
  
	position      : relative;
	display       : flex;
	flex-direction: column;
	min-width     : 200px;
	min-height    : 200px;
	border-radius : 6px;
	overflow-y    : hidden;
	overflow-x    : hidden;
	max-width	  : 90vw;
	max-height    : 90vh;

	// transform     : scale(0.97);

	// &[data-visible=true] {
	// 	transform: scale(1);
	// }
`;

export const Header = styled.div`
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  padding        : 12px 20px 14px 20px;
`;

export const CustomHeader = styled.div`
  display        : flex;
  position: relative;
`;

export const CustomCloseButton = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
`;

export const Content = styled.div<{
	noOverflow: Nullable<boolean>;
}>`
	display       : flex;
	flex-direction: column;
	padding       : 0 20px;
	${({ noOverflow }) => noOverflow ? null : `overflow-y    : auto; overflow-x    : auto;`}
	height        : 100%;

	&[data-bottom-space=true], :last-child {
		padding-bottom: 20px;
	}
`;

export const Footer = styled.div`
	display        : flex;
	min-height     : 76px;
	margin-top     : auto;
	justify-content: flex-end;
	padding        : 20px 30px;
	width          : 100%;

	&[data-hide-splitter='false'] {
		border-top: 1px solid ${({ theme }) => theme.color.greyscale[2]};
	}

	& > *:not(:last-child) {
		margin-right: 30px;
	}
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.h[9]};
  color: ${({ theme }) => theme.color.greyscale[18]};
`;

export const SecondaryButton = styled.button`
  ${({ theme }) => theme.transition.fast};
  ${({ theme }) => theme.font.c_regular[4]};
  color: ${({ theme }) => theme.color.greyscale[12]};

  :active {
    opacity: 0.5;
  }
`;
