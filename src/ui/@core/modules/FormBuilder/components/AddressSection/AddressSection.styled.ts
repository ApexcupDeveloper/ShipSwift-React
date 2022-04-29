import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Label = styled.p`
  ${({ theme }) => theme.font.h[12]};
  color: ${({ theme }) => theme.color.greyscale[18]};
`;

export const Field = styled.p`
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[18]};
`;
