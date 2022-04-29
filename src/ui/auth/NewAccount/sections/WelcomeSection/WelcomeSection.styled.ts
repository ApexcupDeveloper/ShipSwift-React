import styled from 'styled-components';
import { BodyWrapper as StepWrapper } from "../../../../@core/modules/Other/DisplayRound/DisplayRound.styled";


export const BodyWrapper = styled.div`
	${StepWrapper.toString()} {
    :not(:last-child) {
      margin-bottom: 6px;
    }
  }

  margin-bottom: 24px;
`;

export const Description = styled.p`
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[16]};
  margin-bottom: 16px;
`;
