import styled from 'styled-components';

export const BodyWrapper = styled.div`
  .ant-avatar {
    display        : flex;
    align-items    : center;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => theme.font.c_medium[6]};
  color  : #FFF;
  display: flex;
`;
