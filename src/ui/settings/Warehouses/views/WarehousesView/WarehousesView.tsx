import { InputSearch } from '../../../../@core/modules/Input';
import { PageControl, PerPage, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { WarehousesList } from '../../components/WarehousesList';
import { TooltipsList } from '../../../../@core/modules/Tooltip';

import * as styled from './WarehousesView.styled';
import { useEffect, useState } from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addErrorToast } from '../../../../toast';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { useLocation } from 'react-router';

type Props = {};

export const WarehousesView: React.VFC<Props> = () => {
  const { user } = useAuth0();
  const { pathname }  = useLocation();
  const companyId = getCompanyId(user);
  const getClient = useGrpcClient();

  const [handleChanged, setHandleChanged] = useState(false);
  const [warehouses, setWarehouses] = useState<CompanyInfo.AsObject[]>([]);

  useEffect(() => {
    if (companyId) {
      getClient()
        .then(client => {
          client
            .listWarehouses({ companyId })
            .then((res: any) => {
              setWarehouses(res.warehousesList);
            })
            .catch((err) => {
              addErrorToast(err.message);
            })
        })
        .catch((err) => {
          addErrorToast(err.message);
        })
    }
  }, [companyId, handleChanged, pathname])

  return (
    <PlacementCard>
      <PlacementCard.Content>
        <TooltipsList>
          <WarehousesList warehouses={warehouses} handleChangeEvent={() => { setHandleChanged(prev => !prev) }} />
        </TooltipsList>
      </PlacementCard.Content>
    </PlacementCard>
  );
};
