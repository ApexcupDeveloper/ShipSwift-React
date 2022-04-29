import { useContext } from 'react';
import { PerPageContext } from '../context/PerPageContext';

export const usePerPage = () => useContext(PerPageContext);
