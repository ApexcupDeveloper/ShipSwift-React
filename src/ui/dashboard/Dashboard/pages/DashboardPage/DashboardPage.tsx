import React, { useEffect } from 'react';
import { OrdersView } from '../../views/OrdersView';
import { ProductView } from '../../views/ProductView';
import { StatisticsView } from '../../views/StatisticsView';

import { OrdersContainer } from '../../containers/OrdersContainer';
import { ProductsContainer } from '../../containers/ProductsContainer';

import * as styled from './DashboardPage.styled';

type Props = {};

export const DashboardPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <StatisticsView />
      <OrdersContainer>
        <OrdersView />
      </OrdersContainer>
      <ProductsContainer>
        <ProductView />
      </ProductsContainer>
    </styled.BodyWrapper>
  );
};
