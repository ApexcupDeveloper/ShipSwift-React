import { DownloadIcon16, TrashIcon16 } from '../../../../../assets/icons';
import { IconButton } from '../../../../@core/modules/Button';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import * as styled from './OrderShipmentView.styled';

export type ShipmentDataRowProps = {
	shipmentCarrier: string;
	trackingNumber: string;
	shipmentDate: string;
	onCancel: () => void;
	onDownload: () => void;
};

export const ShipmentDataRow: React.FC<ShipmentDataRowProps> = ({ shipmentCarrier, trackingNumber, shipmentDate, onCancel, onDownload }) => {
	return (
		<ItemRaw minHeight={52}>
			<ItemRaw.Title flex={1.25} children={shipmentCarrier} />
			<ItemRaw.Title align="left" children={<styled.TrackingNumber children={trackingNumber} />} />
			<ItemRaw.Title align="left" children={shipmentDate} />
			<ItemRaw.Space
				flex={0}
				children={
					<styled.IconWrapper>
						<IconButton children={<DownloadIcon16 />} onClick={onDownload} />
						<IconButton children={<TrashIcon16 />} onClick={onCancel} />
					</styled.IconWrapper>
				}
			/>
		</ItemRaw>
	);
};
