import { useLocale } from '../../../../../assets/locale';
import { ActivityInformationRow, ActivityInformationRowProps } from './ActivityInformationRow';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';

import * as styled from './ActivityInformation.styled';
import { Title } from '../../views/UserDataView/UserDataView.styled';

type Props = { users: ActivityInformationRowProps[] };

export const ActivityInformation: React.FC<Props> = ({ users }) => {
	const { word } = useLocale();

	return (
		<styled.BodyWrapper>
			<Title>{word('global.activity.information')}</Title>
			<div>
				<TitleRaw>
					<TitleRaw.Item flex={0} children={word('global.avatar')} />
					<TitleRaw.Item align="left" children={word('global.last.login')} />
					<TitleRaw.Item align="left" children={word('global.location')} />
					<TitleRaw.Item align="left" children={word('global.ip')} />
					<TitleRaw.Item align="left" children={word('global.role')} />
				</TitleRaw>
				{users.map((props) => <ActivityInformationRow {...props} />)}
			</div>
		</styled.BodyWrapper>
	);
};
