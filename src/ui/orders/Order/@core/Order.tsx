import { OrderPage } from "../pages/OrderPage"
import { OrderPrint } from "../../OrderPrint";
import { Ship } from "../../Ship";

import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
`;

export const Order: React.VFC = () => {
  return <Container>
    <OrderPage/>
    <OrderPrint/>
    <Ship/>
  </Container>;
};
