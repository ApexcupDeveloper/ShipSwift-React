import { createContext } from 'react';
import { _useDatePicker } from '../__hooks/_useDatePicker';

type Context = ReturnType<typeof _useDatePicker>;

export const DatePickerContext = createContext({} as Context);
