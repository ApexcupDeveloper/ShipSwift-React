import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';

import * as styled from './AddOrderModal.styled';

type Props = Pick<ModalProps, 'visible' | 'onClose'>;

export const AddOrderModal: React.FC<Props> = ({ children, visible = false, onClose }) => {
  const { word } = useLocale();

  return (
    <Modal
      title={word('global.add.order')}
      width={850}
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
