import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  
  button:nth-child(1) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: 1px solid ${({ theme }) => theme.color.greyscale[8]};

    :disabled {
      border-right: 0;
    }
  }

  button:nth-child(2) {
    border-top-right-radius   : 4px;
    border-bottom-right-radius: 4px;
    border-left               : 0;

    &[data-left-active=false] {
      border-left: 1px solid ${({ theme }) => theme.color.greyscale[8]};
    }
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.greyscale[1]};
  border    : 1px solid ${({ theme }) => theme.color.background[8]};

  padding: 8px;
  cursor : pointer;
  display: flex;

  * {
    stroke: ${({ theme }) => theme.color.greyscale[8]};
  }

  :active {
    ${({ theme }) => theme.transition.fast};
    opacity: 0.5;
  }

  :disabled {
    ${({ theme }) => theme.transition.default};
    background: ${({ theme }) => theme.color.background[2]};
    border-color: ${({ theme }) => theme.color.greyscale[2]} !important;
    cursor: auto;

    * {
      stroke: ${({ theme }) => theme.color.greyscale[3]};
    }
  }
`;

export const Entires = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[10]};
  margin-left: 15px;
`;
