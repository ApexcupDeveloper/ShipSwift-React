import { useContext } from 'react';
import { StockQuantityFilterContext } from '../context/StockQuantityFilterContext';

export const useStockQuantityFilter = () => useContext(StockQuantityFilterContext);