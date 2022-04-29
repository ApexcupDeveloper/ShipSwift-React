import { useHistory } from 'react-router';
import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { NewPaymentMethod } from '../../components/NewPaymentMethod';
import { MainButton } from '../../../../@core/modules/Button';

import * as styled from './NewPaymentMethodSection.styled';

type Props = {
  onClose: () => void;
};

export const NewPaymentMethodSection: React.FC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { goBack } = useHistory();

  return (
    <Modal
      width={340}
      height={360}
      title={word('global.new-payment-method')}
      visible
      onClose={onClose}
      footer={
        <>
          <MainButton flat type={'text'} children={word('global.back')} onClick={onClose} />
          <MainButton
            flat
            children={<styled.AddButtonWrp>{word('global.add')}</styled.AddButtonWrp>}
            onClick={goBack}
          />
        </>
      }
    >
      <NewPaymentMethod />
    </Modal>
  );
};
