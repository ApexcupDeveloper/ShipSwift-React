import { useLocale } from '../../../../../assets/locale';
import { Nullable } from '../../../../../utils';
import { MainButton } from '../../../../@core/modules/Button';

import { Modal } from '../../../../@core/modules/Modal';
import { SmallAlert } from '../../../../@core/modules/Other';
import { InputAuthCode } from '../../../../@core/modules/Input/InputAuthCode';

import { QrCodeIcon128 } from '../../../../../assets/icons';
import * as styled from './TwoStepAuthenticationSection.styled';

type Props = {
	onClose?: Nullable<() => void>;
	onEnable: () => void;
};

export const TwoStepAuthenticationSection: React.FC<Props> = ({ onClose, onEnable }) => {
	const { word } = useLocale();

	return (
		<Modal
			width={730}
			height={454}
			visible
			title={word('global.enable.2-step.authentication')}
			onClose={onClose}
			footer={
				<>
					<MainButton flat type="text" children={word('global.cancel')} onClick={onClose} />
					<MainButton children={word('global.enable')} onClick={() => {onEnable(); onClose && onClose()}} />
				</>
			}
		>
			<styled.BodyWrapper>
				<styled.Item style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
					<styled.QrCodeWrapper>
						<QrCodeIcon128 />
					</styled.QrCodeWrapper>
					<SmallAlert
						children={
							<>
								{word('global.enable.2-step.authentication-tip-1')}
								<styled.Link to="" children={word('global.enable.2-step.authentication-link')} />
								<br />
								{word('global.enable.2-step.authentication-tip-2')}
							</>
						}
					/>
				</styled.Item>
				<styled.Item>
					{word('global.enter.your.2-step.verification.code')}
					<InputAuthCode onChange={() => null}/>
				</styled.Item>
			</styled.BodyWrapper>
		</Modal>
	);
};
