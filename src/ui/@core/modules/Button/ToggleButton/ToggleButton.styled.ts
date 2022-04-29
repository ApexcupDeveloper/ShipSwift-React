import styled from 'styled-components';

export const BodyWrapper = styled.button`
  ${({ theme }) => theme.transition.default};
  background: ${({ theme }) => theme.color.background[5]};
  color: ${({ theme }) => theme.color.greyscale[18]};

	display    : flex;
	align-items: center;
	width      : 100%;
	min-width  : 100px;
	min-height : 28px;
	padding    : 4px 10px;
	border     : 0px;
	cursor     : pointer;

  :active {
    opacity: 0.7;
  }
`;

export const IconWrapper = styled.div`
  ${({ theme }) => theme.transition.slow};

  display    : flex;
  margin-left: auto;

  &[data-toggled=true] {
    transform: rotate(180deg);
  }

  svg {
    height: 16px;
    width: 16px;

    * {
      stroke: ${({ theme }) => theme.color.greyscale[11]};
    }
  }
`;