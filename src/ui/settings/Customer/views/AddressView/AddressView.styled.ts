import styled from 'styled-components';

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.greyscale[1]};

	display      : flex;
	padding      : 30px;
	margin-bottom: 30px;

  & > * {
    max-width: 200px;
  }

  & > *:not(:last-child) {
    margin-right: 150px;
  }
`;
