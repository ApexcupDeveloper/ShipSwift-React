import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display       : flex;
	flex-direction: column;
	width         : 100%;
	margin-bottom : 36px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  
  button {
    :first-child {
      min-width: 90px
    }
  }
`;

export const SpecialButtonWithContent = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 6px;
    margin-left: auto;
  }
`;

export const DragWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;