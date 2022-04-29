import React from 'react';
import { _useCustomerFilter } from '../__hooks/_useCustomerFilter';

import { CustomerFilterContext } from '../context/CustomerFilterContext';

type Props = {};

export const CustomerFilterProvider: React.FC<Props> = ({ children }) => {
	const context = _useCustomerFilter();

	return <CustomerFilterContext.Provider value={context}>{children}</CustomerFilterContext.Provider>;
}
