import { useLocale } from '../../../../../assets/locale';
import { Modal } from '../../../../@core/modules/Modal';

type Props = {
	visible: boolean;
	onClose: () => void;
	orderNumber: string;
};

export const OrderShipmentModal: React.FC<Props> = ({ children, orderNumber, visible = false, onClose }) => {
	const { word } = useLocale();

	return (
		<Modal
			width={730}
			height={526}
			title={word('global.shipment.for').replace('{{ORDER_NUMBER}}', orderNumber)}
			visible={visible}
			onClose={onClose}
		>
			{children}
		</Modal>
	);
};
