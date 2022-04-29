import { Auth0UserProfile } from 'auth0-js';
import { useEffect, useState } from 'react';
import { Auth0Service, SignUpProfile } from '../service';
import { config } from '../../../private';
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getApp } from 'firebase/app';
import { useDispatch } from 'react-redux';

export interface FuLLAuth0UserProfile extends Auth0UserProfile {
  firstName?: string;
}

export interface Auth0State {
  isAuthenticated?: boolean;
  error?: any;
  isLoading?: boolean;
  isSignUpFinished?: boolean;
  refreshToken: () => Promise<any>;
  getAccessToken: () => Promise<any>;
  login: (username: string, password: string) => Promise<any>;
  signUp: (formData: SignUpProfile) => Promise<any>;
  accessToken?: string;
  user?: FuLLAuth0UserProfile;
  setUser: (user: any) => any;
  logout: (returnTo?: string) => any;
  resetPassword: (email: string) => Promise<any>;
}

const service = new Auth0Service();

export const initalAuth0State: Auth0State = {
  getAccessToken: () => {
    return Promise.resolve('');
  },
  refreshToken: () => {
    return Promise.resolve('');
  },
  login: service.login,
  signUp: service.signUp,
  logout: service.logout,
  accessToken: '',
  isLoading: true,
  setUser: (user) => {
    return {};
  },
  resetPassword: (email: string) => {
    return service.changePassword({ connection: config.auth0.connection, email });
  },
};

export const useAuth0State = (): Auth0State => {
  const [state, setState] = useState<Auth0State>(initalAuth0State);
  const [user, setUser] = useState<FuLLAuth0UserProfile | undefined>();

  const refreshToken = () => {
    return new Promise((resolve, reject) => {
      service
        .checkSession()
        .then(token => {
          setState({ ...state, isLoading: false, error: null, isAuthenticated: true, accessToken: token });
          service
            .getUserInfo(token)
            .then(async (userP) => {
              let user: FuLLAuth0UserProfile = userP;
              const functions = getFunctions(getApp(), 'europe-west2');
              const firebaseAuth = getAuth();

              const makeAuthFromToken = httpsCallable(functions, 'makeAuthFromToken');
              let userKey = config.auth0.namespace + '/user_metadata';
              if ((user as any)[userKey] && (user as any)[userKey].companyList) {
                makeAuthFromToken({ token: token, uid: (user as any)[userKey].companyList })
                  .then((result: any) => {
                    signInWithCustomToken(firebaseAuth, result.data.token)
                      .then((userCredential) => {
                        // const fbUser = userCredential.user;
                      })
                      .catch((error) => {
                        // firebase don't recognize this user
                        // const errorCode = error.code;
                        // const errorMessage = error.message;
                      });
                  });
              }

              let key = config.auth0.namespace + '/firstName';

              user.firstName = (userP as any)[key] || userP.name;
              setUser(user);
              resolve(token);
            })
            .catch((er) => {
              reject(er)
            });
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  useEffect(() => {
    setState({ ...state, isLoading: true, error: null, isAuthenticated: false });
    service
      .checkSession()
      .then((token) => {
        setState({ ...state, isLoading: false, error: null, isAuthenticated: true, accessToken: token });
        service
          .getUserInfo(token)
          .then(async (userP) => {
            let user: FuLLAuth0UserProfile = userP;
            const functions = getFunctions(getApp(), 'europe-west2');
            const firebaseAuth = getAuth();

            const makeAuthFromToken = httpsCallable(functions, 'makeAuthFromToken');
            let userKey = config.auth0.namespace + '/user_metadata';
            if ((user as any)[userKey] && (user as any)[userKey].companyList) {
              makeAuthFromToken({ token: token, uid: (user as any)[userKey].companyList })
                .then((result: any) => {
                  signInWithCustomToken(firebaseAuth, result.data.token)
                    .then((userCredential) => {
                    })
                    .catch((error) => {
                    });
                });
            }

            let key = config.auth0.namespace + '/firstName';

            user.firstName = (userP as any)[key] || userP.name;
            setUser(user);
          })
          .catch((er) => {
          });
      })
      .catch((err) => {
        setState({ ...state, isLoading: false, error: err, isAuthenticated: false });
      });
  }, []);

  return {
    ...initalAuth0State,
    refreshToken: refreshToken,
    getAccessToken: () => Promise.resolve(state.accessToken),
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    accessToken: state.accessToken,
    user: user,
    setUser: (user: any) => {
      return setUser(user)
    },
    logout: service.logout,
  };
};