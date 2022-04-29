import { NavTabView } from '../../views/NavTabView';
import { UsersRouteView } from '../../views/UsersRouteView';
import { UsersView } from '../../views/UsersView';

import * as styled from './UsersPage.styled';

type Props = {};

export const UsersPage: React.FC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabView />
      <UsersView />
      <UsersRouteView />
    </styled.BodyWrapper>
  );
};
