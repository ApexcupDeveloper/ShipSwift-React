import { createContext } from 'react';
import { _useSelectPage } from '../__hooks/_useSelectPage';

type Context = ReturnType<typeof _useSelectPage>;

export const SelectPageContext = createContext({} as Context);
