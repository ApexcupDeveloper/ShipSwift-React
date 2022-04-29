import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { MainButton } from '../../../../@core/modules/Button';

import { AddCustomerForm } from '../../forms/AddCustomerForm';

type Props = {
	onClose: () => void;
};

export const AddCustomerSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();

  return (
    <Modal
      visible
      width={680}
			onClose={onClose}
      title={word('global.add.customer')}
      footer={
        <>
          <MainButton type={'text'} flat children={word('global.cancel')} />
          <MainButton children={word('global.save')} />
        </>
      }
    >
      <AddCustomerForm />
    </Modal>
  );
};
