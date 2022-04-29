import * as styled from './ListSection.styled';

type Props = {};

export const ListSection: React.FC<Props> = ({ children }) => {
	return <styled.BodyWrapper>{children}</styled.BodyWrapper>;
};
