import React from 'react';
import { _useSelectTab } from '../__hooks/_useSelectTab';

import { SelectTabContext } from '../context/SelectTabContext';

type Props = {
	queryKey?: string;
};

export const SelectTabProvider: React.FC<Props> = ({ children, queryKey }) => {
	const context = _useSelectTab(queryKey);

	return <SelectTabContext.Provider value={context}>{children}</SelectTabContext.Provider>;
}
