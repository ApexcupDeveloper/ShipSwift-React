import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 680px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.color.greyscale[10]};
  font: ${({ theme }) => theme.font.p};
`;

export const InputGroupWrapper = styled.div`
  display: flex;
  & > *:first-child {
    padding-right: 25px;
  }
`;