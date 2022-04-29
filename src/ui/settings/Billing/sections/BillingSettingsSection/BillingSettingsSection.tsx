import { useState, useEffect, useRef } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { OrderTotal } from '../../components/OrderTotal';
import { InputCustom } from '../../../../@core/modules/Input';
import { Devider } from '../../../../@core/modules/Devider';
import { Modal } from '../../../../@core/modules/Modal';
import { PaymentCardsList } from '../../components/PaymentCardsList';
import { MainButton } from '../../../../@core/modules/Button';
import { SelectsSettingsBox } from '../../components/SelectsSettingsBox';
import { EditBillingAddress } from '../../components/EditBillingAddress';
import { EditIcon18 } from '../../../../../assets/icons';

import * as styled from './BillingSettingsSection.styled';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addAddress, getCompanyId, useWindowDimensions } from '../../../../../utils';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { addErrorToast, addInfoToast, addSuccessToast, updateToast } from '../../../../toast';
import { OptionValue } from '../../../../@core/modules/Select/components/Option';
import axios from 'axios';
import { getItems } from './BillingSettingsSection.config';
import { config } from '../../../../../private';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

type Props = {
	onClose: () => void;
};

type CardProps = {
	stripeId: string;
	brand: string;
	last4Digit: string;
	expiryMonth: string;
	expiryYear: number;
	isDefault: boolean;
}

type AddressProps = {
	city: string;
	country: string;
	line1: string;
	line2: string;
	postalCode: string;
	state: string;
}

type CalcProps = {
	planPrice: number;
	userPrice: number;
	users: OptionValue<any> | undefined;
	orders: OptionValue<any> | undefined;
	plan: OptionValue<any> | undefined;
	period: OptionValue<any> | undefined;
}

export const BillingSettingsSection: React.FC<Props> = ({ onClose }) => {
	const { word } = useLocale();
	const { user } = useAuth0();
	const { push } = useHistory();
	const getclient = useGrpcClient();
	const companyId = getCompanyId(user);
	const toastId = useRef<any>(null);
	const { height, width } = useWindowDimensions();

	const [editMode, setEditMode] = useState(false);
	const [address, setAddress] = useState<string>('');
	const [cards, setCards] = useState<CardProps[]>([]);
	const [needRefresh, setNeedRefresh] = useState<boolean>(false);
	const [customerId, setCustomerId] = useState('');

	const [calcObj, setCalcObj] = useState<CalcProps>({
		planPrice: 0,
		userPrice: 0,
		users: undefined,
		orders: undefined,
		plan: undefined,
		period: undefined
	});

	const [addressData, setAddressData] = useState<AddressProps>({
		city: '',
		country: '',
		line1: '',
		line2: '',
		postalCode: '',
		state: ''
	})

	const onEdit = () => {
		setEditMode(!editMode);
	}

	useEffect(() => {
		if (companyId) {
			getclient()
				.then((client) => {
					client
						.getBillingInfo({ companyId })
						.then((res: any) => {
							const { city, country, line1, line2, postalCode, state } = res.billingAddress;
							setAddressData(res.billingAddress);
							setAddress(addAddress(line1) + addAddress(line2) + addAddress(city) + addAddress(state) + addAddress(postalCode) + country);
							setCards(res.cardsList);
							setCustomerId(res.stripeId);
						})
						.catch((err) => {
							addErrorToast(err.message);
						})
				})
				.catch((err) => {
					addErrorToast(err.message);
				})
		}
	}, [user, companyId, needRefresh])

	const onSave = () => {
		getclient()
			.then((client) => {
				client
					.updateBillingAddress({
						companyId,
						...addressData
					})
					.then((res) => {
						addSuccessToast('Successfully updated!');
						const { city, country, line1, line2, postalCode, state } = addressData;
						setAddress(addAddress(line1) + addAddress(line2) + addAddress(city) + addAddress(state) + addAddress(postalCode) + country);
						setEditMode(false);
					})
					.catch((err) => {
						addErrorToast(err.message);
					})
			})
			.catch((err) => {
				addErrorToast(err.message);
			})
	}

	const onSubscription = () => {
		toastId.current = addInfoToast('Processing payment...', false);
		const items = getItems(
			calcObj.plan?.value,
			calcObj.period?.label,
			calcObj.users?.value,
			calcObj.orders?.value
		)
		axios.post(`${config.node_url}/subscription`, {
			customerId: customerId,
			items: items
		}).then((res) => {
			if (res.data && res.data.success) {
				updateToast(toastId.current, 'Successed subscription', 'success', 5000);
				push(AppRoutes.Dashboard.Index);
				// setTimeout(() => {
				// 	updateToast(toastId.current, 'Successed subscription', 'success', 5000);
				// 	onClose();
				// 	push(AppRoutes.Dashboard.Index);
				// }, 3000);
			} else {
				updateToast(toastId.current, 'Failed your subscription. Try again', 'error', 5000);
			}
		}).catch((err) => {
			updateToast(toastId.current, err.message, 'error', 5000);
		})
	}

	return (
		<>
			<Modal visible={!editMode} width={780} onClose={onClose} title={word('global.billing')}
				footer={
					<>
						<MainButton type='text' flat children={word('global.back')} onClick={onClose} />
						<MainButton disabled={
							!calcObj || !calcObj.orders?.label || !calcObj.plan?.label || !calcObj.period?.label || !calcObj.users?.label
						} children={word('global.pay.now')} onClick={onSubscription} />
					</>
				}>
				<styled.BodyWrapper>
					<SelectsSettingsBox handleChanged={(obj) => { setCalcObj(obj) }} />
					<Devider />
					<styled.Card>
						<styled.CardTitle>{word('global.cards')}</styled.CardTitle>
						<PaymentCardsList cards={cards} handleChanged={() => setNeedRefresh(!needRefresh)} />
					</styled.Card>
					<Devider />
					<styled.Card>
						<styled.CardTitle>
							{word('global.billing-address')}
							<MainButton type={'text'} icon={<EditIcon18 />} flat onClick={onEdit} />
						</styled.CardTitle>
						<styled.BillingAddress>
							<InputCustom placeholder={'No billing address'} value={address} />
						</styled.BillingAddress>
					</styled.Card>
					<styled.Card>
						<styled.CardTitle>{word('global.order.total')}</styled.CardTitle>
						<OrderTotal orderTotal={calcObj} />
					</styled.Card>
				</styled.BodyWrapper>
			</Modal>

			<Modal
				visible={editMode}
				title={word('global.edit-billing-address')}
				onClose={() => { setEditMode(false) }}
				height={470}
				width={680}
				footer={<MainButton children={word('global.save')} onClick={onSave} />}
				noOverflow
			>
				<EditBillingAddress addressData={addressData} onChange={(key, value) => {
					setAddressData((prevState) => ({
						...prevState,
						[key]: value,
					}))
				}} />
			</Modal>
		</>

	);
};
