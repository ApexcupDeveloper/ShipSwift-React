import { createContext } from 'react';
import { _useStatusFilter } from '../__hooks/_useStatusFilter';

type Context = ReturnType<typeof _useStatusFilter>;

export const StatusFilterContext = createContext({} as Context);
