import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../../assets/locale';

import { AppRoutes } from '../../../../../app/api';

import { MainButton } from '../../../../../@core/modules/Button';
import { FormCaption } from '../../../../../@core/modules/Container';
import { InputCustom } from '../../../../../@core/modules/Input';
import { Modal } from '../../../../../@core/modules/Modal';

import * as styled from './DeutschePostSection.styled';
import { useEffect, useRef } from 'react';
import { addInfoToast, updateToast } from '../../../../../toast';
import { useState } from 'react';
import { useCourierClient } from '../../../../../../client/client-hook';
import { useAuth0 } from '../../../../../../business/auth/hooks';
import { config } from '../../../../../../private';
import { Checkbox } from '../../../../../@core/modules/Checkbox';
import { getCompanyId } from '../../../../../../utils';

type Props = {
	onClose?: () => void;
};

export const DeutschePostSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
	const { push } = useHistory();
  const { user } = useAuth0();
  const getclient = useCourierClient();
  const toastId = useRef<any>(null);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);

  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [contactName, setContactName] = useState('');
  const [pickupType, setPickupType] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupTimeSlot, setPickupTimeSlot] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [test, setTest] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if(user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [user])

  const onAdd = () => {
    toastId.current = addInfoToast('Adding carrier...', false);
    getclient()
    .then((client) => {
      client.createCarrier({
        companyId: companyId,
        carrierName: 'DeutschePost',
        type: 'DeutschePost',
        test: test,
        cutoffTime: '',
        authMap: [
          ['client_id', clientId],
          ['client_secret', clientSecret],
          ['account_number', accountNumber],
          ['contact_name', accountNumber],
          ['pickup_type', accountNumber],
          ['pickup_location', accountNumber],
          ['pickup_time_slot', accountNumber],
          ['telephone_number', accountNumber]
        ]
      })
      .then((data) => {
        updateToast(toastId.current, 'Successfully added carrier', 'success', 5000);
        push(AppRoutes.Settings.ConnectCarriers.Step2.DeutschePost)
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
      })
    })
  }

  return (
    <Modal
      height={460}
      width={340}
			onClose={onClose}
      visible
      title={'Deutsche Post Account'}
      footer={<MainButton children={word('global.next')} onClick={onAdd} />}
    >
      <styled.BodyWrapper>
        <FormCaption caption={word('global.client.id')}>
          <InputCustom value={clientId} onChange={(e) => setClientId(e)} />
        </FormCaption>
        <FormCaption caption={word('global.client.secret')}>
          <InputCustom value={clientSecret} onChange={(e) => setClientSecret(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.account-number')}>
          <InputCustom value={accountNumber} onChange={(e) => setAccountNumber(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.contact-name')}>
          <InputCustom value={contactName} onChange={(e) => setContactName(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.pickup-type')}>
          <InputCustom value={pickupType} onChange={(e) => setPickupType(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.pickup-location')}>
          <InputCustom value={pickupLocation} onChange={(e) => setPickupLocation(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.pickup-time-slot')}>
          <InputCustom value={pickupTimeSlot} onChange={(e) => setPickupTimeSlot(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.telephone-number')}>
          <InputCustom value={telephoneNumber} onChange={(e) => setTelephoneNumber(e)} />
        </FormCaption>
        {isAdmin && (<Checkbox label={'Test Mode'} checked={test} onChange={() => setTest(!test)} />)}
      </styled.BodyWrapper>
    </Modal>
  );
};
