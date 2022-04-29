import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display    : flex;
  align-items: center;
  width      : 100%;
`;

export const TagList = styled.div`
  display  : flex;
  flex-wrap: wrap;
  width    : 100%;
  margin   : -4px;
`;

export const TagContainer = styled.div`
  ${({ theme }) => theme.layer[2]};
  background     : ${({ theme }) => theme.color.background[5]};
  
  display        : flex;
  align-items    : center;
  justify-content: space-between;
  min-height     : 28px;
  margin         : 4px;
  padding        : 4px 8px;
  border-radius  : 3px;

  svg {
    margin-top: -1px;
  }
`;

export const Label = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color      : ${({ theme }) => theme.color.greyscale[20]};
  white-space: nowrap;

  &[data-disabled=false] {
    margin-right: 8px;
  }
`;

export const ClearIcon = styled.div`
  margin-left: 9px;
`;