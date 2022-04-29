import { Route, Switch, useHistory } from 'react-router-dom';
import { useAuth0 } from '../../../../business/auth/hooks';
import { config } from '../../../../private';
import { updateMetadata } from '../../../../utils';
import { AppRoutes } from '../../../app/api';
import { addErrorToast } from '../../../toast';
import { AddBigCommerceSection } from '../sections/AddBigCommerceSection';
import { AddEBaySection } from '../sections/AddEBaySection';
import { AddEtsySection } from '../sections/AddEtsySection';
import { AddMagento2Section } from '../sections/AddMagento2Section';
import { AddShopifySection } from '../sections/AddShopifySection';
import { AddSquareSpaceSection } from '../sections/AddSquareSpaceSection';
import { AddWooCommerceSection } from '../sections/AddWooCommerceSection';

import { WelcomeSection } from '../sections/WelcomeSection';
import { WelcomeStep1Section } from '../sections/WelcomeStep1Section';
import { WelcomeStep2Section } from '../sections/WelcomeStep2Section';
import { WelcomeStep3Section } from '../sections/WelcomeStep3Section';

export const WelcomeView: React.VFC = () => {
  const { push } = useHistory();
  const { user, setUser } = useAuth0();
  const userId = user?.sub ? user.sub : '';

  // const onClose = useCallback(() => push(AppRoutes.Dashboard.Index), [push]);
  const onClose = () => {
    updateMetadata({ user_metadata: { isSignUpFinished: 'true' }}, userId)
      .then(async (res) => {
        let key = config.auth0.namespace + '/user_metadata';
        //Update user data
        setUser({
          ...user,
          [key]: res.data.user_metadata
        });
        push(AppRoutes.Dashboard.Index)
      })
      .catch((err) => {
        addErrorToast(err.message);
      });
  }

  return (
    <Switch>
      <Route path={AppRoutes.Auth.Welcome.Step1.WooCommerce}>
        <AddWooCommerceSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Auth.Welcome.Step1.SquareSpace}>
        <AddSquareSpaceSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Auth.Welcome.Step1.EBay}>
        <AddEBaySection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Auth.Welcome.Step1.Etsy}>
        <AddEtsySection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Auth.Welcome.Step1.BigCommerce}>
        <AddBigCommerceSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Auth.Welcome.Step1.Magento2}>
        <AddMagento2Section onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Auth.Welcome.Step1.Shopify}>
        <AddShopifySection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Auth.Welcome.Step3} children={<WelcomeStep3Section onClose={onClose} />} />
      <Route path={AppRoutes.Auth.Welcome.Step2} children={<WelcomeStep2Section onClose={onClose} />} />
      <Route path={AppRoutes.Auth.Welcome.Step1.Index} children={<WelcomeStep1Section onClose={onClose} />} />
      <Route path={AppRoutes.Auth.Welcome.Index} children={<WelcomeSection onClose={onClose} />} />
    </Switch>
  );
};
