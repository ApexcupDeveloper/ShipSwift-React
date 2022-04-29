import styled from 'styled-components';

export const BoardWrapper = styled.div`
	display: flex;
  width: 100%;

  & > *:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color.greyscale[2]}
  }
`;

export const CardWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  width          : 100%;
  padding        : 13px 0;
  background     : ${({ theme }) => theme.color.greyscale[1]};
`;

export const Stats = styled.p`
  ${({ theme }) => theme.font.c_medium[1]};

  color: ${({ theme }) => theme.color.greyscale[16]};
  text-align: center;
`;

export const StatsName = styled.p`
  ${({ theme }) => theme.font.p[7]};
  
  color: ${({ theme }) => theme.color.greyscale[12]};
  text-align: center;
`;
