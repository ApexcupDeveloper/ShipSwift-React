import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[16]};

  &:last-child {
    justify-self: flex-end;
  }
  & > *:last-child > *:first-child {
    margin-right: 20px;
  }
  & > *:first-child {
    width: 800px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    justify-self: center;
    align-self: center;
  }
`;

export const AcceleratorCard = styled.div`
  & > span:first-child {
    display: block;
    ${({ theme }) => theme.font.p[3]};
    color: ${({ theme }) => theme.color.greyscale[19]};
    font-weight: 500;
  }
`;

export const UntilCard = styled.div``;
