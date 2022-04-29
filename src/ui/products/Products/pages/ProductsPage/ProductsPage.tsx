import { ProductsContainer } from '../../containers/ProductsContainer';
import { NavTabView } from '../../views/NavTabView';
import { ProductsListView } from '../../views/ProductsListView';
import { FilterContainer } from '../../containers/FilterContainer';

import * as styled from './ProductsPage.styled';
import { AddProductRouteView } from '../../views/AddProductRouteView';

type Props = {};

export const ProductsPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabView />
      <FilterContainer>
        <ProductsContainer>
          <ProductsListView />
        </ProductsContainer>
      </FilterContainer>
      <AddProductRouteView />
    </styled.BodyWrapper>
  );
};
