import { useContext } from 'react';
import { Auth0Context } from '../context/Auth0Context';

export const useAuth0 = () => useContext(Auth0Context);
