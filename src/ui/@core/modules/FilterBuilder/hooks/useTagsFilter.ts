import { useContext } from 'react';
import { TagsFilterContext } from '../context/TagsFilterContext';

export const useTagsFilter = () => useContext(TagsFilterContext);