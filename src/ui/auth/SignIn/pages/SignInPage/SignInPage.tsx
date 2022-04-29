//import { useAuth0 } from '@auth0/auth0-react';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { Link } from 'react-router-dom';
import { MainButton } from '../../../../@core/modules/Button';
import { InputCustom, InputPassword } from '../../../../@core/modules/Input';

import { EmailIcon16, UserIcon16 } from '../../../../../assets/icons';
import { NamedLogoImage } from '../../../../../assets/images';

import * as globalStyled from '../../../@core/components';
import * as styled from './SignInPage.styled';
import { useEffect } from 'react';
import { Spinner } from '../../../../@core/modules/Other';
import React from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { addErrorToast } from '../../../../toast';
import { cacheService } from '../../../../../utils/cache-service';

export const SignInPage: React.VFC = () => {
  const { word } = useLocale();
  const { login, isLoading } = useAuth0();
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const signIn = () => {
    cacheService.clearCache('stores');
    cacheService.clearCache('main_orders');
    cacheService.clearCache('dash_orders');
    login(username, password)
      .then((uname) => {
      })
      .catch((err) => {
        if (err.code === "blocked_user") {
          addErrorToast("Account Blocked");
        } else {
          addErrorToast(err);
        }
      });
  };
  if (isLoading) {
    <Spinner />;
  }
  const handleEnter = (key: string) => {
    if (key == 'Enter') {
      signIn();
    }
  };
  return (
    <globalStyled.BodyWrapper>
      <globalStyled.Logo src={NamedLogoImage} />
      <globalStyled.MainBlock width={370} height={340}>
        <globalStyled.Name children={word('sign-in')} />
        <InputCustom
          onChange={setUsername}
          value={username}
          icon={<EmailIcon16 />}
          placeholder={word('global.email')}
        />
        <InputPassword
          onKeyDown={handleEnter}
          onChange={setPassword}
          value={password}
          placeholder={word('global.password')}
        />
        <styled.SignInContainer>
          <MainButton children={word('sign-in')} onClick={signIn} />
        </styled.SignInContainer>
        <Link to={AppRoutes.Auth.ResetPassword} children={word('auth.forgot-password')} />
      </globalStyled.MainBlock>
      <globalStyled.AdditionText>
        <Link to={AppRoutes.Auth.SignUp}>
          {word('sign-in.no-account')}
          <p children={word('sign-up')} />
        </Link>
      </globalStyled.AdditionText>
    </globalStyled.BodyWrapper>
  );
};
