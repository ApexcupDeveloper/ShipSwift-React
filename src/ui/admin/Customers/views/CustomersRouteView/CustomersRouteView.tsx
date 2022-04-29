import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

import { AddCustomerSection } from '../../sections/AddCustomerSection';

type Props = {};

export const CustomersRouteView: React.VFC<Props> = () => {
	const { push } = useHistory();

	const onClose = useCallback(() => push(AppRoutes.Settings.Customers.Index), [push]);

  return (
    <Switch>
      <Route path={AppRoutes.Settings.Customers.Add}>
        <AddCustomerSection onClose={onClose} />
      </Route>
    </Switch>
  );
};
