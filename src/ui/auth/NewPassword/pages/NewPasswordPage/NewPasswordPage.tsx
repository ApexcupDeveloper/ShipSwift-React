import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { Link } from 'react-router-dom';
import { MainButton } from '../../../../@core/modules/Button';
import { InputPassword } from '../../../../@core/modules/Input';

import { ArrowLeftIcon16 } from '../../../../../assets/icons';
import { NamedLogoImage } from '../../../../../assets/images';

import * as styled from '../../../@core/components';

export const NewPasswordPage: React.VFC = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <styled.Logo src={NamedLogoImage} />
      <styled.MainBlock width={370} height={240}>
        <styled.Name children={word('auth.set-new-password')} />
        <InputPassword placeholder={word('global.password')} />
        <MainButton children={word('auth.set-new-password')} />
      </styled.MainBlock>
      <styled.AdditionText>
        <Link to={AppRoutes.Auth.SignIn}>
          <ArrowLeftIcon16 />
          {word('global.back-to')}
          <p children={word('sign-in')} />
        </Link>
      </styled.AdditionText>
    </styled.BodyWrapper>
  );
};
