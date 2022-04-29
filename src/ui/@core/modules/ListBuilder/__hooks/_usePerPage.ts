import { useCallback, useState } from 'react';
import { SelectOption } from '../../Select';

import * as config from '../components/PerPage/PerPage.config';

export const _usePerPage = () => {
	const [rowsCount, setRowsCount] = useState(config.selectValues[0]);

	const onSelect = useCallback((values: SelectOption<number>[]) => {
		const [value] = values;
		if (value) setRowsCount(value);
	}, []);
	
	return {
		count: rowsCount.value,
		selectedRowsCount: rowsCount,
		onSelect,
		setRowsCount
	};
};
