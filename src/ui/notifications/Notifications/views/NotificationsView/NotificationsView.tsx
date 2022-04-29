import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { NotificationsList } from '../../components/NotificationsList';
import { MainButton } from '../../../../@core/modules/Button';

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const NotificationsView: React.VFC<Props> = ({ visible, onClose }) => {
  const { word } = useLocale();

  return (
    <Modal
      visible={visible}
      title={word('notifications')}
      width={650}
      onClose={onClose}
      footer={<MainButton flat type="text" children={word('global.clear.all')} />}
    >
      <NotificationsList />
    </Modal>
  );
};
