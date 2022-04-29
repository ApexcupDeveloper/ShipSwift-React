import styled from 'styled-components';

export const BodyWrapper = styled.button`
  ${({ theme }) => theme.transition.default};
  
  border: 1px solid ${({ theme }) => theme.color.background[4]};
  background: ${({ theme }) => theme.color.greyscale[1]};

  cursor         : pointer;
  border-radius  : 4px;
  display        : flex;
  justify-content: center;
  align-items    : center;
  width          : 90px;
  height         : 72px;
  margin         : 8px;

  :hover {
    border-color: ${({ theme }) => theme.color.main[7]};
  }
`;

export const Image = styled.img<{ width: number; height: number; }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;