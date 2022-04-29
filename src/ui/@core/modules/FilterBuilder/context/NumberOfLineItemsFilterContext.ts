import { createContext } from 'react';
import { _useNumberOfLineItemsFilter } from '../__hooks/_useNumberOfLineItemsFilter';

type Context = ReturnType<typeof _useNumberOfLineItemsFilter>;

export const NumberOfLineItemsFilterContext = createContext({} as Context);