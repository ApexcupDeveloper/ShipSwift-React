import { useEffect } from 'react';
import { useState } from 'react';
// import { useEasyPostClient } from '../../../../../../client/client-hook';
import { Modal } from '../../../../../@core/modules/Modal';
import { AppRoutes } from '../../../../../app/api';
import { addErrorToast } from '../../../../../toast';
import { WarehouseList } from '../../../components/WarehouseList';

type Props = {
  onClose?: () => void;
};

export const AustraliaPostEditSection: React.VFC<Props> = ({ onClose }) => {
  // const getclient = useEasyPostClient();
  const [ services, setServices ] = useState<string[]>([]);
  const companyId = 'abcd-abcd-abcd'

  useEffect(() => {
    // getclient()
    // .then((client) => {
    //   client.getServices({
    //     companyId: companyId,
    //     carrierName: 'AustraliaPostAccount'
    //   })
    //   .then((res: any) => {
    //     setServices(res.enabledServicesList);
    //   })
    //   .catch((err) => {
    //     
    //     addErrorToast(err);
    //   })
    // })
    // .catch((err) => {
    //   
    //   addErrorToast(err);
    // })
  }, [])

  return (
    <Modal onClose={onClose} height={460} width={600} visible title={'Australia Post Account'}>
      <WarehouseList services={services} carrierName={'AustraliaPostAccount'} editPath={AppRoutes.Settings.ConnectCarriers.Step4.AustraliaPost} />
    </Modal>
  );
};
