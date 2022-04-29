import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display        : flex;
	align-items    : center;
	justify-content: center;

  & > * {
    display: flex;
  }
`;

export const Label = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[10]};
  
  margin-left: 8px;
`;
