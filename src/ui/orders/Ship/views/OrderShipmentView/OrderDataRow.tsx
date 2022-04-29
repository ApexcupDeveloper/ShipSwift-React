import { ItemRaw } from '../../../../@core/modules/ListBuilder';

type Props = {
	value: number;
	id: string;
	name: string;
	quantity: number;
	sku: string;
	shipswiftProductName: string;
	shipswiftProductSku: string;
};

const VALUTE = '£';

export const OrderDataRow: React.FC<Props> = ({ id, name, quantity, sku, value, shipswiftProductName, shipswiftProductSku }) => {
	return (
		<ItemRaw minHeight={52} minWidth={70}>
			<ItemRaw.Title flex={1.25} children={shipswiftProductName} />
			<ItemRaw.Title children={shipswiftProductSku} />
			<ItemRaw.Title flex={.75} children={quantity} />
		</ItemRaw>
	);
};
