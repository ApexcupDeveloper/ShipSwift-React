import React from 'react';
import { _useOrderFilter } from '../__hooks/_useOrderFilter';

import { OrderFilterContext } from '../context/OrderFilterContext';

type Props = {};

export const OrderFilterProvider: React.FC<Props> = ({ children }) => {
	const context = _useOrderFilter();

	return <OrderFilterContext.Provider value={context}>{children}</OrderFilterContext.Provider>;
}
