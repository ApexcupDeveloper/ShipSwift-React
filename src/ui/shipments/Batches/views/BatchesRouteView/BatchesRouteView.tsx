import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

// import { AddCustomerSection } from '../../sections/';

type Props = {};

export const BatchesRouteView: React.VFC<Props> = () => {
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Shipments.Batches), [push]);

  return (
    <Switch>
      {/*<Route path={AppRoutes.Settings.Customers.Add}>
        <AddCustomerSection onClose={onClose} />
      </Route>*/}
    </Switch>
  );
};
