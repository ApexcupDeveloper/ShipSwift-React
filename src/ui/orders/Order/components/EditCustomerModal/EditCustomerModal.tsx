import { useLocale } from '../../../../../assets/locale';
import { MainButton } from '../../../../@core/modules/Button';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';

import * as styled from './EditCustomerModal.styled';

type Props = Pick<ModalProps, 'visible' | 'onClose'> & {
	orderNumber: string;
};

export const EditCustomerModal: React.FC<Props> = ({ visible, orderNumber, onClose, children }) => {
	const { word } = useLocale();

  return (
    <Modal
      title={orderNumber}
      width={630}
      visible={visible}
      onClose={onClose}
      footer={
        <styled.ButtonsWrapper>
          <MainButton type="text" children={word('global.cancel')} onClick={onClose} />
          <MainButton children={word('global.save')} />
        </styled.ButtonsWrapper>
      }
    >
      {children}
    </Modal>
  );
};
