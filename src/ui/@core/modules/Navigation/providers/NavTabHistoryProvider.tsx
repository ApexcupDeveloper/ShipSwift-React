import React from 'react';
import { _useNavTabHistory } from '../__hooks/_useNavTabHistory';

import { NavTabHistoryContext } from '../context/NavTabHistoryContext';
import { NavPath } from '../components';

type Props = {
	navPaths: NavPath[];
};

export const NavTabHistoryProvider: React.FC<Props> = ({ children, navPaths }) => {
	const context = _useNavTabHistory(navPaths);

	return <NavTabHistoryContext.Provider value={context}>{children}</NavTabHistoryContext.Provider>;
}
