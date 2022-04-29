import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { NewPaymentMethod } from '../../components/NewPaymentMethod.old';
import { MainButton } from '../../../../@core/modules/Button';

import * as styled from './NewPaymentMethodSection.styled';
import { ChangeEvent } from "../../../../@core/hooks/useInputState";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

export const NewPaymentMethodSection: React.FC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const [cardData, cardSetData] = useState({ number: '', exp_month: '', exp_year: '', cvc: '', expired: '' });


  const onHandleEventChange = (event: ChangeEvent) => {
    const name: string = event.target.name as string;

    if (name === 'expired' && event.target.value) {
      const [exp_month, exp_year] = (event.target.value as string).split('/');
      cardSetData(prevState => ({ ...prevState, exp_month: exp_month, exp_year: exp_year }));
    }

    cardSetData(prevState => ({ ...prevState, [name]: event.target.value }))

  }
  const addCard = async () => {
  }

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
            onClick={addCard}
          />
        </>
      }
    >
      <NewPaymentMethod handleEventChange={onHandleEventChange} data={cardData} />
    </Modal>
  );
};
