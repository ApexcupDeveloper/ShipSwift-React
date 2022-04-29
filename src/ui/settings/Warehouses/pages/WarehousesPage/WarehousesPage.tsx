import { WarehousesContainer } from '../../containers/WarehousesContainer';
import { WarehousesRouteView } from '../../views/WarehousesRouteView';
import { WarehousesView } from '../../views/WarehousesView';
import { NavTabsView } from '../../views/NavTabsView';

import * as styled from './WarehousesPage.styled';

type Props = {};

export const WarehousesPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabsView/>
      <WarehousesContainer>
        <WarehousesView />
      </WarehousesContainer>
      <WarehousesRouteView/>
    </styled.BodyWrapper>
  );
};
