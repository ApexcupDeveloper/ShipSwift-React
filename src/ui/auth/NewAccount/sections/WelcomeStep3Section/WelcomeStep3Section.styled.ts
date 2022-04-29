import styled from 'styled-components';


export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreCircle = styled.div`
  position: relative;
  background: #505050;
  margin-right: 60px;

  :after {
    position  : absolute;
    display   : flex;
    content   : '';
    width     : 40px;
    border-top: 1px dashed ${({ theme }) => theme.color.greyscale[12]};
    right     : -50px;
  }
`;

export const ShipSwiftCircle = styled.div`
  background: ${({ theme }) => theme.color.background[4]};
`;

export const CircleWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;

  ${StoreCircle}, ${ShipSwiftCircle} {
    height         : 60px;
    width          : 60px;
    border-radius  : 60px;
    display        : flex;
    align-items    : center;
    justify-content: center;

    img {
      max-width: 42px;
      max-height: 42px;
      object-fit: cover;
    }
  }
`;

export const AboutData = styled.p`
  ${({ theme }) => theme.font.h[12]};
  color: ${({ theme }) => theme.color.greyscale[20]};
  margin-bottom: 11px;
`;

export const CheckList = styled.div`
  display       : flex;
  flex-direction: column;
  min-width     : 200px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CheckListWrapper = styled.div`
  display: flex;
`;