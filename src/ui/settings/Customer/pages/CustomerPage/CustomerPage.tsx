import { useEffect } from 'react';
import { useNavTabHistory } from '../../../../@core/modules/Navigation/hooks/useNavTabHistory';

import { OrdersContainer } from '../../containers/OrdersContainer';

import { AddressView } from '../../views/AddressView';
import { NavTabView } from '../../views/NavTabView';
import { OrdersView } from '../../views/OrdersView';

import * as styled from './CustomerPage.styled';

type Props = {};

export const CustomerPage: React.VFC<Props> = () => {
	const { updateLabel } = useNavTabHistory();

	useEffect(() => updateLabel('Darrell Steward'), [updateLabel]);

  return (
    <styled.BodyWrapper>
			<NavTabView/>
			<AddressView/>
      <OrdersContainer>
        <OrdersView />
      </OrdersContainer>
    </styled.BodyWrapper>
  );
};
