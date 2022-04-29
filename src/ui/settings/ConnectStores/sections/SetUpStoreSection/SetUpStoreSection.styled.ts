import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;
`;

export const StoresList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  margin-bottom: 22px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.c_medium[4]};
  color: ${({ theme }) => theme.color.greyscale[16]};
`;

export const Description = styled.p`
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[14]};
`;
