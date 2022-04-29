import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';
import { AddProductForm } from '../AddProductForm';


type Props = {};

export const AddProductRouteView: React.VFC<Props> = () => {
  const { push } = useHistory();
  const onClose = useCallback(() => push(AppRoutes.Products.Index), [push]);

  return (
    <Switch>
      <Route exact path={AppRoutes.Products.Add}>
        <AddProductForm visible onClose={onClose} />
      </Route>
    </Switch>
  );
};
