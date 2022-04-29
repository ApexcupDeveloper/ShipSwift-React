import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display    : flex;
  align-items: center;
  background : ${({ theme }) => theme.color.background[3]};
  padding    : 17px;
  min-height : 78px;

  svg {
    height: 24px;
    width: 24px;

    margin-right: 23px;
    margin-left: 8px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.c_medium[4]};
  color: ${({ theme }) => theme.color.greyscale[16]};
`;

export const Description = styled.p`
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[14]};
`;

export const Step = styled.p`
  ${({ theme }) => theme.font.c_medium[5]};
  color: ${({ theme }) => theme.color.greyscale[8]};
  margin-left: auto;
`;
