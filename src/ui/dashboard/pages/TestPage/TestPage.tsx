import { useEffect, useState } from 'react';
import { useAuth0 } from '../../../../business/auth/hooks';

import { MainButton } from '../../../@core/modules/Button';

import * as styled from './TestPage.styled';

type Props = {};

export const TestPage: React.VFC<Props> = () => {
  const [token, setToken] = useState('');
  const { user, logout } = useAuth0();

  /*useEffect(() => {
    if (user) {
      getAccessTokenSilently().then((token) => setToken(token));
      getIdTokenClaims().then(console.log);
      
    }
  }, [getAccessTokenSilently, getIdTokenClaims, user]);*/

  if (!user) return null;

  return (
    <styled.BodyWrapper>
      <h1>Profile</h1>
      <h1>TOKEN: {token}</h1>
      <br />
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            <h3>{key}</h3>
            <p>{value ?? !!value}</p>
            <br />
          </li>
        ))}
      </ul>
      <MainButton onClick={() => logout(window.location.origin )}>Logout</MainButton>
    </styled.BodyWrapper>
  );
};
