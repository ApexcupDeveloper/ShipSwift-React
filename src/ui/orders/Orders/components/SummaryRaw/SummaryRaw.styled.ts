import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display        : flex;
  width          : 100%;
  justify-content: space-between;
  max-width      : 265px;

  p {
    ${({ theme }) => theme.font.p[6]};
    color: ${({ theme }) => theme.color.greyscale[12]};

    :not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &[data-bold='true'] p {
    ${({ theme }) => theme.font.c_medium[4]};
    color: ${({ theme }) => theme.color.greyscale[16]};

    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

