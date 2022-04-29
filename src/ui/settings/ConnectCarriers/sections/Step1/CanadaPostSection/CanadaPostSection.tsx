import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../../assets/locale';

import { AppRoutes } from '../../../../../app/api';

import { MainButton } from '../../../../../@core/modules/Button';
import { FormCaption } from '../../../../../@core/modules/Container';
import { InputCustom } from '../../../../../@core/modules/Input';
import { Modal } from '../../../../../@core/modules/Modal';

import * as styled from './CanadaPostSection.styled';
import { Checkbox } from '../../../../../@core/modules/Checkbox';
// import { useEasyPostClient } from '../../../../../../client/client-hook';
import { useRef } from 'react';
import { useState } from 'react';
import { addInfoToast, updateToast } from '../../../../../toast';

type Props = {
	onClose?: () => void;
};

export const CanadaPostSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
	const { push } = useHistory();
  // const getclient = useEasyPostClient();
  const toastId = useRef<any>(null);

  const [apiKey, setApiKey] = useState('');
  const [contractId, setContractId] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [hasCreditCard, setHasCreditCard] = useState(false);

  const onAdd = () => {
    toastId.current = addInfoToast('Adding carrier...', false);
    // getclient()
    // .then((client) => {
    //   client.addCarrier({
    //     companyId: 'abcd-abcd-abcd',
    //     carrierName: 'CanadaPostAccount',
    //     carrierCredentialsList: [
    //       {
    //         key: 'api_key',
    //         value: apiKey
    //       },
    //       {
    //         key: 'contract_id',
    //         value: contractId
    //       },
    //       {
    //         key: 'customer_number',
    //         value: customerNumber
    //       },
    //       {
    //         key: 'has_credit_card',
    //         value: hasCreditCard ? "1" : "0"
    //       }
    //     ]
    //   })
    //   .then((data) => {
    //     updateToast(toastId.current, 'Successfully added carrier', 'success', 5000);
    //     push(AppRoutes.Settings.ConnectCarriers.Step2.CanadaPost)
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
      title={'Canada Post Account'}
      footer={<MainButton children={word('global.next')} onClick={onAdd} />}
    >
      <styled.BodyWrapper>
        <FormCaption caption={word('global.api.key')}>
          <InputCustom value={apiKey} onChange={(e) => setApiKey(e)} />
        </FormCaption>
        <FormCaption caption={word('global.contract.no')}>
          <InputCustom value={contractId} onChange={(e) => setContractId(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.customer-number')}>
          <InputCustom value={customerNumber} onChange={(e) => setCustomerNumber(e)} />
        </FormCaption>
        <FormCaption>
          <Checkbox label={word('global.carrier.has-credit-card')} checked={hasCreditCard} onChange={(e) => setHasCreditCard(e)} />
        </FormCaption>
      </styled.BodyWrapper>
    </Modal>
  );
};
