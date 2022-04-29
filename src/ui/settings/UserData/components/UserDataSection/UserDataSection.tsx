import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { API_URL, getAuth0Token } from '../../../../../utils';
import { MainButton } from '../../../../@core/modules/Button';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom, InputPassword } from '../../../../@core/modules/Input';
import { addErrorToast, addSuccessToast } from '../../../../toast';

import * as styled from './UserDataSection.styled';

type Props = {
	userId: string,
	userData: {
		firstName: string,
		lastName: string
	},
	token: string
};

const passwordPlaceholder = '••••••••';

export const UserDataSection: React.FC<Props> = ({ userId, userData, token }) => {
	const { word } = useLocale();
	const [loading, setLoading] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onChangePassword = () => {
		if (newPassword.length === 0) {
			setPasswordError(true);
			addErrorToast('Please enter new password!');
			return;
		}
		if (newPassword !== confirmPassword) {
			setPasswordError(true);
			addErrorToast("Password doesn't match!");
			return;
		}

		setPasswordError(false);
		setLoading(true);
		axios({
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			url: `${API_URL}/users/${userId}`,
			data: {
				password: newPassword
			}
		}).then(res => {
			setLoading(false);
			setNewPassword('');
			setConfirmPassword('');
			addSuccessToast('Successfully updated!')
		}).catch(err => {
			setLoading(false);
			addErrorToast(err.message)
		})
	}

	return (
		<styled.BodyWrapper>
			<styled.Row>
				<FormCaption caption={word('global.first-name')}>
					<InputCustom value={userData.firstName} />
				</FormCaption>
				<FormCaption caption={word('global.last-name')}>
					<InputCustom value={userData.lastName} />
				</FormCaption>
			</styled.Row>
			<styled.Row>
				<FormCaption caption={word('global.new.password')}>
					<InputPassword hideIcon placeholder={passwordPlaceholder} value={newPassword} onChange={setNewPassword} error={passwordError} />
				</FormCaption>
				<FormCaption caption={word('global.confirm.password')}>
					<InputPassword hideIcon placeholder={passwordPlaceholder} value={confirmPassword} onChange={setConfirmPassword} error={passwordError} />
				</FormCaption>
				<div>
					<MainButton
						type="secondary"
						width={164}
						children={word('global.change.password')}
						onClick={onChangePassword}
						disabled={loading}
					/>
				</div>
			</styled.Row>
		</styled.BodyWrapper>
	);
};
