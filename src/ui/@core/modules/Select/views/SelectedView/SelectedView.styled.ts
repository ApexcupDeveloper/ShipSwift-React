import styled from 'styled-components';

export const BodyWrapper = styled.div`
	
`;

export const SelectedValue = styled.input<{ font: 4 | 5 }>`
  ${({ theme, font }) => theme.font.c_regular[font ?? 4]};

  color : ${({ theme }) => theme.color.greyscale[18]};
  background: ${({ theme }) => theme.color.custom[1]};
  width : 100%;
  margin: 0 5px;
  border: none;

  &[disabled=true] {
    color: ${({ theme }) => theme.color.greyscale[8]};
  }
`;
