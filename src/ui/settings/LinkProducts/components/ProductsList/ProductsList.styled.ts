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

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.color.greyscale[1]};
  border: 1px solid ${({ theme }) => theme.color.greyscale[2]};
  border-top: none;
  z-index: 1000;
  box-shadow:
    0px 8px 6px 1px rgba(0, 0, 0, 0.01),
    7px 0px 10px 5px rgba(0, 0, 0, 0.012),
    0px 20px 16px 0px rgba(0, 0, 0, 0.02)
  ;

`;

export const SearchRow = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  background: ${({ theme }) => theme.color.greyscale[1]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyscale[2]};
  padding: 10px 10px;
  cursor: pointer;
  
  img {
    width: 55px;
    height: 55px;
    object-fit: cover;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.color.greyscale[2]};
  }
`;