import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  & > * {
    height: 40px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  margin: 18px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 14px;
  }
`;
