import styled from 'styled-components';

import { BodyWrapper as SmallAlert } from '../../../../@core/modules/Other/SmallAlert/SmallAlert.styled';
import { BodyWrapper as FormCaption } from '../../../../@core/modules/FormBuilder/components/FormSection/FormSection.styled';

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.greyscale[1]};
	
  display       : flex;
  flex-direction: column;
  padding       : 30px;

  ${SmallAlert.toString()} {
    max-width: 734px;
  }

  ${FormCaption.toString()}:not(:nth-child(4)) {
    > div {
      max-width: 300px;
    }
  }

  & > button {
    max-width: 120px;
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[16]};
`;

export const SubSection = styled.div`
  display       : flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;