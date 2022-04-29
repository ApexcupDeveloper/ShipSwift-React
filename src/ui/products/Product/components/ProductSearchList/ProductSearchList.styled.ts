import styled from 'styled-components';
import { BodyWrapper as InputWrapper } from '../../../../@core/modules/Input/InputCustom/InputCustom.styled';

export const BodyWrapper = styled.div`
	width: 100%;

  button {
    flex: 0;
    min-width: 44px !important;
  }

  ${InputWrapper.toString()} {
    align-self: center;
    margin: 0 48px;
    min-width: 60px;
  }
`;


