import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  & > div:last-child {
    margin-bottom: 20px;
  }
`;
