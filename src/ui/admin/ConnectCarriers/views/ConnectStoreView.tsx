import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { AppRoutes } from '../../../app/api';

import { ConnectStoreStep1Section } from '../sections/ConnectStoreStep1Section';
import { ConnectStoreStep2Section } from '../sections/ConnectStoreStep2Section';
import { ConnectStoreStep3Section } from '../sections/ConnectStoreStep3Section';

export const ConnectStoreView: React.VFC = () => {
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Settings.ConnectCarriers.Index), [push]);

  return (
    <Switch>
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.Index}
        children={<ConnectStoreStep1Section onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.Index}
        children={<ConnectStoreStep2Section onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.Index}
        children={<ConnectStoreStep3Section onClose={onClose} />}
      />
    </Switch>
  );
};
