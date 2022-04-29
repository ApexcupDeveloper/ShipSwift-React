import { useMemo } from 'react';
import { useLocale } from '../../../../assets/locale';

import { Route } from 'react-router-dom';
import { RedirectSwitch } from '../../../app/components';
import { NavTabsView } from '../views/NavTabsView';

import { NavTabHistoryProvider } from '../../../@core/modules/Navigation/providers/NavTabHistoryProvider';
import { getPaths } from '../views/NavTabsView/NavTabsView.config';

type RouteProps = React.ComponentProps<typeof Route>;

export const SettingsRouteLayout: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { word } = useLocale();
  const paths = useMemo(() => getPaths(word), [word]);

  return (
    <NavTabHistoryProvider navPaths={paths}>
      <NavTabsView>
        <Route {...rest}>
          <RedirectSwitch>{children}</RedirectSwitch>
        </Route>
      </NavTabsView>
    </NavTabHistoryProvider>
  );
};
