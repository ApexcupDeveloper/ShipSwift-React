import styled from 'styled-components';

export const BodyWrapper = styled.div`
`;

export const EmptyCardsList = styled.div`
  display: flex;
  height: 44px;
  gap: 14px;
  align-items: center;
  color: ${({theme}) => theme.color.greyscale[18]};
  font-size: 13px;
  padding: 0 18px;
	background     : ${({ theme }) => theme.color.background[2]};
`;

export const AddButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
`;