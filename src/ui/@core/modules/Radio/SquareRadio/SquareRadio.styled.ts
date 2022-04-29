import styled from 'styled-components';

export const BodyWrapper = styled.div`
  ${({ theme }) => theme.transition.default};
  background: ${({ theme }) => theme.color.background[4]};
  
  display        : flex;
  justify-content: center;
  padding        : 4px 20px;
  min-width      : 68px;
  width          : fit-content;
  min-height     : 28px;
  border-radius  : 4px;
  cursor         : pointer;

  p {
    ${({ theme }) => theme.font.c_medium[5]};
    color: ${({ theme }) => theme.color.greyscale[18]};
    text-transform: uppercase;
  }

  &[data-active='true'] {
    background: ${({ theme }) => theme.color.main[7]};

    p {
      color: ${({ theme }) => theme.color.greyscale[1]};
    }
  }
`;
