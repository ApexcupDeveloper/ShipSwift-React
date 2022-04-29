import { config } from "../../../../../private";

type ItemProps = {
	price: string,
	quantity: number
}

const priceIds: any = config.stripeKeys;

export const getItems = (plan?: string, period?: string, users?: string, orders?: string) => {
	let items: ItemProps[] = [];

	if(plan && period && users && orders) {
		let defaultSeats = plan === 'Growth' ? 2 : plan === 'Professional' ? 4 : 5

		if(Number(users) > defaultSeats) {
			items.push({
				price: priceIds[period]['Seats'],
				quantity: Number(users) - defaultSeats
			});
		}

		items.push({
			price: priceIds[period][plan],
			quantity: Number(orders)
		});

		return items;
	} else {
		return ''
	}
}