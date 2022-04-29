import styled from 'styled-components';

import { BodyWrapper as InputWrapper } from "../../../../@core/modules/Input/InputCustom/InputCustom.styled";

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;

  ${InputWrapper} {
    max-width: 270px;
  }

  & > * {
    :first-child {
      margin-bottom: 10px;
    }

    :not(:first-child, :last-child) {
      margin-bottom: 20px;
    }
  }
`;
