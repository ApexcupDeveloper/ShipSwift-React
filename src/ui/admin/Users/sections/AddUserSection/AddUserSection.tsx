import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';
import { AddUserForm } from '../../forms/AddUserForm';

type Props = { onClose: () => void };

export const AddUserSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();

  return (
    <Modal
      visible
      onClose={onClose}
      width={340}
      height={500}
      title={word('global.add.user')}
      footer={<MainButton children={word('global.add')} />}
    >
      <AddUserForm />
    </Modal>
  );
};
