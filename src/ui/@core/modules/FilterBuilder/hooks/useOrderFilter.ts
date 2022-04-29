import { useContext } from 'react';
import { OrderFilterContext } from '../context/OrderFilterContext';

export const useOrderFilter = () => useContext(OrderFilterContext);
