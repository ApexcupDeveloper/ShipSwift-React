import { useLocale } from '../../../../../../assets/locale';
import { useHistory, useLocation } from 'react-router-dom';

import { MainButton } from '../../../../../@core/modules/Button';
import { Checkbox } from '../../../../../@core/modules/Checkbox';
import { Modal } from '../../../../../@core/modules/Modal';

import { AppRoutes } from '../../../../../app/api';

import * as styled from './TestServiceEditSection.styled';
import { useState } from 'react';
import { useRef } from 'react';
import { addInfoToast, updateToast } from '../../../../../toast';
import { useCourierClient } from '../../../../../../client/client-hook';
import { useAuth0 } from '../../../../../../business/auth/hooks';
import { services } from '../../Step2/TestServiceSection/TestServiceSection.config';
import { getCompanyId, getCutoffTime } from '../../../../../../utils';
import { TimePicker } from '../../../../../@core/modules/TimePicker';
import { FormCaption } from '../../../../../@core/modules/Container';

type Props = {
  onClose?: () => void;
};

type PassProps = {
  services: string[],
  cutofftime: string
}

export const TestServiceEditSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const { state } = useLocation();
  const getclient = useCourierClient();
  const toastId = useRef<any>(null);
  const propsData = state as PassProps;
  const servicesList = propsData.services;
  const cutofftime = propsData.cutofftime;
  const companyId = getCompanyId(user);
  const [cutoffTime, setCutoffTime] = useState(cutofftime || '');
  const [selectedServices, setSelectedServices] = useState<string[]>(servicesList || []);

  const onNext = () => {
    toastId.current = addInfoToast('Setting services...', false);
    getclient()
      .then((client) => {
        client.setCarrierServices({
          companyId: companyId,
          carrierName: 'Test',
          enabledServicesList: selectedServices
        })
          .then((data) => {
            client.changeCarrierCutoff({
              companyId: companyId,
              carrierName: 'Test',
              cutoffTime: cutoffTime
            })
              .then((res) => {
                updateToast(toastId.current, 'Successfully set services', 'success', 5000);
                push(AppRoutes.Settings.ConnectCarriers.Index);
              })
              .catch((err) => {
                
                updateToast(toastId.current, err.message, 'error', 5000);
              })
          })
          .catch((err) => {
            
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
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
      title={'Test account'}
      footer={
        <styled.FooterWrapper>
          <p>{word('global.carrier.add-service.description')}</p>
          <MainButton children={word('global.next')} onClick={onNext} />
        </styled.FooterWrapper>}
    >
      <styled.BodyWrapper>
        <FormCaption caption={word('global.cutofftime')}>
          <TimePicker
            placeholder="HH:MM"
            value={cutoffTime}
            onChange={(e) => { setCutoffTime(e) }}
          />
        </FormCaption>
        <styled.ServiceWrapper>
          {services.map((props) => <Checkbox {...props} checked={selectedServices.includes(props.value)} onChange={() => onCheck(props.value)} />)}
        </styled.ServiceWrapper>
      </styled.BodyWrapper>
    </Modal>
  );
};
