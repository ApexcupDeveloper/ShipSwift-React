import * as styled from './Devider.styled';

export type DeviderType = 'horizontal' | 'vertical';

type Props = {
	type?: DeviderType;
};

export const Devider: React.FC<Props> = ({ type = 'horizontal' }) => {
	return <styled.BodyWrapper data-type={type}/>;
};
