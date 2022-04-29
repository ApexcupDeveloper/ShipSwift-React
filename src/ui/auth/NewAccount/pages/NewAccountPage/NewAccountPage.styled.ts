import styled from 'styled-components';
import { BodyWrapper as ButtonWrapper } from '../../../../@core/modules/Button/MainButton/MainButton.styled';

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.greyscale[1]};
  padding   : 30px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
    max-width: 620px;
  }

  ${ButtonWrapper.toString()} {
    width: 120px;
    margin-top: 36px;
  }
`;

export const SplitWrapper = styled.div`
  display: flex;
  width  : 100%;

  & > * {
    flex: 1 1 50%;

    :not(:last-child) {
      margin-right: 30px;
    }
  }
`;
