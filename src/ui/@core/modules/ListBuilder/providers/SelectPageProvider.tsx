import React from 'react';
import { _useSelectPage } from '../__hooks/_useSelectPage';

import { SelectPageContext } from '../context/SelectPageContext';

type Props = {};

export const SelectPageProvider: React.FC<Props> = ({ children }) => {
	const context = _useSelectPage();

	return <SelectPageContext.Provider value={context}>{children}</SelectPageContext.Provider>;
}
