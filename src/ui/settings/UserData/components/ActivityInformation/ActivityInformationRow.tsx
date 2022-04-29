import { getLocation } from '../../../../../utils';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import * as styled from './ActivityInformation.styled';

export type ActivityInformationRowProps = {
	avatar: string;
	lastLogin: string;
	location: string;
	ip: string;
	role: string;
};

export const ActivityInformationRow: React.VFC<ActivityInformationRowProps> = ({
	avatar,
	lastLogin,
	location,
	ip,
	role
}) => {
	return (
		<ItemRaw>
			<ItemRaw.Title flex={0} children={<styled.Avatar src={avatar} alt="" />} />
			{/* delete below and replace what upper*/}
			{/* <ItemRaw.Title
				flex={0}
				children={<div style={{ width: 40, height: 40, borderRadius: 20, background: '#333' }} />}
			/> */}
			<ItemRaw.Title align="left" children={lastLogin} />
			<ItemRaw.Title align="left" children={location} />
			<ItemRaw.Title align="left" children={ip} />
			<ItemRaw.Title align="left" children={role} />
		</ItemRaw>
	);
};
