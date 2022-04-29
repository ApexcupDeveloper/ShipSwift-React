import { useLocale } from '../../../../../assets/locale';

import { Select } from '../../../../@core/modules/Select';
import * as styled from './SelectsSettingsBox.styled';
import * as config from './SelectsSettingsBox.config';
import { useEffect, useState } from 'react';
import { OptionValue } from '../../../../@core/modules/Select/components/Option';

type Props = {
	handleChanged: (obj: CalcProps) => void;
};

type CalcProps = {
	planPrice: number;
	userPrice: number;
	users: OptionValue<any> | undefined;
	orders: OptionValue<any> | undefined;
	plan: OptionValue<any> | undefined;
	period: OptionValue<any> | undefined;
}

export const SelectsSettingsBox: React.FC<Props> = ({ children, handleChanged }) => {
	const { word } = useLocale();
	const selectOptions = config.selectOptions(word);

	const [userOptions, setUserOptions] = useState<OptionValue<any>[]>([]);
	const [periodSelectValues, setPeriodSelectValues] = useState<OptionValue<any>[]>([selectOptions.billingPeriod.selectValues[0]]);
	const [planSelectValues, setPlanSelectValues] = useState<OptionValue<any>[]>();
	const [requiredUsersSelectValues, setRequiredUsersSelectValues] = useState<OptionValue<any>[]>([]);
	const [monthlyOrdersSelectValues, setMonthlyOrdersSelectValues] = useState<OptionValue<any>[]>([]);

	const [calcObj, setCalcObj] = useState<CalcProps>({
		planPrice: 0,
		userPrice: 0,
		users: undefined,
		orders: undefined,
		plan: undefined,
		period: selectOptions.billingPeriod.selectValues[0]
	});


	const makeUsersList = (plan: string) => {
		if (plan === 'Growth') {
			let startUsers = 2;
			let tempOptions: OptionValue<any>[] = [];

			for (let i = startUsers; i <= 100; i++) {
				tempOptions.push({
					label: i.toString(),
					value: i.toString()
				})
			}
			setRequiredUsersSelectValues([{ label: '2', value: '2' }]);
			setUserOptions(tempOptions);
			setCalcObj((prevState) => ({
				...prevState,
				users: { label: '2', value: '2' }
			}));
		} else if (plan === 'Professional') {
			let startUsers = 4;
			let tempOptions: OptionValue<any>[] = [];

			for (let i = startUsers; i <= 100; i++) {
				tempOptions.push({
					label: i.toString(),
					value: i.toString()
				})
			}
			setRequiredUsersSelectValues([{ label: '4', value: '4' }]);
			setUserOptions(tempOptions);
			setCalcObj((prevState) => ({
				...prevState,
				users: { label: '4', value: '4' }
			}));
		} else {
			let startUsers = 5;
			let tempOptions: OptionValue<any>[] = [];

			for (let i = startUsers; i <= 100; i++) {
				tempOptions.push({
					label: i.toString(),
					value: i.toString()
				})
			}
			setRequiredUsersSelectValues([{ label: '5', value: '5' }]);
			setUserOptions(tempOptions);
			setCalcObj((prevState) => ({
				...prevState,
				users: { label: '5', value: '5' }
			}));
		}
	}

	useEffect(() => {
		if (planSelectValues && planSelectValues.length) {
			makeUsersList(planSelectValues[0].value);
		}
	}, [planSelectValues])

	useEffect(() => {
		if (periodSelectValues && planSelectValues && requiredUsersSelectValues && monthlyOrdersSelectValues && periodSelectValues.length && planSelectValues.length && requiredUsersSelectValues.length && monthlyOrdersSelectValues.length) {
			let planPrice = 0;
			let userPrice = 0;
			if (periodSelectValues[0].label === 'Monthly') {
				if (planSelectValues[0].label === 'Growth') {
					if (requiredUsersSelectValues[0].value === '2') {
						userPrice = 0;
					} else {
						userPrice = 25 * (Number(requiredUsersSelectValues[0].value) - 2)
					}

					if (monthlyOrdersSelectValues[0].value === '500') {
						// Default price
						planPrice = 100;
					} else if (monthlyOrdersSelectValues[0].value === '1000') {
						// Default price + orders price
						planPrice = 100 + 30;
					} else {
						// Default price + discounted seat price * orders count
						planPrice = 130 + ((Number(monthlyOrdersSelectValues[0].value) - 1000) / 500) * 20;
					}

				} else if (planSelectValues[0].label === 'Professional') {
					if (requiredUsersSelectValues[0].value === '4') {
						userPrice = 0;
					} else {
						userPrice = 25 * (Number(requiredUsersSelectValues[0].value) - 4)
					}

					if (monthlyOrdersSelectValues[0].value === '500') {
						planPrice = 140;
					} else if (monthlyOrdersSelectValues[0].value === '1000') {
						planPrice = 140 + 30;
					} else {
						planPrice = 140 + 30 + ((Number(monthlyOrdersSelectValues[0].value) - 1000) / 500) * 20;
					}
				} else {
					if (requiredUsersSelectValues[0].value === '5') {
						userPrice = 0;
					} else {
						userPrice = 25 * (Number(requiredUsersSelectValues[0].value) - 5)
					}

					if (monthlyOrdersSelectValues[0].value === '500') {
						planPrice = 200;
					} else if (monthlyOrdersSelectValues[0].value === '1000') {
						planPrice = 200 + 50;
					} else {
						planPrice = 200 + 50 + ((Number(monthlyOrdersSelectValues[0].value) - 1000) / 500) * 35;
					}
				}



			} else {
				if (planSelectValues[0].label === 'Growth') {
					if (requiredUsersSelectValues[0].value === '2') {
						userPrice = 0;
					} else {
						userPrice = 300 * (Number(requiredUsersSelectValues[0].value) - 2)
					}

					if (monthlyOrdersSelectValues[0].value === '250') {
						planPrice = 960;
					} else if (monthlyOrdersSelectValues[0].value === '750') {
						planPrice = 960 + 288;
					} else {
						planPrice = 960 + 288 + ((Number(monthlyOrdersSelectValues[0].value) - 750) / 500) * 192;
					}
				} else if (planSelectValues[0].label === 'Professional') {
					if (requiredUsersSelectValues[0].value === '4') {
						userPrice = 0;
					} else {
						userPrice = 300 * (Number(requiredUsersSelectValues[0].value) - 4)
					}

					if (monthlyOrdersSelectValues[0].value === '250') {
						planPrice = 1344;
					} else if (monthlyOrdersSelectValues[0].value === '750') {
						planPrice = 1344 + 288;
					} else {
						planPrice = 1344 + 288 + ((Number(monthlyOrdersSelectValues[0].value) - 750) / 500) * 192;
					}
				} else {
					if (requiredUsersSelectValues[0].value === '5') {
						userPrice = 0;
					} else {
						userPrice = 300 * (Number(requiredUsersSelectValues[0].value) - 5)
					}

					if (monthlyOrdersSelectValues[0].value === '250') {
						planPrice = 1920;
					} else if (monthlyOrdersSelectValues[0].value === '750') {
						planPrice = 1920 + 480;
					} else {
						planPrice = 1920 + 480 + ((Number(monthlyOrdersSelectValues[0].value) - 750) / 500) * 336;
					}
				}
			}

			setCalcObj((prevState) => ({
				...prevState,
				userPrice: userPrice,
				planPrice: planPrice
			}));
		}
	}, [periodSelectValues, planSelectValues, requiredUsersSelectValues, monthlyOrdersSelectValues])

	useEffect(() => {
		handleChanged(calcObj);
	}, [calcObj])


	return (
		<styled.BodyWrapper>
			<div>
				<styled.SelectItem>
					<span>{word('settings.billing.period')}</span>
					<Select
						values={selectOptions.billingPeriod.selectValues}
						selectedValues={periodSelectValues}
						placeholder={selectOptions.billingPeriod.placeholder}
						onSelectedChanged={(select) => {
							setPeriodSelectValues(select);
							setCalcObj((prevState) => ({
								...prevState,
								period: select[0]
							}));
						}}
					/>
				</styled.SelectItem>
				<styled.SelectItem>
					<span>{word('global.select.plan')}</span>
					<Select
						values={selectOptions.selectPlan.selectValues}
						selectedValues={planSelectValues}
						placeholder={selectOptions.selectPlan.placeholder}
						onSelectedChanged={(select) => {
							setPlanSelectValues(select);
							setCalcObj((prevState) => ({
								...prevState,
								plan: select[0]
							}));
						}}
					/>
				</styled.SelectItem>
			</div>
			<div>
				<styled.SelectItem>
					<span>{word('global.required.users')}</span>
					<Select
						values={userOptions}
						selectedValues={requiredUsersSelectValues}
						placeholder={selectOptions.requiredUsers.placeholder}
						onSelectedChanged={(select) => {
							setRequiredUsersSelectValues(select);
							setCalcObj((prevState) => ({
								...prevState,
								users: select[0]
							}));
						}}
					/>
				</styled.SelectItem>
				<styled.SelectItem>
					<span>{word('global.monthly.orders')}</span>
					<Select
						values={selectOptions.monthlyOrders.selectValues}
						selectedValues={monthlyOrdersSelectValues}
						placeholder={selectOptions.monthlyOrders.placeholder}
						onSelectedChanged={(select) => {
							setMonthlyOrdersSelectValues(select);
							setCalcObj((prevState) => ({
								...prevState,
								orders: select[0]
							}));
						}}
					/>
				</styled.SelectItem>
			</div>
		</styled.BodyWrapper>
	);
};
