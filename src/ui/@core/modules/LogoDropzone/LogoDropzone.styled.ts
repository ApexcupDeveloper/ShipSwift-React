/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { TrashIcon16 } from '../../../../assets/icons';
import { Nullable } from '../../../../utils';

export const BodyWrapper = styled.div<{
  height?: Nullable<number>;
  width?: Nullable<number>;
}>`
  ${({ theme }) => theme.transition.default};
  ${({ width }) => (width ? `min-width: ${width}px;` : '')}

  background: ${({ theme }) => theme.color.greyscale[1]};
  display: flex;
  flex-direction: column;
  min-height: ${({ height }) => height}px;
  margin: 0 15px;
`;


export const CardWrapper = styled.div`
  ${({ theme }) => theme.transition.default};

  background: ${({ theme }) => theme.color.greyscale[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 94px;
  width: 94px;
`;

export const DropzoneContainer = styled.div<{
  isAccept?: Nullable<boolean>;
  isReject?: Nullable<boolean>;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: relative;

  .button-image {
    display: none;
  }

  ${({ isAccept, isReject, theme }) => (
    isAccept ? 
    `border: 1px solid ${theme.color.main[7]};` : 
    isReject ?
    `border: 1px solid ${theme.color.additional[1]};` : 
    `border: 1px solid ${theme.color.greyscale[3]};`
  )}

  border-style: dashed;
  cursor: pointer;
  transition: border .2s ease-in-out;

  :hover {
    border: 1px solid ${({ theme }) => theme.color.main[7]};
    border-style: dashed;

    .button-image {
      display: flex;
    }
  }

  input {
    width: 100%;
    height: 100%;
  }

  p {
    text-align: center;
    font-size: 12px;
    transition: color .2s ease-in-out;

    ${({ isAccept, isReject, theme }) => (
      isAccept ? 
      `color: ${theme.color.main[7]};` : 
      isReject ?
      `color: ${theme.color.additional[1]};` : 
      `color: ${theme.color.greyscale[10]};`
    )}
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
`;

export const TrashIcon = styled(TrashIcon16)<{ active?: boolean }>`
    ${({ theme, active }) => active? `stroke: ${theme.color.main[7]}`: ''};

    &:hover {
      stroke: ${({ theme }) => theme.color.main[7]};
    }
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  .progress-bar {
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
  touch-action: none;
  pointer-events:none;
`;

export const ProductImageWrapper = styled.div`
  width: 92px;
  height: 92px;
  padding: 10px;
  border-radius: 5px;
  touch-action: none;
`;

export const ButtonImage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 4px 4px 0px 0px;
  background: #4c4a4a99;
`;