import styled from 'styled-components';

export const SupportWrapper = styled.div`
  cursor: pointer;

  &[data-is-open=false] {
    justify-content: center;
  }
`;


export const BodyWrapper = styled.div`
  display: flex;

  &[data-is-open=false] {
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  
  svg {
    height: 20px;
    width: 20px;
  }

  &[data-active=true] {
    * {
      stroke: ${({ theme }) => theme.color.main[7]};
      ${({ theme }) => theme.font.c_medium[5]};
    }

    .admin-icon {
      * {
        fill: ${({ theme }) => theme.color.main[7]};
      }
    }
  }

  &[data-is-open=true] {
    margin-right: 10px;
  }
`;

export const Label = styled.p<{}>`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[16]};

  &[data-active=true] {
    ${({ theme }) => theme.font.c_medium[5]};
  }
`;
