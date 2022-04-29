import styled from 'styled-components';
import { Nullable } from '../../../../../utils';

export const BodyWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[16]};

  &:last-child {
    justify-self: flex-end;
  }
  & > *:last-child > *:first-child {
    margin-right: 20px;
  }
  & > *:first-child {
    width: 450px;
  }

  & > *:last-child {
    width: 450px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    justify-self: center;
    align-self: center;
  }
`;

export const AcceleratorCard = styled.div<{
  active: Nullable<boolean>;
}>`
  & > span:first-child {
    display: block;
    ${({ theme }) => theme.font.p[3]};
    color: ${({ theme, active }) => active ? theme.color.main[7] : theme.color.additional[1]};
    font-weight: 500;

    span {
      color: ${({ theme }) => theme.color.greyscale[18]};
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export const UntilCard = styled.div``;
