import { useContext } from 'react';
import { SelectTabContext } from '../context/SelectTabContext';

export const useSelectTab = () => useContext(SelectTabContext);
