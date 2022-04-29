import { createContext } from 'react';
import { _useOrderFilter } from '../__hooks/_useOrderFilter';

type Context = ReturnType<typeof _useOrderFilter>;

export const OrderFilterContext = createContext({} as Context);
