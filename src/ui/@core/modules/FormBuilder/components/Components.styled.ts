import styled from 'styled-components';
import { Nullable } from '../../../../../utils';

export const SplitInput = styled.div<{
  marginTop?: Nullable<number>;
}>`
  display: flex;
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : '')}

  & > * {
    flex: 1;
    
    :not(:last-child) {
      margin-right: 30px;
    }
  }
`;
