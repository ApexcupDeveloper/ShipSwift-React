import { useCallback } from 'react';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { EditCustomerModal } from '../../components/EditCustomerModal';
import { EditCustomerFormView } from '../EditCustomerFormView';

type Props = {
  orderNumber: string;
};

export const OrderRouteView: React.VFC<Props> = ({ orderNumber }) => {
  const { push } = useHistory();
  const { id, storeId } = useParams<{ id: string; storeId: string }>();
  const onClose = useCallback(() => push(AppRoutes.Orders.Order.Index.replace(':id', id).replace(':storeId', storeId)), [id, push]);

  return (
    <Switch>
      <Route path={AppRoutes.Orders.Order.Edit}>
        <EditCustomerModal orderNumber={orderNumber} visible onClose={onClose}>
          <EditCustomerFormView visible />
        </EditCustomerModal>
      </Route>
    </Switch>
  );
};
