import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

import { AddUserSection } from '../../sections/AddUserSection';
import { EditUserSection } from '../../sections/EditUserSection';

type Props = {};

export const UsersRouteView: React.VFC<Props> = () => {
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Settings.Users.Index), [push]);

  return (
    <Switch>
      <Route path={AppRoutes.Settings.Users.Add}>
        <AddUserSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.Users.Edit}>
        <EditUserSection onClose={onClose} />
      </Route>
    </Switch>
  );
};
