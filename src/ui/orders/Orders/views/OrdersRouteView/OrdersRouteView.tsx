import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';
import { OrderShipmentView } from '../../../Ship/views/OrderShipmentView';
import { ShipStep1View } from '../../../Ship/views/ShipStep1View';
import { ShipStep2View } from '../../../Ship/views/ShipStep2View';

import { AddOrderModal } from '../../components/AddOrderModal';
import { AddOrderForm } from '../AddOrderForm';
import { MultiShipView } from '../MultiShipView';

type Props = {};

export const OrdersRouteView: React.VFC<Props> = () => {
  const { push } = useHistory();
  const onClose = useCallback(() => push(AppRoutes.Orders.Index), [push]);

  return (
    <Switch>
      <Route path={AppRoutes.Orders.Add}>
        <AddOrderModal visible onClose={onClose}>
          <AddOrderForm visible />
        </AddOrderModal>
      </Route>
      <Route path={AppRoutes.Orders.MultiShip} component={MultiShipView} />
      <Route path={AppRoutes.Orders.Ship.Step1} component={ShipStep1View} />
      <Route path={AppRoutes.Orders.Ship.Step2} component={ShipStep2View} />
      <Route path={AppRoutes.Orders.View.Shipment} component={OrderShipmentView} />
    </Switch>
  );
};
