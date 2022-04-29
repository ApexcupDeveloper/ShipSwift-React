import React from 'react';
import { _usePerPage } from '../__hooks/_usePerPage';

import { PerPageContext } from '../context/PerPageContext';

type Props = {};

export const PerPageProvider: React.FC<Props> = ({ children }) => {
	const context = _usePerPage();

	return <PerPageContext.Provider value={context}>{children}</PerPageContext.Provider>;
}
