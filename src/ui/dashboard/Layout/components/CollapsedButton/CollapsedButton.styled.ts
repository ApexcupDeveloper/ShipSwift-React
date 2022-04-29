import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  position: relative;
  & > * {
    position: absolute;
    right: -33px;
  }
`;

export const IconWrapper = styled.div`
  margin: 3px;
`;
