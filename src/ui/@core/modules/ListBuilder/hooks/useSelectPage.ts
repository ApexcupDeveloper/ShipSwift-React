import { useContext } from 'react';
import { SelectPageContext } from '../context/SelectPageContext';

export const useSelectPage = () => useContext(SelectPageContext);
