import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../../assets/locale';

import { AppRoutes } from '../../../../../app/api';

import { MainButton } from '../../../../../@core/modules/Button';
import { FormCaption } from '../../../../../@core/modules/Container';
import { InputCustom, InputPassword } from '../../../../../@core/modules/Input';
import { Modal } from '../../../../../@core/modules/Modal';

import * as styled from './DHLSection.styled';
import { Checkbox } from '../../../../../@core/modules/Checkbox';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { addInfoToast, updateToast } from '../../../../../toast';
import { useCourierClient } from '../../../../../../client/client-hook';
import { useAuth0 } from '../../../../../../business/auth/hooks';
import { config } from '../../../../../../private';
import { getCompanyId } from '../../../../../../utils';

type Props = {
	onClose?: () => void;
};

export const DHLSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
	const { push } = useHistory();
  const { user } = useAuth0();
  const getclient = useCourierClient();
  const toastId = useRef<any>(null);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);

  const [accountNumber, setAccountNumber] = useState('');
  const [siteId, setSiteId] = useState('');
  const [password, setPassword] = useState('');
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
        carrierName: 'DHL',
        type: 'DHL',
        test: test,
        cutoffTime: '',
        authMap: [
          ['site_id', siteId],
          ['password', password],
          ['account_number', accountNumber]
        ]
      })
      .then((data) => {
        updateToast(toastId.current, 'Successfully added carrier', 'success', 5000);
        push(AppRoutes.Settings.ConnectCarriers.Step2.DHL)
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
      title={'DHL Express Account'}
      footer={<MainButton children={word('global.next')} onClick={onAdd} />}
    >
      <styled.BodyWrapper>
        <FormCaption caption={word('global.carrier.account-number')}>
          <InputCustom value={accountNumber} onChange={(e) => setAccountNumber(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.site-id')}>
          <InputCustom value={siteId} onChange={(e) => setSiteId(e)} />
        </FormCaption>
        <FormCaption caption={word('global.password')}>
          <InputPassword hideIcon value={password} onChange={(e) => setPassword(e)} />
        </FormCaption>
        {isAdmin && (<Checkbox label={'Test Mode'} checked={test} onChange={() => setTest(!test)} />)}
      </styled.BodyWrapper>
    </Modal>
  );
};