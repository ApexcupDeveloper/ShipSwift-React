import { useCallback, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { Link, useHistory } from 'react-router-dom';
import { MainButton } from '../../../../@core/modules/Button';
import { InputCustom, InputPassword } from '../../../../@core/modules/Input';
import { Checkbox } from '../../../../@core/modules/Checkbox';

import { EmailIcon16, UserIcon16 } from '../../../../../assets/icons';
import { NamedLogoImage } from '../../../../../assets/images';

import * as globalStyled from '../../../@core/components';
import * as styled from './SignUpPage.styled';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { SignUpProfile } from '../../../../../business/auth/service';
import { Spinner } from '../../../../@core/modules/Other';
import { addErrorToast } from '../../../../toast';

interface SignUpPageState extends SignUpProfile { }

export const SignUpPage: React.VFC = () => {
  const { word } = useLocale();
  const [terms, setTerms] = useState(false);
  const { signUp, login, isLoading } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSignUp = () => {
    (async () => {
      try {
        await signUp({ email, password, firstName, lastName });
        await login(email, password);
      } catch (err: any) {
        if(err && err.code === 'invalid_password') {
          addErrorToast('Password too weak');
        } else if(err && err.code && err.code.includes('email')) {
          addErrorToast('Email format invalid');
        } else {
          addErrorToast(err.code);
        }
      }
    })().catch((err) => {
      addErrorToast(err);
    });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <globalStyled.BodyWrapper>
      <globalStyled.Logo src={NamedLogoImage} />
      <globalStyled.MainBlock width={370} height={509}>
        <globalStyled.Name children={word('sign-up')} />
        <InputCustom
          onChange={(e) => { setFirstName(e) }}
          value={firstName}
          icon={<UserIcon16 />}
          id="first-name"
          placeholder={word('global.first-name')}
        />
        <InputCustom
          onChange={(e) => { setLastName(e) }}
          value={lastName}
          icon={<UserIcon16 />}
          id="last-name"
          placeholder={word('global.last-name')}
        />
        <InputCustom
          onChange={(e) => { setEmail(e) }}
          value={email}
          icon={<EmailIcon16 />}
          id="email"
          placeholder={word('global.email')}
        />
        <InputPassword
          onChange={(e) => { setPassword(e) }}
          value={password}
          id="password"
          placeholder={word('global.password')}
        />
        <styled.Terms>
          <styled.CheckboxWrapper>
            <Checkbox checked={terms} onChange={setTerms} />
          </styled.CheckboxWrapper>
          <styled.TermsLink>
            <p children={word('sign-up.i-have-read')} />
            <a href="https://shipswift.com/terms" target="_blank">{word('sign-up.terms-conds')}</a>
          </styled.TermsLink>
        </styled.Terms>
        <MainButton children={word('sign-up')} disabled={!terms} onClick={onSignUp} />
        <Link to={AppRoutes.Auth.ResetPassword} children={word('auth.forgot-password')} />
      </globalStyled.MainBlock>
      <globalStyled.AdditionText>
        <Link to={AppRoutes.Auth.SignIn}>
          {word('sign-up.have-account')}
          <p children={word('sign-in')} />
        </Link>
      </globalStyled.AdditionText>
    </globalStyled.BodyWrapper>
  );
};
