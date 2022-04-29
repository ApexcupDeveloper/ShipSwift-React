import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display       : flex;
  flex-direction: column;
  height        : 100vh;
  max-width     : 200px;
  background    : ${({ theme }) => theme.color.greyscale[1]};

  &[data-is-open=true] {
    width: 100%;
  }
`;

export const MenuWrapper = styled.div`
  display       : flex;
  flex-direction: column;
  margin        : 0 22px;
  height        : 100%;
  width         : calc(100% - 44px);
`;

export const Logo = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.greyscale[2]};
  
  padding      : 22px 0;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }

  img {
    height    : 25px;
    object-fit: contain;
  }
`;

export const List = styled.div`
  display       : flex;
  flex-direction: column;
  height        : 100%;

  & > *:not(:last-child) {
    margin-bottom: 26px;
  }
`;

export const UserContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.greyscale[2]};
  padding: 15px 0;
  margin-top: 20px;

  div {
    margin: 0 10px;
  }
`;

export const ListBottom = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 26px;
  }
`;