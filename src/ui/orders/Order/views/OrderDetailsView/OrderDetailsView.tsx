import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';
import { OrderValue } from '../../../../../proto/order_manager_pb';
import { getCompanyId } from '../../../../../utils';
import { cacheService } from '../../../../../utils/cache-service';

import { PlacementCard } from '../../../../@core/modules/ListBuilder';
import { addErrorToast } from '../../../../toast';
import { OrderDetails } from '../../components/OrderDetails';

import * as styled from './OrderDetailsView.styled';

type Props = {
  orderValue: OrderValue.AsObject
};

type ParamsProps = {
  id: string;
  storeId: string;
}

export const OrderDetailsView: React.FC<Props> = ({ orderValue }) => {
  let dataSubscription: any;
  const { word } = useLocale();
  const { user } = useAuth0();
  const params: ParamsProps = useParams();
  const [type, setType] = useState('');
  const companyId = getCompanyId(user);
  const getClient = useGrpcClient();

  useEffect(() => {
    if(companyId && params.storeId) {
      getClient()
      .then(client => {
        client.getStoreType({
          companyId: companyId,
          storeId: params.storeId
        })
        .then((res: any) => {
          setType(res.type);
        })
        .catch(err => {
          addErrorToast(err.message);
        })
      })
    }
  }, [params.storeId, companyId]);

  return (
    <PlacementCard>
      <PlacementCard.Header>
        <PlacementCard.Title children={word('order.details')} />
        <styled.ShopName children={type} />
      </PlacementCard.Header>
      <PlacementCard.Content showSplitter >
        <OrderDetails orderValue={orderValue} />
      </PlacementCard.Content>
    </PlacementCard>
  );
};
