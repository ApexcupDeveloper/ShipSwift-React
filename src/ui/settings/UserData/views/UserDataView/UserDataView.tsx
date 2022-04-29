import { useLocale } from '../../../../../assets/locale';
import { API_URL, generateArray, getAuth0Token, getLocation } from '../../../../../utils';

import { ActivityInformation } from '../../components/ActivityInformation';
import { TimeZoneManagement } from '../../components/TimeZoneManagement';
import { TwoStepVerification } from '../../components/TwoStepVerification';
import { UserDataSection } from '../../components/UserDataSection';
import { ShipSwiftSection } from '../../components/ShipSwiftSection';
import { ActivityInformationRowProps } from '../../components/ActivityInformation/ActivityInformationRow';
import { MainButton } from '../../../../@core/modules/Button';

import * as styled from './UserDataView.styled';
import { useEffect, useState } from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import axios from 'axios';
import { addErrorToast } from '../../../../toast';
import { convertDate1, convertTime } from '../../../../../utils/convert-time';
import { config } from '../../../../../private';

const mocks: ActivityInformationRowProps[] = generateArray(10, (i) => ({
	key: 'id' + i,
	avatar: 'avatar',
	lastLogin: '14 hours ago',
	location: 'Wembley, United Kingdom',
	ip: '213.205.198.34',
	role: `Admin-${i % 2}`
}));

type Props = {
	enableVerification: boolean;
};

export const UserDataView: React.FC<Props> = ({ enableVerification }) => {
	const { word } = useLocale();
	const { user } = useAuth0();
	const [token, setToken] = useState('');
	const userId = user?.sub || '';
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: ''
	});
	// console.log('user : ', geoip.lookup('160.202.160.104'))
	const [deviceData, setDeviceData] = useState([
		{
			key: '',
			avatar: '',
			lastLogin: '',
			location: '',
			ip: '',
			role: ''
		}
	])

	useEffect(() => {
		if (userId) {
			getAuth0Token()
				.then((response) => {
					setToken(response.data.access_token);
					axios({
						method: 'GET',
						headers: {
							Authorization: `Bearer ${response.data.access_token}`,
							'Content-Type': 'application/json'
						},
						url: `${API_URL}/users/${userId}`
					}).then(async res => {
						setUserData({
							firstName: res.data.user_metadata.firstName,
							lastName: res.data.user_metadata.lastName
						})
						let roleKey = config.auth0.namespace + '/roles';
						let role: string[] = (user as any)[roleKey];
						let userRole = '';
						for(let i = 0; i < role.length; i++) {
							if(i !== role.length - 1) {
								userRole += role[i] + ', '
							} else {
								userRole += role[i]
							}
						}
						let location = ''
						await getLocation(res.data.last_ip)
						.then((resp) => {
							if(resp.data.error) {
								setDeviceData([{
									key: '1',
									avatar: user?.picture ? user.picture : '',
									lastLogin: convertTime(res.data.last_login),
									location: 'Unknown',
									ip: res.data.last_ip,
									role: userRole
								}])
								addErrorToast(resp.data.error.info);
							} else {
								setDeviceData([{
									key: '1',
									avatar: user?.picture ? user.picture : '',
									lastLogin: convertTime(res.data.last_login),
									location: resp.data.city + ', ' + resp.data.country_name,
									ip: res.data.last_ip,
									role: userRole
								}])
							}
						})
						.catch((err) => {
							setDeviceData([{
								key: '1',
								avatar: user?.picture ? user.picture : '',
								lastLogin: convertTime(res.data.last_login),
								location: 'Unknown',
								ip: res.data.last_ip,
								role: userRole
							}]);
							addErrorToast(err.message)
						})
						
					}).catch(err => {
						addErrorToast(err.message)
					})
				})
				.catch((err) => {
					addErrorToast(err.message)
				})
		}
	}, [userId])

	return (
		<styled.BodyWrapper>
			<styled.Content>
				<UserDataSection userData={userData} userId={userId} token={token} />
				<TwoStepVerification enableVerification={enableVerification} />
				<ShipSwiftSection enableVerification={enableVerification}  />
				<TimeZoneManagement />
				<ActivityInformation users={deviceData} />
			</styled.Content>
			<styled.Footer
				children={
					<>
						<MainButton flat type="text" children={word('global.cancel')} />
						<MainButton children={word('global.save')} />
					</>
				}
			/>
		</styled.BodyWrapper>
	);
};
