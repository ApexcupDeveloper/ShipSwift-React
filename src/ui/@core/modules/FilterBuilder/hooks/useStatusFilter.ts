import { useContext } from 'react';
import { StatusFilterContext } from '../context/StatusFilterContext';

export const useStatusFilter = () => useContext(StatusFilterContext);
