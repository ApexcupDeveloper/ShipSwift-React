import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

import { AddWarehouseSection } from '../../sections/AddWarehouseSection';

type Props = {};

export const WarehousesRouteView: React.VFC<Props> = () => {
	const { push } = useHistory();

	const onClose = useCallback(() => push(AppRoutes.Settings.Warehouses.Index), [push]);

  return (
    <Switch>
      <Route path={AppRoutes.Settings.Warehouses.Add}>
        <AddWarehouseSection onClose={onClose} />
      </Route>
    </Switch>
  );
};
