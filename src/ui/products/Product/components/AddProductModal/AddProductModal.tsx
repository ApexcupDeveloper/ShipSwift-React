import { useLocale } from '../../../../../assets/locale';

import { InputSearch } from '../../../../@core/modules/Input';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';
import { ProductSearchList } from '../ProductSearchList';

import * as styled from './AddProductModal.styled';

type Props = Pick<ModalProps, 'visible' | 'onClose'>;

export const AddProductModal: React.VFC<Props> = ({ onClose, visible = false }) => {
  const { word } = useLocale();

  return (
    <Modal visible={visible} width={680} height={493} onClose={onClose} title={word('global.add.product')}>
      <styled.BodyWrapper>
        <InputSearch />
        <ProductSearchList />
      </styled.BodyWrapper>
    </Modal>
  );
};
