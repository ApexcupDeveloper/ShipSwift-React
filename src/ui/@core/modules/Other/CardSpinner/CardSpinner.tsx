import { useTheme } from 'styled-components';

import PuffLoader from 'react-spinners/PuffLoader';

import * as styled from './CardSpinner.styled';

type Props = {};

export const CardSpinner: React.VFC<Props> = () => {
  const { color  } = useTheme();

	return (
		<styled.SpinnerWrapper>
			<PuffLoader color={color.main[6]} />
		</styled.SpinnerWrapper>
	);
};
