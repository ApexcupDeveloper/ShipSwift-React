import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const IconButtonWrapper = styled.div`
  display        : flex;
  justify-content: flex-end;
  flex           : 0;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  svg {
    height: 16px;
    width: 16px;

    * {
      stroke: ${({ theme }) => theme.color.background[8]};
    }
  }
`;