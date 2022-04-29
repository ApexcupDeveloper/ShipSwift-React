import styled from 'styled-components';

export const BodyWrapper = styled.div<{ size: number; }>`
  background: ${({ theme }) => theme.color.background[4]};
  border    : 1px solid ${({ theme }) => theme.color.greyscale[3]};
  
  height: ${({ size }) => size}px;
  width : ${({ size }) => size}px;

  display        : flex;
  align-items    : center;
  justify-content: center;

  img {
    max-height: ${({ size }) => size}px;
    max-width : ${({ size }) => size}px;
  }
`;

export const SelectedImage = styled.img`
  display   : flex;
  object-fit: cover;
  padding   : 10px;
`;
