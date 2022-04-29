import { useCallback, useMemo, useState } from 'react';

export const _useSelectPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState(1);

	const canPrev = useMemo(() => currentPage > 1, [currentPage]);
	const canNext = useMemo(() => currentPage < pageCount, [currentPage, pageCount]);

	const prev = useCallback(() => canPrev && setCurrentPage((p) => --p), [canPrev]);
	const next = useCallback(() => canNext && setCurrentPage((p) => ++p), [canNext]);
	
	const _setPageCount = useCallback((count: number) => setPageCount((oldCount) => {
		if (count < oldCount && currentPage > count) setCurrentPage(count);
		return count;
	}), [currentPage]) ;

	return {
		currentPage,
		pageCount,
		canPrev,
		canNext,
		prev,
		next,
		setCurrentPage,
		setPageCount: _setPageCount
	};
};
