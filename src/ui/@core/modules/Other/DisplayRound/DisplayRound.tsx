import * as styled from './DisplayRound.styled';

type Props = {
	/**
	 * @default false
	 */
	overflow?: boolean;

	/**
	 * @default 1
	 */
	flex?: number;
};

export const DisplayRound: React.FC<Props> = ({ children, overflow, flex = 1 }) => {
	return <styled.BodyWrapper flex={flex} data-overflow={overflow ?? false}>{children}</styled.BodyWrapper>;
};
