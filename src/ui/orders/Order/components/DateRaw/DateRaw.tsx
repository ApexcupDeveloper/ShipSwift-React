import * as styled from './DateRaw.styled';

type Props = {
	label: string;
	date: string;
};

export const DateRaw: React.VFC<Props> = ({ label, date }) => {
	return <styled.BodyWrapper>
		<styled.Label children={label}/>
		<styled.Label children={date}/>
	</styled.BodyWrapper>;
};
