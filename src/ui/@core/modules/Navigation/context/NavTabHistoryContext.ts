import { createContext } from 'react';
import { _useNavTabHistory } from '../__hooks/_useNavTabHistory';

type Context = ReturnType<typeof _useNavTabHistory>;

export const NavTabHistoryContext = createContext({} as Context);
