import styled from 'styled-components';

export const Title = styled.p`
  ${({ theme }) => theme.font.h[11]};
  color: ${({ theme }) => theme.color.greyscale[18]};
`;

export const TitleContainer = styled.div`
  display      : flex;
  align-items  : center;
  margin-bottom: 10px;

  svg {
    margin-left: 8px;
  }
`;

export const BodyWrapper = styled.div`
  position      : relative;
  display       : flex;
  flex-direction: column;
  padding-bottom: 25px !important;

  &[data-show-title='true'], &[data-top-padding='true'] {
    padding-top: 20px !important;
  }

  &[data-list=true]&[data-show-title=true] {
    & > *:not(:first-child, :last-child) {
      margin-bottom: 20px;
    }
  }

  &[data-list=true]&[data-show-title=false] {
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &[data-show-splitter=true] {
    border-top: 2px solid ${({ theme }) => theme.color.greyscale[2]};
  }

  & > & {
    padding: 0px !important;
  }

  * > ${TitleContainer.toString()} {
    margin-bottom: 8px;
    
    ${Title.toString()} {
      ${({ theme }) => theme.font.h[12]};
    }
  }
`;
