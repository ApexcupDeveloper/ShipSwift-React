import React from 'react';
import { _useNumberOfLineItemsFilter} from '../__hooks/_useNumberOfLineItemsFilter';

import { NumberOfLineItemsFilterContext } from '../context/NumberOfLineItemsFilterContext';

type Props = {};

export const NumberOfLineItemsFilterProvider: React.FC<Props> = ({ children }) => {
	const context = _useNumberOfLineItemsFilter();

	return <NumberOfLineItemsFilterContext.Provider value={context}>{children}</NumberOfLineItemsFilterContext.Provider>;
}