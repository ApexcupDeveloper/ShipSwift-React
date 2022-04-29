import { useCallback } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

import { AddMethodSection } from '../../sections/AddMethodSection';

type Props = {};

export const DeliveryMethodsControlView: React.VFC<Props> = () => {
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Settings.DeliveryMethods.Index), [push]);

  return (
    <Switch>
      <Route path={AppRoutes.Settings.DeliveryMethods.Add} children={<AddMethodSection onClose={onClose} />} />
    </Switch>
  );
};
