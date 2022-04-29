import styled from 'styled-components';

export const Terms = styled.div`
  display: flex;
`;

export const CheckboxWrapper = styled.div`
  height      : fit-content;
  margin-top  : 2px;
  margin-right: 12px;
`;

export const TermsLink = styled.div`
  * {
    ${({ theme }) => theme.font.c_regular[5]};
  }

  p {
    color: ${({ theme }) => theme.color.greyscale[14]};
  }

  a {
    ${({ theme }) => theme.font.c_regular[5]};
    color: ${({ theme }) => theme.color.main[8]};
  }
`;
