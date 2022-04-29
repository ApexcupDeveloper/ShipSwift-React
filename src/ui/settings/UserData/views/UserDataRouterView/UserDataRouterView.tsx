import { useHistory } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';
import { TwoStepAuthenticationSection } from '../../sections/TwoStepAuthenticationSection';

type Props = {
	onEnableVerification: () => void;
};

export const UserDataRouterView: React.FC<Props> = ({ onEnableVerification }) => {
	const { push } = useHistory();

	return (
		<Switch>
			<Route
				path={AppRoutes.Settings.Account.TwoStepAuthentication}
				children={
					<TwoStepAuthenticationSection
						onClose={() => push(AppRoutes.Settings.Account.Index)}
						onEnable={onEnableVerification}
					/>
				}
			/>
		</Switch>
	);
};
