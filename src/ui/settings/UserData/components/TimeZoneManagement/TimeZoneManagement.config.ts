import { WordFunc } from '../../../../../assets/locale';

export const selectOptions = (word: WordFunc) => ({
	values: [
		{
			value: 'Eactern Standard',
			label: word('time-standart.eastern-standard-time')
		},
		{
			value: 'Eactern1',
			label: 'Eastern Standard Time (EST), UTC -5'
		},
		{
			value: 'Standard2',
			label: 'Eastern Standard Time (EST), UTC -5'
		}
	],
	selectedValues: [
		{
			label: word('time-standart.eastern-standard-time'),
			value: 'Eactern Standard'
		}
	]
});
