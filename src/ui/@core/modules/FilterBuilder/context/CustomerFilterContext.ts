import { createContext } from 'react';
import { _useCustomerFilter } from '../__hooks/_useCustomerFilter';

type Context = ReturnType<typeof _useCustomerFilter>;

export const CustomerFilterContext = createContext({} as Context);
