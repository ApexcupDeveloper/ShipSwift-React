import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../../app/api';
import { OrderShipmentView } from '../views/OrderShipmentView';

import { ShipStep1View } from '../views/ShipStep1View';
import { ShipStep2View } from '../views/ShipStep2View';

export const Ship: React.FC = () => {
  return (
    <Switch>
      <Route path={AppRoutes.Orders.Order.Ship.Step1} component={ShipStep1View} />
      <Route path={AppRoutes.Orders.Order.Ship.Step2} component={ShipStep2View} />
      <Route path={AppRoutes.Orders.Order.View.Shipment} component={OrderShipmentView} />
    </Switch>
  );
};
