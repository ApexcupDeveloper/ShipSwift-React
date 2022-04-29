import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;

  & > * {
    width: 100%;
  }
`;

export const HelpConnectContainer = styled.div`
  background: ${({ theme }) => theme.color.background[2]};

  display        : flex;
  flex-direction : column;
  justify-content: flex-start;
  align-items    : flex-start;
  border-radius  : 4px;
  margin-left    : 30px;
  padding        : 30px;
  max-width      : 310px;
  max-height     : 330px;

  p {
    white-space: pre-wrap;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color.greyscale[18]}
  }
`;

export const FooterWrapper = styled.div`
	display        : flex;
	justify-content: space-between;
	width          : 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
 
`;