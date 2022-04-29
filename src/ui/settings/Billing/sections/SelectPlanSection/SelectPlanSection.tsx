import {useLocale} from '../../../../../assets/locale';

import {Modal} from '../../../../@core/modules/Modal';
import {MainButton} from '../../../../@core/modules/Button';
import {PaymentPlanList} from "../../components/PaymentPlansList";

type Props = {
  onClose: () => void;
};

export const SelectPlanSection: React.FC<Props> = ({onClose}) => {
  const {word} = useLocale();

  return (
    <Modal
      width={340}
      height={360}
      title={word('global.select-plan')}
      visible
      onClose={onClose}
      footer={
        <>
          <MainButton flat type={'text'} children={word('global.back')} onClick={onClose}/>
        </>
      }
    >
      <PaymentPlanList/>
    </Modal>
  );
};
