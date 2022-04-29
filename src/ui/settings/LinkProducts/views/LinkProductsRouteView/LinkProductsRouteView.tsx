import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

import { SearchProductSection } from '../../sections/SearchProductSection';

type Props = {};

export const LinkProductsRouteView: React.VFC<Props> = () => {
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Settings.LinkProducts.Index), [push]);

  return (
    <Switch>
      <Route
        path={AppRoutes.Settings.LinkProducts.Search.Product}
        children={<SearchProductSection onClose={onClose} />}
      />
    </Switch>
  );
};
