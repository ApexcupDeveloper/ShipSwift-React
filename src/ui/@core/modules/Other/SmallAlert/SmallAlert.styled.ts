import styled from 'styled-components';

export const BodyWrapper = styled.div<{ background: string; iconColor: string }>`
  background   : ${({ background }) => background};
  display      : flex;
  border-radius: 4px;
  padding      : 14px;
  align-items  : flex-start;

  svg {
    min-width   : 20px;
    min-height  : 20px;
    margin-right: 12px !important;
    
    & > #to-fill {
      fill: ${({ iconColor }) => iconColor};
    }
  }
`;

export const TextWrapper = styled.div`
  display  : flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.color.greyscale[18]};

  & > * {
    :not(:last-child) {
      margin-right: 4px;
    }
  }

  * {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  p {
    display: inline-block;
    white-space: pre-line;
    color: ${({ theme }) => theme.color.greyscale[18]};
  }
`;
