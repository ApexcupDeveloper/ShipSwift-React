import { createContext } from 'react';
import { _useLocale } from '../__hooks/_useLocale';

type Context = ReturnType<typeof _useLocale>;

export const LocaleContext = createContext({} as Context);
