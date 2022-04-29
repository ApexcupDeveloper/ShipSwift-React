import { useContext } from 'react';
import { NavTabHistoryContext } from '../context/NavTabHistoryContext';

export const useNavTabHistory = () => useContext(NavTabHistoryContext);
