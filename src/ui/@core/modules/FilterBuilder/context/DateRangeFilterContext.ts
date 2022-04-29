import { createContext } from 'react';
import { _useDateRangeFilter } from '../__hooks/_useDateRangeFilter';

type Context = ReturnType<typeof _useDateRangeFilter>;

export const DateRangeFilterContext = createContext({} as Context);
