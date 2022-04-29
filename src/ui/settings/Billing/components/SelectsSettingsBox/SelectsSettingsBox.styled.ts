import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: ${({theme}) => theme.color.greyscale[7]};

  & > * {
    flex: 1;
    display: flex;
    flex-direction: row;
  };

  & > * {
    gap: 16px;
  }
`;

export const SelectItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
`;
