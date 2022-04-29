import { useCallback, useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useHistory, useLocation } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { AddressSection } from '../../../../@core/modules/FormBuilder';
import { ProductsList } from '../../components/ProductsList';
import { ShipModal } from '../../components/ShipModal';
import * as styled from './ShipStep1View.styled';
import { OrderItem } from '../../../../../client/client';
import { addAddress } from '../../../../../utils';

type Props = {};

type StateProps = {
  orderData: OrderItem;
  nRoute: string;
  cRoute: string;
}

export const ShipStep1View: React.VFC<Props> = () => {
  const { push, goBack } = useHistory();
  const { state } = useLocation();
  const { orderData, nRoute, cRoute } = state as StateProps;

  if(!orderData) {
    goBack();
  }

  const onClose = useCallback(() => push(cRoute), [push]);

  return (
    <ShipModal orderNumber={`#${orderData.orderNumber}`} orderData={orderData} onClose={onClose} nextRoute={nRoute} closeRoute={cRoute}>
      <styled.BodyWrapper>
        <AddressSection.Field
          children={
            addAddress(orderData.customer ? orderData.customer.fullName : '') +
            addAddress(orderData.customer ? orderData.customer.company : '') +
            addAddress(orderData.customer ? orderData.customer.address1 : '') +
            addAddress(orderData.customer ? orderData.customer.address2 : '') +
            addAddress(orderData.customer ? orderData.customer.city : '') +
            addAddress(orderData.customer ? orderData.customer.country : '') +
            addAddress(orderData.customer ? orderData.customer.postcode : '') +
            orderData.customer?.country
          }
        />
        <ProductsList products={orderData.productsList} />
      </styled.BodyWrapper>
    </ShipModal>
  );
};
