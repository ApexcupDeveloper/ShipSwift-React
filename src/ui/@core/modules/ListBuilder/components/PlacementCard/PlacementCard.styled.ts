import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display       : flex;
	flex-direction: column;
	width         : 100%;
	height        : fit-content;
	background    : ${({ theme }) => theme.color.greyscale[1]};

  & > div {
    display: flex;
  }
`;

export const Header = styled.div`
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  min-height     : 64px;
  padding        : 10px 25px 0 25px;
  flex-wrap      : wrap;

  & > * {
    margin-bottom: 10px;
  }
`;

export const Content = styled.div<{ showSplitter?: boolean; }>`
  ${({ showSplitter = false, theme }) => showSplitter ? `border-top: 1px solid ${theme.color.greyscale[2]};` : ''}

  flex-direction: column;
  /* overflow-x    : auto; */
`;

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.greyscale[2]};

  justify-content: space-between;
  align-items    : center;
  min-height     : 64px;
  padding        : 0 25px;
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.h[11]};
  color: ${({ theme }) => theme.color.greyscale[18]};
`;
