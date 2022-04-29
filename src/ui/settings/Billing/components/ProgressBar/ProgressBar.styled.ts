import styled from 'styled-components';

export const BodyWrapper = styled.div``;

export const ProgressExternal = styled.div`
 ${({ theme }) => theme.shadow.medium};

  background-color: ${({ theme }) => theme.color.additional[2]};

  width: 118px;
  height: 4px;
  margin-top: 8px;
  border-radius: 2px;
`;

export const ProgressInternal = styled.div`
  background-color: ${({ theme }) => theme.color.main[7]};

  height: 100%;
  border-radius: inherit;
  max-width: 100%;
`;
