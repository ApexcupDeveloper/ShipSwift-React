import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display        : flex;
	justify-content: space-between;
	align-items    : center;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  ${({ theme }) => theme.font.p[6]};
  color: ${({ theme }) => theme.color.greyscale[14]};
  margin-left: 10px;
`;

export const SwitchWrapper = styled.div`
  display        : flex;
  width          : 50%;
  justify-content: flex-end;
`;