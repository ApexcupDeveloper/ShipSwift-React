import styled from 'styled-components';

export const Tab = styled.button`
  ${({ theme }) => theme.font.c_medium[5]};
  ${({ theme }) => theme.transition.default};

  color      : ${({ theme }) => theme.color.greyscale[14]};
  padding    : 4px 22px;
  text-align : center;
  width      : 100%;
  border     : none;
  background : none;
  cursor     : pointer;
  white-space: nowrap;

  &[data-active=true] {
    background: ${({ theme }) => theme.color.greyscale[8]};
    color: #FFFFFF;
  }
`;

export const Group = styled.div`
  display    : flex;
  align-items: center;
`;
