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

const store = 'Shopify';

export const AddShopifySection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  return (
    <AddStoreModal storeName={store} nextPath={AppRoutes.Settings.ConnectStores.Index} onClose={onClose} data={{ url, name }}>
      <ListSection>
        <FormCaption caption={word('global.store.name')}>
          <InputCustom value={name} onChange={(e) => setName(e)} />
        </FormCaption>
        <FormCaption caption={word('global.store.url')}>
          <InputCustom value={url} onChange={(e) => setUrl(e)} />
        </FormCaption>
      </ListSection>
    </AddStoreModal>
  );
};
