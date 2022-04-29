import { createContext } from 'react';
import { _useStockQuantityFilter } from '../__hooks/_useStockQuantityFilter';

type Context = ReturnType<typeof _useStockQuantityFilter>;

export const StockQuantityFilterContext = createContext({} as Context);