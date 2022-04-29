import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display       : flex;
	flex-direction: column;
`;

export const ConditionContainer = styled.div`
  display        : flex;
  align-items    : center;
  justify-content: space-between;
`;

export const ConditionSection = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RulesContainer = styled.div`
  display       : flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;