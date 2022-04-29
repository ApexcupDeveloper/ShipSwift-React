import { useContext } from 'react';
import { NumberOfLineItemsFilterContext } from '../context/NumberOfLineItemsFilterContext';

export const useNumberOfLineItemsFilter = () => useContext(NumberOfLineItemsFilterContext);