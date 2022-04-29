import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Section = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;

	& > * {
		flex: 1;
	}

	.card-input {
		border: 1px solid ${({ theme }) => theme.color.greyscale[3]};
		background: ${({ theme }) => theme.color.greyscale[1]};
		align-items: center;
		border-radius: 5px;
		padding: 10px;
		min-height: 39px;

		:focus-within,
		:hover {
			border: 1px solid ${({ theme }) => theme.color.main[7]};
		}
	}
`;

export const SaveCard = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	color: ${({ theme }) => theme.color.greyscale[15]};
`;

export const ShipSwiftGuarantee = styled.div`
  display: flex;
	gap: 16px;
  padding: 0 16px;
	height: 44px;
  align-items: center;
	color: ${({ theme }) => theme.color.greyscale[15]};
	background-color: ${({ theme }) => theme.color.background[1]};
`;

export const InputWrapper = styled.div`
	padding-bottom: 20px;
	color: ${({ theme }) => theme.color.greyscale[10]};
	font: ${({ theme }) => theme.font.p};
`;

export const CardInputStyled = styled.div`
	border: 1px solid ${({ theme }) => theme.color.greyscale[3]};
	background: ${({ theme }) => theme.color.greyscale[1]};
	align-items: center;
	border-radius: 5px;
	padding: 10px;
	min-height: 39px;
`;
