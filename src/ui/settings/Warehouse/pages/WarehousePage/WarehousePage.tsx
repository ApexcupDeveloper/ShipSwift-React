import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';
import { useNavTabHistory } from '../../../../@core/modules/Navigation/hooks/useNavTabHistory';

import { OrdersContainer } from '../../containers/OrdersContainer';

import { AddressView } from '../../views/AddressView';
import { NavTabView } from '../../views/NavTabView';
import { OrdersView } from '../../views/OrdersView';

import * as styled from './WarehousePage.styled';

type Props = {};

export const WarehousePage: React.VFC<Props> = () => {
  const { updateLabel } = useNavTabHistory();
  const { state } = useLocation();
  const { user } = useAuth0();
  const { data } = state as any;
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => updateLabel(data.name), [updateLabel, data]);

  useEffect(() => {
    if (user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [user])

  return (
    <styled.BodyWrapper>
      <NavTabView />
      <AddressView data={data} />
      {isAdmin && (
        <OrdersContainer>
          <OrdersView />
        </OrdersContainer>
      )}
    </styled.BodyWrapper>
  );
};
