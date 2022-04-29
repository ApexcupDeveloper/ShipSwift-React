import AuthCode from 'react-auth-code-input';

import * as styled from './InputAuthCode.styled';

type Props = {
	characters?: number;
	onChange: () => null;
};

export const InputAuthCode: React.FC<Props> = ({ onChange, characters = 6 }) => {
	return (
		<styled.BodyWrapper>
			<AuthCode
				onChange={onChange}
				characters={characters}
				inputClassName="auth-input"
			/>
		</styled.BodyWrapper>
	);
};
