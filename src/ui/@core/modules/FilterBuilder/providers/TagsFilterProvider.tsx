import React from 'react';
import { _useTagsFilter } from '../__hooks/_useTagsFilter';

import { TagsFilterContext } from '../context/TagsFilterContext';

type Props = {};

export const TagsFilterProvider: React.FC<Props> = ({ children }) => {
	const context = _useTagsFilter();

	return <TagsFilterContext.Provider value={context}>{children}</TagsFilterContext.Provider>;
}