import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const IconButtonWrapper = styled.div`
  display        : flex;
  justify-content: flex-end;
  align-items    : center;
  flex           : 0;

  svg {
    height: 24px;
    width: 24px;

    &.grey * {
      stroke: ${({ theme }) => theme.color.greyscale[9]};
    }

    &.green * {
      stroke: ${({ theme }) => theme.color.main[7]};
    }

    &.red * {
      stroke: #FF7171;
    }

    &.smaller-close {
      height: 18px;
      width: 18px;
    }
  }
  
  & > *:not(:last-child) {
    margin-right: 15px;
  }
`;