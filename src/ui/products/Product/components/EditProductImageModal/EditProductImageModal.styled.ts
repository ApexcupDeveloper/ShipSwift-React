import styled from 'styled-components';
import { Nullable } from '../../../../../utils';

export const BodyWrapper = styled.div`
	& > *:first-child {
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  touch-action: none;
  height: 100%;
  width: 100%;

  .dropzone {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
`;

export const DragWrapper = styled.div<{
  isDragging?: Nullable<boolean>;
}>`
  display: flex;
  justify-content: center;
  overflow: hidden;

  flex-wrap: wrap;

`;

export const DragItemWrapper = styled.div`
`;