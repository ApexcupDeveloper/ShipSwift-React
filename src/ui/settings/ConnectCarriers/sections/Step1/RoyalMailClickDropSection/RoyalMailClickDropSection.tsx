import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../../assets/locale';

import { AppRoutes } from '../../../../../app/api';

import { MainButton } from '../../../../../@core/modules/Button';
import { FormCaption } from '../../../../../@core/modules/Container';
import { InputCustom } from '../../../../../@core/modules/Input';
import { Modal } from '../../../../../@core/modules/Modal';

import * as styled from './RoyalMailClickDropSection.styled';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { addInfoToast, updateToast } from '../../../../../toast';
import { useCourierClient } from '../../../../../../client/client-hook';
import { useAuth0 } from '../../../../../../business/auth/hooks';
import { config } from '../../../../../../private';
import { Checkbox } from '../../../../../@core/modules/Checkbox';
import { getCompanyId } from '../../../../../../utils';

type Props = {
  onClose?: () => void;
};

export const RoyalMailClickDropSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const getclient = useCourierClient();
  const toastId = useRef<any>(null);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);

  const [accountCode, setAccountCode] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [tradingName, setTradingName] = useState('');
  const [test, setTest] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
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
          carrierName: 'RoyalMailClickAndDrop',
          type: 'RoyalMailClickAndDrop',
          test: test,
          cutoffTime: '',
          authMap: [
            ['api_key', apiKey],
            ['trading_name', tradingName]
          ]
        })
          .then((data) => {
            updateToast(toastId.current, 'Successfully added carrier', 'success', 5000);
            push(AppRoutes.Settings.ConnectCarriers.Step2.RoyalMailClickDrop)
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
      title={'Royal Mail Click & Drop Account'}
      footer={<MainButton children={word('global.next')} onClick={onAdd} />}
    >
      <styled.BodyWrapper>
        <FormCaption caption={word('global.api.key')}>
          <InputCustom value={apiKey} onChange={(e) => setApiKey(e)} />
        </FormCaption>
        <FormCaption caption={word('global.carrier.trading-name')}>
          <InputCustom value={tradingName} onChange={(e) => setTradingName(e)} />
        </FormCaption>
        {isAdmin && (<Checkbox label={'Test Mode'} checked={test} onChange={() => setTest(!test)} />)}
      </styled.BodyWrapper>
    </Modal>
  );
};
