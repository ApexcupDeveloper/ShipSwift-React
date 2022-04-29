import {
  Auth0Result,
  Auth0UserProfile,
  ChangePasswordOptions,
  CheckSessionOptions,
  WebAuth,
} from 'auth0-js';
import { config } from '../../../private';
import { addDaysToDate } from '../../../utils';

const auth0DbConn = config.auth0.connection;

export interface SignUpProfile {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const webAuth = new WebAuth({
  domain: config.auth0.domain,
  clientID: config.auth0.clientId,
  audience: config.auth0.audience,
  redirectUri: window.location.origin,
  responseType: 'token id_token',
  scope: 'openid profile email user_metadata update:current_user_metadata update:users update:users_app_metadata',
});

export class Auth0Service {
  async checkSession(options?: CheckSessionOptions) {
    return new Promise<string>((resolve, reject) => {
      webAuth.checkSession(options || {}, (err, res: Auth0Result) => {
        if (err != null) {
          reject(err);
        } else {
          resolve(res.accessToken || '');
        }
      });
    });
  }

  async login(username: string, passowrd: string) {
    const payload = {
      realm: auth0DbConn,
      username: username,
      password: passowrd,
      scope: 'openid profile email read:users user_id id user_metadata',
    };
    return new Promise<any>((resolve, reject) => {
      webAuth.login(payload, (err, res: Auth0Result) => {
        if (err != null) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  logout(returnTo?: string) {
    webAuth.logout({ returnTo: returnTo || window.location.origin });
    // localStorage.clear();
  }

  async signUp({ email, password, firstName, lastName }: SignUpProfile) {
    return new Promise<any>((resolve, reject) => {
      webAuth.signup(
        {
          connection: auth0DbConn,
          email: email,
          password: password,
          userMetadata: { firstName, lastName, storeList: '', companyList: '', freeTrial: addDaysToDate(new Date(), 14).toString(), isSignUpFinished: 'false', deleteStoreWarning: 'true', cancelOrderWarning: 'true' },
        },
        function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  async changePassword(op: ChangePasswordOptions) {
    return new Promise<any>((resolve, reject) => {
      webAuth.changePassword(op, (err, rs) => {
        if (err) {
          reject(err);
        } else {
          resolve(rs);
        }
      });
    });
  }

  async getUserInfo(token: string): Promise<Auth0UserProfile> {
    return new Promise<Auth0UserProfile>((resolve, reject) => {
      webAuth.client.userInfo(token || '', function (err, user) {
        if (err) {
          reject(err);
        } else {
          resolve(user);
        }
      });
    });
  }
}
