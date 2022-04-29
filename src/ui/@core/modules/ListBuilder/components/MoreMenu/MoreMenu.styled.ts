import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display        : flex;
  justify-content: flex-end;
  flex           : 0;

  svg {
    * {
      stroke: ${({ theme }) => theme.color.background[8]};
    }

    &.active * {
      stroke: ${({ theme }) => theme.color.main[6]};
    }
  }

  :hover {
    svg * {
      stroke: ${({ theme }) => theme.color.main[6]};
    }
  }
`;

export const MoreMenuButton = styled.button`
  ${({ theme }) => theme.font.c_regular[4]};
  background: ${({ theme }) => theme.color.greyscale[1]};
  color: ${({ theme }) => theme.color.greyscale[18]};
  
  display   : flex;
  padding   : 10px 10px;
  width     : 178px;
  min-height: 40px;

  :hover {
    background: ${({ theme }) => theme.color.background[3]};
  }
`;
