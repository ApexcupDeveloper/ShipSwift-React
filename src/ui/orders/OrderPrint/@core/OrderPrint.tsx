import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../../app/api';

import { PrintOrderStep1View } from '../views/PrintOrderStep1View';
import { PrintOrderStep2View } from '../views/PrintOrderStep2View';
import { PrintOrderStep3View } from '../views/PrintOrderStep3View';
import { PrintOrderStep4View } from '../views/PrintOrderStep4View';

export const OrderPrint: React.VFC = () => {
  return (
    <Switch>
      <Route path={AppRoutes.Orders.Order.Print.Step1} component={PrintOrderStep1View} />
      <Route path={AppRoutes.Orders.Order.Print.Step2} component={PrintOrderStep2View} />
      <Route path={AppRoutes.Orders.Order.Print.Step3} component={PrintOrderStep3View} />
      <Route path={AppRoutes.Orders.Order.Print.Step4} component={PrintOrderStep4View} />
    </Switch>
  );
};
