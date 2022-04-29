import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display       : flex;
  flex-direction: column;
  border-radius : 4px;
  border        : 1px solid ${({ theme }) => theme.color.background[6]};
  background    : ${({ theme }) => theme.color.custom[1]};
`;
export const Header = styled.div`
  display      : flex;
  height       : 67px;
  width        : 100%;
  align-items  : center;
  cursor       : pointer;

  &[data-show-splitter=true] {
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.color.background[6]};
  }

  & > *:last-child {
    margin-left: auto;
    margin-right: 30px;
  } 
`;

export const Content = styled.div`
  display       : none;
  flex-direction: column;
  padding       : 20px;
  background    : ${({ theme }) => theme.color.greyscale[1]};
  
  &[data-show=true] {
    display: flex;
  }
`;

export const CourierImage = styled.img`
  width       : 50px;
  max-height  : 40px;
  object-fit  : contain;
  margin-right: 15px;
  margin-left : 20px;
`;

export const CourierName = styled.p`
  ${({ theme }) => theme.font.c_medium[5]};
  color: ${({ theme }) => theme.color.greyscale[16]};
`;
