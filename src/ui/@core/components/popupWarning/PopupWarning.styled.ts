import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex; 
  flex: 1;
  justify-content: flex-end;
  gap: 30px;

  & > *:first-child {
    flex: 1
  }
`;

export const RenewWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;