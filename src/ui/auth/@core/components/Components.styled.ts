import styled from "styled-components";

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.background[2]};

  display       : flex;
  flex-direction: column;
  align-items   : center;
  min-height    : 100vh;

  a {
    ${({ theme }) => theme.font.c_regular[4]};
    color: ${({ theme }) => theme.color.greyscale[10]};

    display    : flex;
    flex-wrap  : nowrap;
    width      : auto;
    align-items: center;

    svg {
      height      : 16px;
      width       : 16px;
      margin-right: 3px;
    }
  }
`;

export const MainBlock = styled.div<{ width: number, height: number }>`
  background: ${({ theme }) => theme.color.greyscale[1]};
  
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  width          : ${({ width }) => width}px;
  height         : ${({ height }) => height}px;
  border-radius  : 10px;
  padding        : 60px 0;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  & > * {
    width: 290px;
  }
`;

export const Name = styled.p`
  ${({ theme }) => theme.font.h[8]};

  text-align: center;
  margin-bottom: 24px !important;
  color: ${({ theme }) => theme.color.greyscale[18]};
`;

export const Logo = styled.img`
  width        : 184px;
  margin-top   : 10vh;
  margin-bottom: 5vh;
`;

export const AdditionText = styled.div`
  margin-top: 30px;

  p {
    ${({ theme }) => theme.font.c_regular[4]};
    color: ${({ theme }) => theme.color.main[8]};

    margin-left: 5px;
  }
`;
