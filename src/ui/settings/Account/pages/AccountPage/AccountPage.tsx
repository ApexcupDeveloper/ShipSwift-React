import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';
import { API_URL, convertTime, getAuth0Token, getCompanyId } from '../../../../../utils';
import { MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection } from '../../../../@core/modules/FormBuilder';
import { InputCustom, InputPassword } from '../../../../@core/modules/Input';
import { DisplayRound } from '../../../../@core/modules/Other';
import { addErrorToast, addSuccessToast } from '../../../../toast';

import { CompanyLogoSection } from '../../sections/CompanyLogoSection';

import * as styled from './AccountPage.styled';

type Props = {};

export const AccountPage: React.VFC<Props> = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState<any>({})
  const { word } = useLocale();
  const userId = user?.sub || '';
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const companyInfo = useSelector((state: any) => state.company.company);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  let key = config.auth0.namespace + '/roles';
  let role = user && (user as any)[key] ? (user as any)[key][0] : '';

  useEffect(() => {
    if (userId) {
      getAuth0Token()
        .then((response) => {
          setToken(response.data.access_token);
          axios({
            method: 'GET',
            headers: {
              Authorization: `Bearer ${response.data.access_token}`,
              'Content-Type': 'application/json'
            },
            url: `${API_URL}/users/${userId}`
          }).then(res => {
            setUserData(res.data)
          }).catch(err => {
            addErrorToast(err.message)
          })
        })
        .catch((err) => {
          addErrorToast(err.message)
        })
    }
  }, [userId])

  const update = () => {
    if (confPassword === password) {
      setLoading(true);
      axios({
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        url: `${API_URL}/users/${userId}`,
        data: {
          password: password
        }
      }).then(res => {
        setLoading(false);
        setPassword('');
        setConfPassword('');
        addSuccessToast('Successfully updated!')
      }).catch(err => {
        setLoading(false);
        addErrorToast(err.message)
      })
    } else {
      addErrorToast("Password doesn't match!")
    }

  }

  return (
    <DisplayRound overflow>
      <styled.BodyWrapper>
        <CompanyLogoSection url={companyInfo ? companyInfo?.logoUrl : ''} />
        <FormCaption caption={word('global.name')}>
          <InputCustom value={companyInfo?.name} />
        </FormCaption>
        <FormCaption caption={word('global.email')}>
          <InputCustom value={companyInfo?.email} />
        </FormCaption>
        <FormCaption caption={word('global.password')}>
          <InputPassword
            onChange={setPassword}
            value={password}
          />
        </FormCaption>
        <FormCaption caption={word('global.confirm-password')}>
          <InputPassword
            onChange={setConfPassword}
            value={confPassword}
          />
        </FormCaption>
        <FormCaption caption={word('global.phone-number')}>
          <InputCustom value={companyInfo?.phone} />
        </FormCaption>
        <FormCaption caption={word('global.timezone')}>
          <InputCustom value={companyInfo?.region} />
        </FormCaption>
        <MainButton children={word('global.update')} onClick={update} disabled={loading} />
        <FormSection title={word('global.information')} description={'Hidden tooltip'} list>
          <FormCaption caption={word('global.last-login')}>
            <InputCustom value={convertTime(userData.last_login)} disabled />
          </FormCaption>
          <FormCaption caption={word('global.last-ip')}>
            <InputCustom value={userData.last_ip} disabled />
          </FormCaption>
          <FormCaption caption={word('global.signin-history')}>
            <InputCustom value={userData.logins_count} disabled />
          </FormCaption>
          <FormCaption caption={word('global.role')}>
            <InputCustom value={role} disabled />
          </FormCaption>
        </FormSection>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
