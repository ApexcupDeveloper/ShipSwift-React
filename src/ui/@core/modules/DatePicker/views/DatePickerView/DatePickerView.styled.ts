import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display       : flex;
  flex-direction: column;
`;

export const RelativeContainer = styled.div`
  position: relative;
  display: none;

  &[data-show='true'] {
    display: flex;
  }
`;

export const DateWrapper = styled.div`
  background: ${({ theme }) => theme.color.greyscale[1]};

  width       : 245px;
  margin      : 20px;
  margin-left : auto;
  margin-right: auto;
`;

export const DropdownContainer = styled.div`
  width        : 100%;

  &[data-dropdown='true'] {
    ${({ theme }) => theme.layer[6]};
    ${({ theme }) => theme.shadow.light};

    background: ${({ theme }) => theme.color.greyscale[1]};
    
    border-radius: 4px;
    position     : absolute;
    padding      : 5px;
    top          : 100%;
  }
`;