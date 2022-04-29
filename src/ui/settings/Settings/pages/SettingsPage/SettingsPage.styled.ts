import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;
`;

export const SettingsList = styled.div`
  display              : grid;
  grid-template-columns: repeat(4, 1fr);
  gap                  : 30px;

  @media ${({ theme }) => theme.media.laptop_large} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.media.laptop_medium} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
