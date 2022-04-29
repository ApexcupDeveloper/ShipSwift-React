import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';


type Props = {};

export const BatchRouteView: React.VFC<Props> = () => {
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Shipments.Batch.Index), [push]);

  return (
    <Switch>
      {/*<Route path={AppRoutes.Settings.Customers.Add}>
        <AddCustomerSection onClose={onClose} />
      </Route>*/}
    </Switch>
  );
};
