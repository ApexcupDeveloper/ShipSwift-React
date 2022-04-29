import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;
