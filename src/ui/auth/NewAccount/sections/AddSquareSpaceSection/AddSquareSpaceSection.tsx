import { useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { AddStoreModal } from '../../components/AddStoreModal';
import { AppRoutes } from '../../../../app/api';

type Props = {
  onClose: () => void;
};

export const AddSquareSpaceSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const [url, setURL] = useState('')
  const [key, setKey] = useState('')
  const [name, setName] = useState('')

  return (
    <AddStoreModal storeName={'Squarespace'} nextPath={AppRoutes.Auth.Welcome.Step2} onClose={onClose} data={{ url: url, key: key, name: name }}>
      <ListSection>
        <FormCaption caption={word('global.store.name')}>
          <InputCustom value={name} onChange={(e) => setName(e)} />
        </FormCaption>
        <FormCaption caption={word('global.store.url')}>
          <InputCustom value={url} onChange={(e) => setURL(e)} />
        </FormCaption>
        <FormCaption caption={word('global.access.key')}>
          <InputCustom value={key} onChange={(e) => { setKey(e) }} />
        </FormCaption>
      </ListSection>
    </AddStoreModal>
  );
};
