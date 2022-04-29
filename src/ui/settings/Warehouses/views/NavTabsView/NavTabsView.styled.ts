import styled from 'styled-components';

export const ButtonWrapper = styled.div`
	display: flex;
  justify-content: flex-end;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;
