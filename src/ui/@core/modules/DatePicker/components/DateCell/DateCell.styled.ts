import styled from 'styled-components';

export const CellContainer = styled.div`
  display        : flex;
  width          : 35px;
  height         : 30px;
  justify-content: center;
  align-items    : center;

  * {
    user-select: none;
  }
`;

export const CellActiveContainer = styled.div`
  ${({ theme }) => theme.transition.fast};

  display        : flex;
  width          : 100%;
  height         : 100%;
  justify-content: center;
  align-items    : center;
  cursor         : pointer;
  border-radius  : 3px;

  :hover {
    background: ${({ theme }) => theme.color.main[2]};
  }

  :active {
    background: ${({ theme }) => theme.color.main[7]};
  }

  &[data-active=true] {
    background: ${({ theme }) => theme.color.main[7]} !important;
  }

  &[data-sub-active=true] {
    background: ${({ theme }) => theme.color.main[2]} !important;
  }

  &[data-select-mode='multi']:not(:active, :hover) {
    border-radius: 0;

    &[data-multi-select='start'] {
      border-radius: 3px 0 0 3px;
    }

    &[data-multi-select='end'] {
      border-radius: 0 3px 3px 0;
    }
  }
`;

export const Content = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[18]};
  text-align : center;

  &[data-active=true] {
    ${({ theme }) => theme.font.c_medium[5]};
    color: ${({ theme }) => theme.color.greyscale[1]};
  }
`;
