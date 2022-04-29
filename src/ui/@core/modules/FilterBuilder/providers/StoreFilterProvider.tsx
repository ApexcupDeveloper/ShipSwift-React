import React from 'react';
import { _useStoreFilter } from '../__hooks/_useStoreFilter';

import { StoreFilterContext } from '../context/StoreFilterContext';

type Props = {};

export const StoreFilterProvider: React.FC<Props> = ({ children }) => {
	const context = _useStoreFilter();

	return <StoreFilterContext.Provider value={context}>{children}</StoreFilterContext.Provider>;
}
