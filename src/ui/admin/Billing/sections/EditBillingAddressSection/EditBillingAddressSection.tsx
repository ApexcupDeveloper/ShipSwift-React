import { useLocale } from '../../../../../assets/locale';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

import { AppRoutes } from '../../../../app/api';

import { Modal } from '../../../../@core/modules/Modal';
import { MainButton } from '../../../../@core/modules/Button';
import { EditBillingAddress } from '../../components/EditBillingAddress';

type Props = {
  onClose: () => void;
};

export const EditBillingAddressSection: React.FC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onSave = useCallback(() => push(AppRoutes.Settings.Billing.Index), [push]);

  return (
    <Modal
      visible
      title={word('global.edit-billing-address')}
      onClose={onClose}
      height={500}
      width={680}
      footer={<MainButton children={word('global.save')} onClick={onSave} />}
    >
      <EditBillingAddress />
    </Modal>
  );
};
