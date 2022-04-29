import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  & > *:last-child {
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
${({ theme }) => theme.font.h[12]};
color: ${({ theme }) => theme.color.greyscale[12]};
`;
