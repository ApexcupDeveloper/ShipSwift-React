import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display        : flex;
	justify-content: space-between;
	align-items    : center;
`;

export const Title = styled.button`
  ${({ theme }) => theme.transition.default};
  ${({ theme }) => theme.font.c_medium[5]};
  
  color: ${({ theme }) => theme.color.greyscale[18]};

  border: none;
  background: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.main[7]};
  }
`;
