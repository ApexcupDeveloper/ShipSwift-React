import styled from 'styled-components';

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.color.main[7]};
  color: white;

  & > * {
    height: fit-content;
    width: fit-content;
  }
`;
