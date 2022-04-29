import { Auth0Provider } from '../../../business/auth/providers';

export const AuthContainer: React.FC = ({ children }) => {
  return (
    <Auth0Provider>
      {children}
    </Auth0Provider>
  );
};
