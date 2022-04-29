import styled from 'styled-components';

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.greyscale[1]};

	padding      : 30px;
	margin-bottom: 30px;
  align-items: flex-end;

  & > *:not(:first-child, :last-child) {
    margin-bottom: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex: direction: column;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  & > * {
    margin-bottom: 10px;
  }
`;

export const SectionTitle = styled.p`
  ${({ theme }) => theme.font.h[11]};
  color: ${({ theme }) => theme.color.greyscale[18]};
  height: 30px;
`;