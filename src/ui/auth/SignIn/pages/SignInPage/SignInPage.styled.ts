import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;

  & > *:first-child {
    flex: 1;
    margin-right: 5px;
  }

  & > *:last-child {
    min-width: 20px !important;
  }
`;