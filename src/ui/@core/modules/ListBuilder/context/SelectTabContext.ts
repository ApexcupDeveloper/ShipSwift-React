import { createContext } from 'react';
import { _useSelectTab } from '../__hooks/_useSelectTab';

type Context = ReturnType<typeof _useSelectTab>;

export const SelectTabContext = createContext({} as Context);
