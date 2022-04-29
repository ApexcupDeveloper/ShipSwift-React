import React from 'react';
import { _useStockQuantityFilter } from '../__hooks/_useStockQuantityFilter';

import { StockQuantityFilterContext } from '../context/StockQuantityFilterContext';

type Props = {};

export const StockQuantityFilterProvider: React.FC<Props> = ({ children }) => {
	const context = _useStockQuantityFilter();

	return <StockQuantityFilterContext.Provider value={context}>{children}</StockQuantityFilterContext.Provider>;
}