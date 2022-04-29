import styled from 'styled-components';

export const BodyWrapper = styled.div``;

export const InputWrapper = styled.div`
  padding-bottom: 20px;
  color: ${({ theme }) => theme.color.greyscale[10]};
  font: ${({ theme }) => theme.font.p};
`;

export const CardInputStyled = styled.div`
  border       : 1px solid ${({ theme }) => theme.color.greyscale[3]};
  background: ${({ theme }) => theme.color.greyscale[1]};
  align-items: center;
  border-radius: 5px;
  padding: 10px;
`;
