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

  return (
    <AddStoreModal storeName={'BigCommerce'} nextPath={AppRoutes.Auth.Welcome.Step2} onClose={onClose}>
      <ListSection>
        <FormCaption caption={word('global.store.url')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.client.id')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.access.token')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.context')}>
          <InputCustom />
        </FormCaption>
      </ListSection>
    </AddStoreModal>
  );
};
