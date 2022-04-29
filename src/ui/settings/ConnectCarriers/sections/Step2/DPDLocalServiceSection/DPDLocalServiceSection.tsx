import { useLocale } from '../../../../../../assets/locale';
import { useHistory } from 'react-router-dom';

import { MainButton } from '../../../../../@core/modules/Button';
import { Checkbox } from '../../../../../@core/modules/Checkbox';
import { Modal } from '../../../../../@core/modules/Modal';

import { AppRoutes } from '../../../../../app/api';

import * as styled from './DPDLocalServiceSection.styled';
import { services } from './DPDLocalServiceSection.config';
import { useState } from 'react';
import { useRef } from 'react';
import { addInfoToast, updateToast } from '../../../../../toast';
import { useCourierClient } from '../../../../../../client/client-hook';
import { useAuth0 } from '../../../../../../business/auth/hooks';
import { getCompanyId, getCutoffTime } from '../../../../../../utils';
import { FormCaption } from '../../../../../@core/modules/Container';
import { TimePicker } from '../../../../../@core/modules/TimePicker';

type Props = {
  onClose?: () => void;
};

export const DPDLocalServiceSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const getclient = useCourierClient();
  const toastId = useRef<any>(null);
  const [cutoffTime, setCutoffTime] = useState('');
  const companyId = getCompanyId(user);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const onNext = () => {
    toastId.current = addInfoToast('Setting services...', false);
    getclient()
      .then((client) => {
        client.setCarrierServices({
          companyId: companyId,
          carrierName: 'DPDLocal',
          enabledServicesList: selectedServices
        })
          .then((data) => {
            client.changeCarrierCutoff({
              companyId: companyId,
              carrierName: 'DPDLocal',
              cutoffTime: cutoffTime
            }).then(res => {
              updateToast(toastId.current, 'Successfully set services', 'success', 5000);
              push(AppRoutes.Settings.ConnectCarriers.Index);
            })
              .catch(err => {
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
      title={'DPD Local Account'}
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
