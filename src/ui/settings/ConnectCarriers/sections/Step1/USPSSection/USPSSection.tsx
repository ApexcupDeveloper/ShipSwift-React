import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../../assets/locale';

import { AppRoutes } from '../../../../../app/api';

import { MainButton } from '../../../../../@core/modules/Button';
import { FormCaption } from '../../../../../@core/modules/Container';
import { InputCustom } from '../../../../../@core/modules/Input';
import { Modal } from '../../../../../@core/modules/Modal';

import * as styled from './USPSSection.styled';
// import { useEasyPostClient } from '../../../../../../client/client-hook';
import { useRef } from 'react';
import { useState } from 'react';
import { addInfoToast, updateToast } from '../../../../../toast';

type Props = {
  onClose?: () => void;
};

export const USPSSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  // const getclient = useEasyPostClient();
  const toastId = useRef<any>(null);

  const [companyName, setCompanyName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [shipperId, setShipperId] = useState('');

  const onAdd = () => {
    toastId.current = addInfoToast('Adding carrier...', false);
    // getclient()
    // .then((client) => {
    //   client.addCarrier({
    //     companyId: 'abcd-abcd-abcd',
    //     carrierName: 'UspsAccount',
    //     carrierCredentialsList: [
    //       {
    //         key: 'company_name',
    //         value: companyName
    //       },
    //       {
    //         key: 'street',
    //         value: street
    //       },
    //       {
    //         key: 'city',
    //         value: city
    //       },
    //       {
    //         key: 'state',
    //         value: state
    //       },
    //       {
    //         key: 'zip_code',
    //         value: zipCode
    //       },
    //       {
    //         key: 'phone',
    //         value: phone
    //       },
    //       {
    //         key: 'email',
    //         value: email
    //       }
    //       ,
    //       {
    //         key: 'shipper_id',
    //         value: shipperId
    //       }
    //     ]
    //   })
    //   .then((data) => {
    //     updateToast(toastId.current, 'Successfully added carrier', 'success', 5000);
    //     push(AppRoutes.Settings.ConnectCarriers.Step2.USPS)
    //   })
    //   .catch((err) => {
    //     
    //     updateToast(toastId.current, err.message, 'error', 5000);
    //   })
    // })
  }

  return (
    <Modal
      height={460}
      width={340}
      onClose={onClose}
      visible
      title={'USPS Account'}
      footer={<MainButton children={word('global.next')} onClick={onAdd} />}
    >
      <styled.BodyWrapper>
        <FormCaption caption={word('global.company.name')}>
          <InputCustom value={companyName} onChange={(e) => setCompanyName(e)} />
        </FormCaption>
        <FormCaption caption={word('global.street')}>
          <InputCustom value={street} onChange={(e) => setStreet(e)} />
        </FormCaption>
        <FormCaption caption={word('global.city')}>
          <InputCustom value={city} onChange={(e) => setStreet(e)} />
        </FormCaption>
        <FormCaption caption={word('global.state')}>
          <InputCustom value={state} onChange={(e) => setState(e)} />
        </FormCaption>
        <FormCaption caption={word('global.zip')}>
          <InputCustom value={zipCode} onChange={(e) => setZipCode(e)} />
        </FormCaption>
        <FormCaption caption={word('global.phone')}>
          <InputCustom value={phone} onChange={(e) => setPhone(e)} />
        </FormCaption>
        <FormCaption caption={word('global.email')}>
          <InputCustom value={email} onChange={(e) => setEmail(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.shipper-id')}>
          <InputCustom value={shipperId} onChange={(e) => setShipperId(e)} />
        </FormCaption>
      </styled.BodyWrapper>
    </Modal>
  );
};
