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

export const ApcEditSection: React.VFC<Props> = ({ onClose }) => {
  const getclient = useCourierClient();
  const { user } = useAuth0();
  const [ services, setServices ] = useState<string[]>([]);
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
            const carrier = res.carriersList.filter((item: any) => item.name === 'APC')
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
    <Modal onClose={onClose} height={460} width={800} visible title={'APC Account'}>
      <WarehouseList services={services} cutofftime={cutofftime} carrierName={'APC'} editPath={AppRoutes.Settings.ConnectCarriers.Step4.APC} />
    </Modal>
  );
};
