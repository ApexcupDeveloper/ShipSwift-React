import styled from 'styled-components';

export const ComponentRotate = styled.div<{ angle: number }>`
  transform: rotateZ(${({ angle }) => angle}deg);
`;
