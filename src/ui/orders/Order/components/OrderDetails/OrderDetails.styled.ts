import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
`;

export const LeftWrapper = styled.div`
	display       : flex;
	flex-direction: column;
	margin        : 20px 25px;
	width         : 100%;
  
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SummaryBlock = styled.div`
  background: ${({ theme }) => theme.color.background[2]};
  
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  padding        : 33px;
  border-radius  : 4px;
  margin         : 20px;

  & > * {
    min-width: 250px;
    max-width: 100%;
    margin   : 0;
  }
`;