import { useContext } from 'react';
import { DateRangeFilterContext } from '../context/DateRangeFilterContext';

export const useDateRangeFilter = () => useContext(DateRangeFilterContext);
export type { DateRangeFilter } from '../__hooks/_useDateRangeFilter';