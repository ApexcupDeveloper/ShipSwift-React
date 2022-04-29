import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
`;

export const Field = styled.p`
  ${({ theme }) => theme.font.c_medium[5]};
  color: ${({ theme }) => theme.color.greyscale[18]};
  margin-right: 8px;

  ::after {
    content: ':';
  }
`;

export const Value = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[14]};
`;