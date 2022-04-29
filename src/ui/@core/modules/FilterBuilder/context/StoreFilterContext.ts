import { createContext } from 'react';
import { _useStoreFilter } from '../__hooks/_useStoreFilter';

type Context = ReturnType<typeof _useStoreFilter>;

export const StoreFilterContext = createContext({} as Context);
