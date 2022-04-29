import { useMemo } from 'react';
import * as styled from './SummaryRaw.styled';

type Props = {
	title  : string;
	count  : string | number;
	prefix?: string;
	bold?  : boolean;
};

export const SummaryRaw: React.VFC<Props> = ({ title, count, prefix, bold = false }) => {
	const formattedCount = useMemo(() => `${prefix}${count}`, [count, prefix]);
	
	return <styled.BodyWrapper data-bold={bold}>
		<p children={title}/>
		<p children={formattedCount}/>
	</styled.BodyWrapper>;
};
