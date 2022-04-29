import { createContext } from 'react';
import { _usePerPage } from '../__hooks/_usePerPage';

type Context = ReturnType<typeof _usePerPage>;

export const PerPageContext = createContext({} as Context);
