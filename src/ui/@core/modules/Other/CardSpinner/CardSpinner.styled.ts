import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  display        : flex;
  align-items    : center;
  justify-content: center;
  background: ${({ theme }) => theme.color.greyscale[1]};
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
`;
