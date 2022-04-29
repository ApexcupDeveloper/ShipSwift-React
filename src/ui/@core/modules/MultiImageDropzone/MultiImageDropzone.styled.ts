/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { Nullable } from '../../../../utils';

export const BodyWrapper = styled.div`
  ${({ theme }) => theme.transition.default};

  background: ${({ theme }) => theme.color.greyscale[1]};
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  width: 100%;
  height: 100%;
`;


export const CardWrapper = styled.div`
  ${({ theme }) => theme.transition.default};

  background: ${({ theme }) => theme.color.greyscale[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;  
`;

export const DropzoneContainer = styled.div<{
  isAccept?: Nullable<boolean>;
  isReject?: Nullable<boolean>;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  ${({ isAccept, isReject, theme }) => (
    isAccept ? 
    `border: 1px solid ${theme.color.main[7]}; background: ${theme.color.greyscale[2]}; border-style: dashed;` : 
    isReject ?
    `border: 1px solid ${theme.color.additional[1]}; background: ${theme.color.greyscale[2]}; border-style: dashed;` : 
    ``
  )}

  input {
    width: 100%;
    height: 100%;
  }

  p {
    text-align: center;
    font-size: 20px;

    ${({ isAccept, isReject, theme }) => (
      isAccept ? 
      `color: ${theme.color.main[7]};` : 
      isReject ?
      `color: ${theme.color.additional[1]};` : 
      `color: ${theme.color.greyscale[10]};`
    )}
  }
`;

export const ClearButton = styled.div`
  position: absolute;
  top: 28px;
  right: 6px;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.color.greyscale[10]};

  &:hover {
    color: ${({ theme }) => theme.color.main[7]};
  }
`;