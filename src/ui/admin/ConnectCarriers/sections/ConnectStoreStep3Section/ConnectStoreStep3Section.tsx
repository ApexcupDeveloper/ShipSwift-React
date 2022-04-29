import { Modal } from '../../../../@core/modules/Modal';
import { WarehouseList } from '../../components/WarehouseList';

type Props = {
  onClose?: () => void;
};

export const ConnectStoreStep3Section: React.VFC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose} height={460} width={600} visible title={'Parcelforce account'}>
      <WarehouseList />
    </Modal>
  );
};
