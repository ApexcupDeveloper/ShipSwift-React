import styled from 'styled-components';

export const BodyWrapper = styled.div`
  ${({ theme }) => theme.transition.default};
	background: ${({ theme }) => theme.color.greyscale[1]};
	
  display       : flex;
  flex-direction: column;
  height        : 100%;
  min-width     : 255px;
  padding       : 20px 24px;
  border-radius : 4px;

  :hover {
    ${({ theme }) => theme.shadow.light};
  }
`;
  
export const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: 11px;
`;

export const Label = styled.p`
  ${({ theme }) => theme.font.h[11]};
  color: ${({ theme }) => theme.color.greyscale[18]};
`;

export const Description = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[8]};
`;

export const IconWrapper = styled.div`
  margin-right: 10px;

  svg {
    height: 20px;
    width: 20px;

    * {
      stroke: ${({ theme }) => theme.color.greyscale[8]};
    }
  }
`;