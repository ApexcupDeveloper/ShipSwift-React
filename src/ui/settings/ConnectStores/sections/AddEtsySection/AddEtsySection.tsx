import { useEffect, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { AddStoreModal } from '../../components/AddStoreModal';
import { AppRoutes } from '../../../../app/api';
import { MainButton } from '../../../../@core/modules/Button';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addErrorToast } from '../../../../toast';

type Props = {
  onClose: () => void;
};

export const AddEtsySection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  // const { user } = use
  const getClient = useGrpcClient();
  const [url, setURL] = useState('');
  const [name, setName] = useState('');
  const [etsyUrl, setEtsyUrl] = useState('');
  const [oauthTokenId, setOAuthTokenId] = useState('');
  const [oauthTokenSecret, setOAuthTokenSecret] = useState('');
  const [verification, setVerification] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    getClient()
      .then((client) => {
        client
          .getEtsyAuthToken({})
          .then((res: any) => {
            setEtsyUrl(res.loginUrl);
            const urlParams = new URLSearchParams(res.loginUrl);
            setOAuthTokenId(urlParams.get("oauth_token") || '');
            setOAuthTokenSecret(urlParams.get("oauth_token_secret") || '');
          })
          .catch((err) => {
            addErrorToast(err.message);
          })
      })
      .catch((err) => {
        addErrorToast(err.message);
      })
  }, [])

  const onAuth = () => {
    window.open(etsyUrl, '_blank');
    setShow(true);
  }

  return (
    <AddStoreModal storeName={'Etsy'} nextPath={AppRoutes.Settings.ConnectStores.Index} onClose={onClose} data={{ url: url, name: name, oauthId: oauthTokenId, oauthSecret: oauthTokenSecret, verification: verification }}>
      <ListSection>
        <FormCaption caption={word('global.store.name')}>
          <InputCustom value={name} onChange={(e) => setName(e)} />
        </FormCaption>
        {show ? (
          <FormCaption caption={word('global.store.verification')}>
            <InputCustom value={verification} onChange={(e) => setVerification(e)} />
          </FormCaption>
        ) : (<MainButton children={word('global.store.auth.etsy')} onClick={onAuth} />)}
        
      </ListSection>
    </AddStoreModal>
  );
};
