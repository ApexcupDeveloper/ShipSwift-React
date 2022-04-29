import React from 'react';
import { _useStatusFilter } from '../__hooks/_useStatusFilter';

import { StatusFilterContext } from '../context/StatusFilterContext';

type Props = {};

export const StatusFilterProvider: React.FC<Props> = ({ children }) => {
	const context = _useStatusFilter();

	return <StatusFilterContext.Provider value={context}>{children}</StatusFilterContext.Provider>;
}
