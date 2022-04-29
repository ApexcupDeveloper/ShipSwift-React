import styled from 'styled-components';

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.background[2]};

  display      : flex;
  height       : 68px;
  align-items  : center;
  margin-top   : 30px;
  border-radius: 4px;

  svg {
    margin-top: -24px;
    margin-left: 14px;
    margin-right: 12px;
  }
`;
