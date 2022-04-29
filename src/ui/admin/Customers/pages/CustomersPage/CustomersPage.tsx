import { CustomersContainer } from '../../containers/CustomersContainer';
import { CustomersRouteView } from '../../views/CustomersRouteView';
import { CustomersView } from '../../views/CustomersView';
import { NavTabsView } from '../../views/NavTabsView';

import * as styled from './CustomersPage.styled';

type Props = {};

export const CustomersPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabsView/>
      <CustomersContainer>
        <CustomersView />
      </CustomersContainer>
      <CustomersRouteView/>
    </styled.BodyWrapper>
  );
};
