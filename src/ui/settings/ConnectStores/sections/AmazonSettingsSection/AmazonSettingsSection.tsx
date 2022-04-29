import { useLocale } from '../../../../../assets/locale';
import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';
import { AmazonSettingsForm } from '../../../../admin/ConnectStores/forms/AmazonSettingsForm';
import { AmazonSettingForm } from '../../forms/AmazonSettingForm';

type Props = {
	onClose: () => void;
};

export const AmazonSettingsSection: React.VFC<Props> = ({ onClose }) => {
	const { word } = useLocale();

  return (
    <Modal visible onClose={onClose} width={680} height={500} title={'Amazon 1'} footer={
			<>
				<MainButton type='text' flat children={word('global.cancel')} />
				<MainButton children={word('global.save')} />
			</>
		}>
      <AmazonSettingsForm />
    </Modal>
  );
};
