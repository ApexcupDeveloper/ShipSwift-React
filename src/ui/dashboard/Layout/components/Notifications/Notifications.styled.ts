import styled from 'styled-components';

export const BodyWrapper = styled.div`
  position  : relative;
  display   : flex;
  width     : auto;
  align-self: center;
  cursor    : pointer;

  &[data-is-open=true] {
    align-self: stretch;
    justify-content: space-between;
  }
`;

export const Counter = styled.p`
  ${({ theme }) => theme.font.c_medium[6]};
  color: ${({ theme }) => theme.color.greyscale[1]};

  height       : 20px;
  width        : 20px;
  text-align   : center;
  background   : #F47B7B;
  border-radius: 10px;

  &[data-is-open=false] {
    position: absolute;
    color   : #F47B7B;
    height  : 9px;
    width   : 9px;
    top     : -2px;
    left    : 10px;
    border  : 2px solid ${({ theme }) => theme.color.greyscale[1]};
  }
`;