import { useContext } from 'react';
import { DatePickerContext } from '../context/DatePickerContext';

export const useDatePicker = () => useContext(DatePickerContext);
