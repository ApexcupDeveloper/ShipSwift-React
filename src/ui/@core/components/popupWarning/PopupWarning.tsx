import { useLocale } from '../../../../assets/locale';
import { MainButton } from '../../modules/Button';
import { Checkbox } from '../../modules/Checkbox';
import { Modal } from '../../modules/Modal';
import { AlertType, SmallAlert } from '../../modules/Other/SmallAlert';

import * as styled from './PopupWarning.styled';

type PopupWarningProps = Props & {
	type?: AlertType;
	title: string;
	message: string;
	applyButtonText?: string;
	cancelButtonText?: string;
};

type FCPopupWarning = React.FC<PopupWarningProps> & {
	ExpiredSubscription: typeof ExpiredSubscription,
	CancelAnOrder: typeof CancelAnOrder,
	DeleteYourStore: typeof DeleteYourStore,
	AddStore: typeof AddStore,
	DeleteUser: typeof DeleteUser
};

const PopupWarning: FCPopupWarning = ({ type = 'warning', goDashboard = false, hideCheckbox = false, checked, hide, cancelButtonText, applyButtonText, message, onCancel, onApply, onChecked, ...props }) => {
	const { word } = useLocale();
	return <Modal
		{...props}
		width={730}
		height={217}
		hide={hide}
		footer={
			goDashboard ? (
				<styled.ButtonsWrapper>
					<MainButton flat type="text" children={''} />
					<MainButton flat type="text" children={'Dashboard'} onClick={onCancel} />
					<styled.RenewWrapper>
						<MainButton children={applyButtonText || word('global.apply')} onClick={onApply} />
					</styled.RenewWrapper>
				</styled.ButtonsWrapper>
			) : (
				<styled.ButtonsWrapper>
					{!hide && !hideCheckbox ? (<Checkbox label={word('popup-warning.dont.show.again')} checked={checked} onChange={onChecked} />) : (<div></div>)}
					{!hide && (<MainButton flat type="text" children={cancelButtonText || word('global.cancel')} onClick={onCancel} />)}
					{
						hide ? (
							<styled.RenewWrapper>
								<MainButton children={applyButtonText || word('global.apply')} onClick={onApply} />
							</styled.RenewWrapper>
						) : (
							<MainButton children={applyButtonText || word('global.apply')} onClick={onApply} />
						)
					}
				</styled.ButtonsWrapper>
			)

		}>
		<SmallAlert type={type} description={message} />
	</Modal>
};

type Props = {
	onApply: () => void;
	onCancel: () => void;
	onClose: () => void;
	onChecked?: () => void;
	visible: boolean;
	checked?: boolean;
	hide?: boolean;
	goDashboard?: boolean;
	hideCheckbox?: boolean;
}

const ExpiredSubscription: React.FC<Props> = (props) => {
	const { word } = useLocale();

	return <PopupWarning
		message={word('popup-warning.expired-subscription')}
		title={word('popup-warning.expired.subscription')}
		{...props}
		// cancelButtonText={word('global.back')} 
		applyButtonText={word('popup-warning.renew.now')}
	/>
}

const CancelAnOrder: React.FC<Props> = (props) => {
	const { word } = useLocale();

	return <PopupWarning
		message={word('popup-warning.cancel-an-order')}
		title={word('popup-warning.cancel.an.order')}
		{...props}
		cancelButtonText={word('global.cancel')}
		applyButtonText={word('global.confirm')}
	/>
}

const AddStore: React.FC<Props> = (props) => {
	const { word } = useLocale();

	return <PopupWarning
		message={word('popup-warning.add-store')}
		title={word('popup-warning.add.store')}
		{...props}
		cancelButtonText={word('global.cancel')}
		applyButtonText={word('global.add.store')}
	/>
}

const DeleteYourStore: React.FC<Props> = (props) => {
	const { word } = useLocale();

	return <PopupWarning
		message={word('popup-warning.delete-your-store')}
		title={word('popup-warning.delete.your.store')}
		type="warning-red"
		{...props}
		cancelButtonText={word('global.cancel')}
		applyButtonText={word('global.confirm')}
	/>
}

const DeleteUser: React.FC<Props> = (props) => {
	const { word } = useLocale();

	return <PopupWarning
		message={word('popup-warning.delete-user')}
		title={word('popup-warning.delete.user')}
		type="warning-red"
		{...props}
		cancelButtonText={word('global.cancel')}
		applyButtonText={word('global.confirm')}
	/>
}

PopupWarning.ExpiredSubscription = ExpiredSubscription;
PopupWarning.CancelAnOrder = CancelAnOrder;
PopupWarning.DeleteYourStore = DeleteYourStore;
PopupWarning.AddStore = AddStore;
PopupWarning.DeleteUser = DeleteUser;

export { PopupWarning }
export default PopupWarning;