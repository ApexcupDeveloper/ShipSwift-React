import styled from 'styled-components';

export const BodyWrapper = styled.div`
`;

export const RightHeaderSection = styled.div`
  display    : flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 12px;
  }
`;
