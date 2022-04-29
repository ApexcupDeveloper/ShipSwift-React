import React from 'react';
import { useAuth0State } from '../__hooks/useAuth0State';

import { Auth0Context } from '../context/Auth0Context';

type Props = {};

export const Auth0Provider: React.FC<Props> = ({ children }) => {
  const context = useAuth0State();
  return <Auth0Context.Provider value={context}>{children}</Auth0Context.Provider>;
};
