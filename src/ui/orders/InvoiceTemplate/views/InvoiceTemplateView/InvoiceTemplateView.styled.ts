import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
	height: 792px;
	width: 612px;
	flex-direction: column;
	gap: 30px;
	padding: 30px;
	background-color: white;
	font-size: 12px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Space = styled.div`
  height: 100%;
`;

export const Footer = styled.div`
  color: ${({theme}) => theme.color.greyscale[15]};
  margin: 0px !important;
`;

export const Logo = styled.img`
	width: 184px;
	height: 35px;
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const SectionTitle = styled.div`font-weight: 500;`;

export const SectionContent = styled.div`
	display: flex;

	& > * {
		flex: 1;
	}
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;

	& > *:first-child {
		color: ${({ theme }) => theme.color.greyscale[10]};
	}
	& > *:last-child {
		font-weight: 500;
	}
`;
