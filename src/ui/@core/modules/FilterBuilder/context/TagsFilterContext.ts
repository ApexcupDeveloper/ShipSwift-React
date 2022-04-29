import { createContext } from 'react';
import { _useTagsFilter } from '../__hooks/_useTagsFilter';

type Context = ReturnType<typeof _useTagsFilter>;

export const TagsFilterContext = createContext({} as Context);
