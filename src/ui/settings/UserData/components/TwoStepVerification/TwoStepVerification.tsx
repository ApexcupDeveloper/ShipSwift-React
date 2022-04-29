import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router';

import { MainButton } from '../../../../@core/modules/Button';
import { SmallAlert } from '../../../../@core/modules/Other';

import * as styled from './TwoStepVerification.styled';
import { Title } from '../../views/UserDataView/UserDataView.styled';
import { AppRoutes } from '../../../../app/api';

type Props = {
	enableVerification: boolean;
};

export const TwoStepVerification: React.FC<Props> = ({ enableVerification }) => {
	const { word } = useLocale();
	const { push } = useHistory();
	const onClick = () => push(AppRoutes.Settings.Account.TwoStepAuthentication);

	return (
		<styled.BodyWrapper>
			<Title>{word('global.two.step.verification')}</Title>
			<styled.Authenticator>
				{word('global.authenticator')}
				{(!enableVerification && (
					<MainButton type="secondary" width={164} children={word('global.confirm')} onClick={onClick} />
				)) || <MainButton type="secondary" width={164} children={word('global.manage')} onClick={onClick} />}
			</styled.Authenticator>
			{!enableVerification && (
				<styled.AlertWrapper>
					<SmallAlert type="info" children={word('global.two.step.verification-tip')} />
				</styled.AlertWrapper>
			)}
		</styled.BodyWrapper>
	);
};
