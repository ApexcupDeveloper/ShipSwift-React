import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: left;

    :last-child {
      color: ${({ theme }) => theme.color.greyscale[14]};
    }
  }
`;