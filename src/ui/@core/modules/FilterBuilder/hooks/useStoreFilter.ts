import { useContext } from 'react';
import { StoreFilterContext } from '../context/StoreFilterContext';

export const useStoreFilter = () => useContext(StoreFilterContext);
