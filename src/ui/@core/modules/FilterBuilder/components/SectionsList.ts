import styled from 'styled-components';

export const SectionsList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;