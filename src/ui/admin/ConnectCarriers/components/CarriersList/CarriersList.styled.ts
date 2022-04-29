import styled from 'styled-components';
import { BodyWrapper as ButtonWrapper } from "../../../../@core/modules/Button/MainButton/MainButton.styled";

export const BodyWrapper = styled.div`
  width: 100%;

  ${ButtonWrapper} {
    max-width: 120px;
  }
`;
