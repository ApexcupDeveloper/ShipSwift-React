import styled from 'styled-components';

export const BodyWrapper = styled.div<{ flex: number }>`
  display      : flex;
  border-radius: 4px;
  width        : 100%;
  max-height   : fit-content;
  flex         : ${({ flex }) => flex};

  &[data-overflow=false] {
		overflow-x: hidden;
		overflow-y: hidden;
  }

  &[data-overflow=true] {
    > :only-child {
      border-radius: 4px;
    }

    * > div:not(:only-child) {
      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }

  & > * {
    width: 100%;
  }
`;
