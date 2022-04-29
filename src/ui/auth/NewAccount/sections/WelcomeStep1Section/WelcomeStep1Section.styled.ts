import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display: flex;
  flex-direction: column;
`;

export const StoresList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: calc(100% - 40px);
  bottom: 20px;
  align-items: flex-end;
  justify-content: space-between;
`;
