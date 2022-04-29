import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth0 } from '../../../../../../business/auth/hooks';
import { useCourierClient } from '../../../../../../client/client-hook';
import { getCompanyId } from '../../../../../../utils';
import { Modal } from '../../../../../@core/modules/Modal';
import { AppRoutes } from '../../../../../app/api';
import { addErrorToast } from '../../../../../toast';
import { WarehouseList } from '../../../components/WarehouseList';

type Props = {
  onClose?: () => void;
};

export const DHLEditSection: React.VFC<Props> = ({ onClose }) => {
  const getclient = useCourierClient();
  const { user } = useAuth0();
  const [services, setServices] = useState<string[]>([]);
  const [cutofftime, setCutoffTime] = useState<string>('');
  const companyId = getCompanyId(user);

  useEffect(() => {
    if(companyId) {
      getclient()
      .then((client) => {
        client.listCarriers({
          companyId: companyId
        })
        .then((res: any) => {
          if(res.carriersList && res.carriersList.length) {
            const carrier = res.carriersList.filter((item: any) => item.name === 'DHL')
            if(carrier.length > 0 && carrier[0].enabled ) {
              let services = carrier[0].enabledServices.split(',');
              setServices(services);
              setCutoffTime(carrier[0].cutoffTime);
            }
          }
        })
        .catch((err) => {
          addErrorToast(err);
        })
      })
      .catch((err) => {
        addErrorToast(err);
      })
    }
  }, [companyId])

  return (
    <Modal onClose={onClose} height={460} width={800} visible title={'DHL Express Account'}>
      <WarehouseList services={services} cutofftime={cutofftime} carrierName={'DHL'} editPath={AppRoutes.Settings.ConnectCarriers.Step4.DHL} />
    </Modal>
  );
};
