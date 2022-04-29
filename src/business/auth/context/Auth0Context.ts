import { createContext } from 'react';
import { Auth0State, initalAuth0State } from '../__hooks/useAuth0State';

export const Auth0Context = createContext<Auth0State>(initalAuth0State);
