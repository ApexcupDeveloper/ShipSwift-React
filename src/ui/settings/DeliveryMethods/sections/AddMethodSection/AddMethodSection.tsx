import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { SmallAlert } from '../../../../@core/modules/Other';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';
import { MainButton } from '../../../../@core/modules/Button';

type Props = {
  onClose?: () => void;
};

const currencySymbol = '£';

export const AddMethodSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();

  return (
    <Modal
      visible
      onClose={onClose}
      title={word('global.add.delivery.method')}
      width={340}
      footer={<MainButton children={word('global.add')} onClick={onClose} />}
      contentBottomPadding
    >
      <ListSection>
        <SmallAlert description={word('delivery-methods.alert.method-created-within')} />
        <FormCaption caption={word('global.name')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.cost')}>
          <InputCustom placeholder={'0.00'} prefix={currencySymbol} />
        </FormCaption>
        <FormCaption caption={word('global.courier')}>
          <Select />
        </FormCaption>
        <FormCaption caption={word('global.service')}>
          <Select disabled />
        </FormCaption>
      </ListSection>
    </Modal>
  );
};
