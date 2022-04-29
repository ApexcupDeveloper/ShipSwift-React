import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 14px;
  }
`;
