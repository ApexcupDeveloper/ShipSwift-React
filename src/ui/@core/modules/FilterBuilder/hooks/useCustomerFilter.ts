import { useContext } from 'react';
import { CustomerFilterContext } from '../context/CustomerFilterContext';

export const useCustomerFilter = () => useContext(CustomerFilterContext);
