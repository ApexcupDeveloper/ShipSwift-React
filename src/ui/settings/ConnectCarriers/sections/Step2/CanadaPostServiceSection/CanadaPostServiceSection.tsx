import { useLocale } from '../../../../../../assets/locale';
import { useHistory } from 'react-router-dom';

import { MainButton } from '../../../../../@core/modules/Button';
import { Checkbox } from '../../../../../@core/modules/Checkbox';
import { Modal } from '../../../../../@core/modules/Modal';

import { AppRoutes } from '../../../../../app/api';

import * as styled from './CanadaPostServiceSection.styled';
import { services } from './CanadaPostServiceSection.config';
import { useState } from 'react';
// import { useEasyPostClient } from '../../../../../../client/client-hook';
import { useRef } from 'react';
import { addInfoToast, updateToast } from '../../../../../toast';

type Props = {
  onClose?: () => void;
};

export const CanadaPostServiceSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  // const getclient = useEasyPostClient();
  const toastId = useRef<any>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const onNext = () => {
    toastId.current = addInfoToast('Setting services...', false);
    // getclient()
    //   .then((client) => {
    //     client.setCarrierService({
    //       companyId: 'abcd-abcd-abcd',
    //       carrierName: 'CanadaPostAccount',
    //       enabledServicesList: selectedServices
    //     })
    //       .then((data) => {
    //         updateToast(toastId.current, 'Successfully set services', 'success', 5000);
    //         push(AppRoutes.Settings.ConnectCarriers.Index);
    //       })
    //       .catch((err) => {
    //         
    //         updateToast(toastId.current, err.message, 'error', 5000);
    //       })
    //   })
  }

  const onCheck = (name: string) => {
    if (selectedServices.includes(name)) {
      let tempArr = selectedServices.filter(item => item !== name);
      setSelectedServices(tempArr)
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  }

  return (
    <Modal
      onClose={onClose}
      visible
      title={'Canada Post Account'}
      footer={
      <styled.FooterWrapper>
          <p>{word('global.carrier.add-service.description')}</p>
          <MainButton children={word('global.next')} onClick={onNext} />
        </styled.FooterWrapper>}
    >
      <styled.BodyWrapper>
        {services.map((props) => <Checkbox {...props} checked={selectedServices.includes(props.label)} onChange={() => onCheck(props.label)} />)}
      </styled.BodyWrapper>
    </Modal>
  );
};
