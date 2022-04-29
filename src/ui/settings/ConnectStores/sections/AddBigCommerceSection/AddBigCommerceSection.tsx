import { useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { AppRoutes } from '../../../../app/api';
import { AddStoreModal } from '../../components/AddStoreModal';

type Props = {
  onClose: () => void;
};

export const AddBigCommerceSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const [url, setURL] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [context, setContext] = useState('');

  return (
    <AddStoreModal storeName={'BigCommerce'} nextPath={AppRoutes.Settings.ConnectStores.Index} onClose={onClose} data={{ name, url, id, token, context }}>
      <ListSection>
        <FormCaption caption={word('global.store.name')}>
          <InputCustom value={name} onChange={setName} />
        </FormCaption>
        <FormCaption caption={word('global.store.url')}>
          <InputCustom value={url} onChange={setURL} />
        </FormCaption>
        <FormCaption caption={word('global.client.id')}>
          <InputCustom value={id} onChange={setId} />
        </FormCaption>
        <FormCaption caption={word('global.access.token')}>
          <InputCustom value={token} onChange={setToken} />
        </FormCaption>
        <FormCaption caption={word('global.context')}>
          <InputCustom value={context} onChange={setContext} />
        </FormCaption>
      </ListSection>
    </AddStoreModal>
  );
};
