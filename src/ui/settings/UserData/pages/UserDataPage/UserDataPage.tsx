import { useState } from 'react';
import { DisplayRound } from '../../../../@core/modules/Other';
import { UserDataRouterView } from '../../views/UserDataRouterView';
import { UserDataView } from '../../views/UserDataView';

import * as styled from './UserDataPage.styled';

type Props = {};

export const UserDataPage: React.VFC<Props> = () => {
	const [ enableVerification, setEnableVerification ] = useState(false);

	return (
		<styled.BodyWrapper>
			<DisplayRound>
				<UserDataView
					enableVerification={enableVerification}
				/>
			</DisplayRound>
			<UserDataRouterView onEnableVerification={() => setEnableVerification(true)} />
		</styled.BodyWrapper>
	);
};
