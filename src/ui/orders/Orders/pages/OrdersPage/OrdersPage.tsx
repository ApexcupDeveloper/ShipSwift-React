import { NavTabView } from '../../views/NavTabView';
import { OrdersView } from '../../views/OrdersView';
import { OrdersRouteView } from '../../views/OrdersRouteView';

import { OrdersContainer } from '../../containers/OrdersContainer';
import { FilterContainer } from '../../containers/FilterContainer';

import * as styled from './OrdersPage.styled';

type Props = {};

export const OrdersPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabView />
      <FilterContainer>
        <OrdersContainer>
          <OrdersView />
        </OrdersContainer>
      </FilterContainer>
      <OrdersRouteView />
    </styled.BodyWrapper>
  );
};
