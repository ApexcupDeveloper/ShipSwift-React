import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display       : flex;
  flex-direction: column;
  width         : 100%;
`;

export const VerticalContainer = styled.div`
  display    : flex;
  width      : 100%;
  align-items: top;
  
  & > * {
    min-width: fit-content;
  }

  #nav-tab-portal {
    width: 100%;
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.h[9]};
  color: ${({ theme }) => theme.color.greyscale[18]};
  margin-bottom: 16px;
`;

export const Link = styled.a`
  font-ssize: 12px;
  color: ${({ theme }) => theme.color.greyscale[8]};
`;

export const PathContainer = styled.div`
  display      : flex;
  flex-wrap    : wrap;
  margin-bottom: 7px;
  width        : 100%;
  margin-top   : -28.5px;
  margin-left  : -2px;
  min-width    : 600px;

  a {
    ${({ theme }) => theme.transition.default};
    color: ${({ theme }) => theme.color.greyscale[8]};
  
    font-family: Roboto;
    font-style : normal;
    font-weight: normal;
    font-size  : 12px;
    line-height: 22px;
    padding    : 0 2px;
    white-space: nowrap;

    &:not(:last-child) {
      color: ${({ theme }) => theme.color.main[7]};
    }

    &:not(:first-child) {
      ::before {
        content: "/";
        margin-right: 4px;
        color: ${({ theme }) => theme.color.greyscale[8]};
      }
    }

    :hover {
      border-radius: 4px;
      ${({ theme }) => theme.shadow.medium};

      :active {
        ${({ theme }) => theme.shadow.light};
      }
    }
  }
`;
