import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;
`;

export const FormList = styled.div`
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[16]};
  margin-bottom: 16px;
`;
