import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 240px;
  right: -18px;
  bottom: -7px;
  transform: translateX(100%);
  flex-direction: column;
  margin: 3px 7px;
  border-radius: 6px;

  background: ${({ theme }) => theme.color.greyscale[1]};
  ${({ theme }) => theme.shadow.medium};
  ${({ theme }) => theme.layer[3]};

  &[data-visible='false'] {
    display: none;
  }
`;

export const RowWrapper = styled.div`
  height: 40px;
  display: flex;

  & > * {
    width: 100%;
    height: fit-content;
    align-self: center;
    ${({ theme }) => theme.font.c_regular[5]};
    color: ${({ theme }) => theme.color.greyscale[18]};

    &:hover {
      color: ${({ theme }) => theme.color.greyscale[16]};
    }
  }
`;
