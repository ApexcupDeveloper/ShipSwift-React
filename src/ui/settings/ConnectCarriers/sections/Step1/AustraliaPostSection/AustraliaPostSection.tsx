import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../../assets/locale';

import { AppRoutes } from '../../../../../app/api';

import { MainButton } from '../../../../../@core/modules/Button';
import { FormCaption } from '../../../../../@core/modules/Container';
import { InputCustom, InputPassword } from '../../../../../@core/modules/Input';
import { Modal } from '../../../../../@core/modules/Modal';

import * as styled from './AustraliaPostSection.styled';
import { Checkbox } from '../../../../../@core/modules/Checkbox';
import { useState } from 'react';
// import { useEasyPostClient } from '../../../../../../client/client-hook';
import { addInfoToast, addSuccessToast, updateToast } from '../../../../../toast';
import { useRef } from 'react';

type Props = {
	onClose?: () => void;
};

export const AustraliaPostSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
	const { push } = useHistory();
  // const getclient = useEasyPostClient();
  const toastId = useRef<any>(null);

  const [accountNumber, setAccountNumber] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [print, setPrint] = useState(false);

  const onAdd = () => {
    toastId.current = addInfoToast('Adding carrier...', false);
    // getclient()
    // .then((client) => {
    //   client.addCarrier({
    //     companyId: 'abcd-abcd-abcd',
    //     carrierName: 'AustraliaPostAccount',
    //     carrierCredentialsList: [
    //       {
    //         key: 'account_number',
    //         value: accountNumber
    //       },
    //       {
    //         key: 'api_key',
    //         value: apiKey
    //       },
    //       {
    //         key: 'api_secret',
    //         value: apiSecret
    //       },
    //       {
    //         key: 'print_as_you_go',
    //         value: print ? "1" : "0"
    //       }
    //     ]
    //   })
    //   .then((data) => {
    //     updateToast(toastId.current, 'Successfully added a carrier', 'success', 5000);
    //     push(AppRoutes.Settings.ConnectCarriers.Step2.AustraliaPost)
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
      title={'Australia Post Account'}
      footer={<MainButton children={word('global.connect')} onClick={onAdd} />}
    >
      <styled.BodyWrapper>
        <FormCaption caption={word('global.carrier.account-number')}>
          <InputCustom value={accountNumber} onChange={(e) => setAccountNumber(e)} />
        </FormCaption>
        <FormCaption caption={word('global.api.key')}>
          <InputCustom value={apiKey} onChange={(e) => setApiKey(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.api-secret')}>
          <InputPassword hideIcon value={apiSecret} onChange={(e) => setApiSecret(e)} />
        </FormCaption>
        <FormCaption>
          <Checkbox label={word('global.carrier.print-as-you-go')} checked={print} onChange={(e) => setPrint(e)} />
        </FormCaption>
      </styled.BodyWrapper>
    </Modal>
  );
};
