import styled from 'styled-components';

export const BodyWrapper = styled.div`
	background    : ${({ theme }) => theme.color.greyscale[1]};
	display       : flex;
	flex-direction: column;
	width         : 350px !important;
  height        : fit-content;
	
  & > * {
    padding: 0 25px;
  }
`;

export const EditButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
`;