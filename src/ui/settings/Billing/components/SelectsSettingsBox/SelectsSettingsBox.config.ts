import { WordFunc } from '../../../../../assets/locale';

export const selectOptions = (word: WordFunc) => ({
	billingPeriod: {
		selectValues: [
			{
				label: 'Monthly',
				value: 'price_1JWghiJsVhiIDBxn6TDFW0NL'
			},
			{
				label: 'Annual',
				value: 'price_1JWghiJsVhiIDBxn8dh489iE'
			}
		],
		placeholder: word('global.select.your.billing.period')
	},
	selectPlan: {
		selectValues: [
			{
				label: 'Growth',
				value: 'Growth'
			},
			{
				label: 'Professional',
				value: 'Professional'
			},
			{
				label: 'Enterprise',
				value: 'Enterprise'
			}
		],
		selectKeys: {
			Growth: {
				monthly: 'price_1JWhUfJsVhiIDBxnsXP3eJgA',
				annual: 'TBC'
			},
			Professional: {
				monthly: '',
				annual: ''
			},
			Enterprise: {
				monthly: '',
				annual: ''
			}
		},
		placeholder: word('global.select.your.plan')
	},
	requiredUsers: {
		selectValues: [
			{
				label: '0 - 99',
				value: '0 - 99'
			},
			{
				label: '11 - 100',
				value: '11 - 100'
			},
			{
				label: '101 - 1000',
				value: '101 - 1000'
			}
		],
		placeholder: word('global.select')
	},
	monthlyOrders: {
		selectValues: [
			{
				label: '1 - 500',
				value: '500'
			},
			{
				label: '501 - 1000',
				value: '1000'
			},
			{
				label: '1001 - 1500',
				value: '1500'
			},
			{
				label: '1501 - 2000',
				value: '2000'
			},
			{
				label: '2001 - 2500',
				value: '2500'
			},
			{
				label: '2501 - 3000',
				value: '3000'
			},
			{
				label: '3001 - 3500',
				value: '3500'
			},
			{
				label: '3501 - 4000',
				value: '4000'
			},
			{
				label: '4001 - 4500',
				value: '4500'
			},
			{
				label: '4501 - 5000',
				value: '5000'
			},
			{
				label: '5001 - 5500',
				value: '5500'
			},
			{
				label: '5501 - 6000',
				value: '6000'
			},
			{
				label: '6001 - 6500',
				value: '6500'
			},
			{
				label: '6501 - 7000',
				value: '7000'
			},
			{
				label: '7001 - 7500',
				value: '7500'
			},
			{
				label: '7501 - 8000',
				value: '8000'
			},
			{
				label: '8001 - 8500',
				value: '8500'
			},
			{
				label: '8501 - 9000',
				value: '9000'
			},
			{
				label: '9001 - 9500',
				value: '9500'
			},
			{
				label: '9501 - 10000',
				value: '10000'
			}
		],
		placeholder: word('global.select')
	}
});
