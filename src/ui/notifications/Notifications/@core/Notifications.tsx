import { NotificationsView } from '../views/NotificationsView';

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const Notifications: React.VFC<Props> = ({ visible, onClose }) => {
  return <NotificationsView visible={visible} onClose={onClose} />;
};
