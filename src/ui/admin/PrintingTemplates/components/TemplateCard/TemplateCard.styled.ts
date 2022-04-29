import styled from 'styled-components';

export const BodyWrapper = styled.div`
	background    : ${({ theme }) => theme.color.greyscale[1]};
	
  display       : flex;
  flex-direction: column;
  border-radius : 4px;
  padding       : 14px 25px 25px 25px;
  height        : 305px;
  width         : 255px;

  & > :first-child {
    margin-bottom: 6px;
  }

  & > :last-child {
    margin-top: 16px;
  }
`;

export const TitleContainer = styled.div`
  display        : flex;
  align-items    : center;
  justify-content: center;
  height         : 40px;
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.c_regular[4]};
  color: ${({ theme }) => theme.color.greyscale[14]};
  text-align: center;
`;

export const TemplateContainer = styled.div`
  border       : 1px solid ${({ theme }) => theme.color.greyscale[4]};

  position: relative;
  display : flex;

  :hover {
    & > :first-child {
      opacity: 1;
    }
  }

  & > :first-child {
    position: absolute;
    opacity : 0;
    right   : 6px;
    top     : 6px;
    width   : 36px;
    height  : 36px;
  }
`;

export const TemplateImage = styled.img`
  width: 205px;
  height: 168px;
  object-fit: cover;
`;

