import { useCallback, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { Link, useHistory } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { InputCustom } from '../../../../@core/modules/Input';

import { ArrowLeftIcon16, EmailIcon16 } from '../../../../../assets/icons';
import { NamedLogoImage } from '../../../../../assets/images';

import * as styled from '../../../@core/components';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { addErrorToast, addSuccessToast } from '../../../../toast';

export const ResetPasswordPage: React.VFC = () => {
  const { push } = useHistory();
  const { word } = useLocale();
  const {resetPassword}=useAuth0();
  const [email,setEmail]=useState<string>();

  //const onResetPassword = useCallback(() => push(AppRoutes.Auth.SignIn), [push]);

  const onResetPassword=()=>{
    if(email){
      resetPassword(email).then((msg)=>{
        addSuccessToast(msg);
      }).catch((er)=>{
        addErrorToast(er);
      })
    }else{
      // console.error("email not defined")
    }
  }
  return (
    <styled.BodyWrapper>
      <styled.Logo src={NamedLogoImage} />
      <styled.MainBlock width={370} height={240}>
        <styled.Name children={word('auth.reset-password')} />
        <InputCustom value={email} onChange={setEmail} icon={<EmailIcon16 />} placeholder={word('global.email')} />
        <MainButton children={word('auth.send-reset-link')} onClick={onResetPassword} />
      </styled.MainBlock>
      <styled.AdditionText>
        <Link to={AppRoutes.Auth.SignIn}>
          <ArrowLeftIcon16 />
          {word('global.back')}
        </Link>
      </styled.AdditionText>
    </styled.BodyWrapper>
  );
};
function initialState(initialState: any): [any, any] {
  throw new Error('Function not implemented.');
}

