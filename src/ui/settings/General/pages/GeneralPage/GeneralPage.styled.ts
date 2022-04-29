import styled from 'styled-components';

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.greyscale[1]};

  display       : flex;
  flex-direction: column;
  padding       : 30px 30px 0px 30px;

  & > * {
    max-width: 620px;
  }

  & > *:not(:first-child, :last-child) {
    margin-bottom: 20px;
  }
`;
