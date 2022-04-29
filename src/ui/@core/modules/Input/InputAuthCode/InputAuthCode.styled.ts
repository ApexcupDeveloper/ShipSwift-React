import styled from 'styled-components';

export const BodyWrapper = styled.div`
  ${({ theme }) => theme.font.h[12]};
	& input:not(:last-child) {
		margin-right: 10px;
    float: left;
	}
	& input {
		width: 50px;
		height: 50px;
    text-align: center;
		border-radius: 4px;
    ${({ theme }) => theme.transition.default};
		border: 1px solid ${({ theme }) => theme.color.greyscale[3]};
    background-color: ${({ theme }) => theme.color.greyscale[1]};
    font-weight: 600;
	}
  input:focus-within,
  input:hover {
    border: 1px solid ${({ theme }) => theme.color.main[7]};
  }
`;
