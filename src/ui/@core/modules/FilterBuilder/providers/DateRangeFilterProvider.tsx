import React from 'react';
import { _useDateRangeFilter } from '../__hooks/_useDateRangeFilter';

import { DateRangeFilterContext } from '../context/DateRangeFilterContext';

type Props = {};

export const DateRangeFilterProvider: React.FC<Props> = ({ children }) => {
	const context = _useDateRangeFilter();

	return <DateRangeFilterContext.Provider value={context}>{children}</DateRangeFilterContext.Provider>;
}
