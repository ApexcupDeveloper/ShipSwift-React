import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  
	svg {
    margin-right: 8px;
  }

  p {
    ${({ theme }) => theme.font.p[6]};
    color: ${({ theme }) => theme.color.greyscale[16]};
  }
`;
