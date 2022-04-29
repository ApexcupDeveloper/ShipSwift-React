import styled from 'styled-components';

export const BodyWrapper = styled.div`
	&[data-type='horizontal'] {
		width: 100%;
		border-top: 1px solid ${({ theme }) => theme.color.greyscale[3]};
	}
	&[data-type='vertical'] {
		height: 20px;
		border-left: 1px solid ${({ theme }) => theme.color.greyscale[10]};
	}
`;
