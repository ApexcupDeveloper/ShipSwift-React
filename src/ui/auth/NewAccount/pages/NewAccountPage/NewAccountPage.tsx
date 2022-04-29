import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';
import { MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { NavTitle } from '../../../../@core/modules/Navigation';
import { DisplayRound } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';
import { WelcomeView } from '../../views/WelcomeView';

import * as styled from './NewAccountPage.styled';
import { useCourierClient, useGrpcClient, useUserClient } from '../../../../../client/client-hook';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { useRef, useState } from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { addRole, updateMetadata, validateEmail } from '../../../../../utils';
import { FREE_TRIAL_ROLE_ID } from '../../../../../utils/auth0-token';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { config } from '../../../../../private';
import { countries } from '../../../../settings/General/pages/GeneralPage/GeneralPage.config';

type Props = {};

type SelectProps = {
  label: string,
  value: string
}
export const NewAccountPage: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();
  const getClient = useGrpcClient();
  const getCourierClient = useCourierClient();
  const getUserClient = useUserClient();
  const toastId = useRef<any>(null);
  const { user, setUser, refreshToken } = useAuth0();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [address1Error, setAddress1Error] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [postcodeError, setPostcodeError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<SelectProps[]>([]);
  const userId = user?.sub || '';
  const [companyData, setCompanyData] = useState<CompanyInfo.AsObject>({
    name: '',
    email: '',
    logoUrl: '',
    vatNumber: '',
    eoriNumber: '',
    defaultCurrency: '',
    purchaseOrderPrefix: '',
    weightUnit: 'kg',
    dimensionUnit: 'cm',
    invoiceNote: '',
    phone: '',
    address1: '',
    address2: '',
    address3: '',
    country: '',
    region: '',
    city: '',
    postcode: '',
    id: '',
    barcodeFormat: '',
    ioss: {
      value: ''
    },
    userCount: 0,
    importedOrderCount: 0
  })

  const onCreate = () => {
    setNameError(companyData.name.length === 0);
    setAddress1Error(companyData.address1.length === 0);
    setCountryError(selectedCountry.length === 0);
    setCityError(companyData.city.length === 0);
    setPostcodeError(companyData.postcode.length === 0);
    if (companyData.email.length === 0) {
      setEmailError(true);
    } else {
      if (!validateEmail(companyData.email)) {
        addErrorToast('Invalid email.')
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }

    if (
      companyData.city.length === 0 ||
      companyData.name.length === 0 ||
      companyData.email.length === 0 ||
      companyData.address1.length === 0 ||
      selectedCountry.length === 0 ||
      !validateEmail(companyData.email)
    ) {
      return;
    }

    toastId.current = addInfoToast('Saving company information', false);
    addRole({ roles: [FREE_TRIAL_ROLE_ID] }, userId)
      .then((res) => {
        getClient()
          .then(client => {
            client
              .addCompany({
                ...companyData,
                country: selectedCountry[0].value
              })
              .then((response: any) => {
                let companyId = response.companyId;
                let key = config.auth0.namespace + '/user_metadata';
                let firstName: string = (user as any)[key].firstName;
                let lastName: string = (user as any)[key].lastName;
                let email: string = (user as any)['email'];
                updateMetadata({ user_metadata: { companyList: companyId } }, userId)
                  .then((res) => {
                    refreshToken()
                      .then((token) => {
                        setUser({
                          ...user,
                          [key]: res.data.user_metadata,
                        });
                        getCourierClient()
                          .then((clientCourier) => {
                            clientCourier.createCompany(companyId)
                              .then((res) => {
                                getUserClient()
                                  .then((userClient) => {
                                    userClient.addUser({
                                      companyId: companyId,
                                      email: email,
                                      password: '',
                                      firstName: firstName,
                                      lastName: lastName,
                                      timeZone: "Europe/London",
                                      isOwner: true,
                                      role: 'rol_vS7k1xnKWGaD96vI'
                                    })
                                      .then((res) => {
                                        updateToast(toastId.current, 'Company information saved', 'success', 5000);
                                        push(AppRoutes.Auth.Welcome.Index)
                                      })
                                      .catch((err) => {
                                        updateToast(toastId.current, err.message, 'error', 5000);
                                      })
                                  })
                                  .catch((err) => {
                                    updateToast(toastId.current, err.message, 'error', 5000);
                                  })
                              })
                              .catch(err => {
                                updateToast(toastId.current, err.message, 'error', 5000);
                              })
                          })
                          .catch(err => {
                            updateToast(toastId.current, err.message, 'error', 5000);
                          })


                      })
                      .catch((err) => {
                        updateToast(toastId.current, err.message, 'error', 5000);
                      })
                  })
                  .catch((err) => {
                    updateToast(toastId.current, err.message, 'error', 5000);
                  });
              })
              .catch((err) => {
                updateToast(toastId.current, err.message, 'error', 5000);
              })
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
      })
  }

  const handleChange = (type: string, value: string) => {
    setCompanyData((prevState) => ({
      ...prevState,
      [type]: value,
    }))
  }

  return (
    <styled.AccountWrapper>
      <NavTitle children={word('sign-up.set-up-account')} />
      <DisplayRound overflow>
        <styled.BodyWrapper>
          <FormCaption caption={word('sign-up.monthly-order-volume')}>
            <Select />
          </FormCaption>
          <FormCaption caption={`${word('global.company.name')}*`}>
            <InputCustom value={companyData.name} onChange={(e) => handleChange('name', e)} error={nameError} />
          </FormCaption>
          <FormCaption caption={`${word('global.company.email')}*`}>
            <InputCustom value={companyData.email} onChange={(e) => handleChange('email', e)} error={emailError} />
          </FormCaption>
          <FormCaption caption={word('global.phone')}>
            <InputCustom value={companyData.phone} onChange={(e) => handleChange('phone', e)} />
          </FormCaption>
          <FormCaption caption={`${word('global.address-line.1')}*`}>
            <InputCustom value={companyData.address1} onChange={(e) => handleChange('address1', e)} error={address1Error} />
          </FormCaption>
          <FormCaption caption={word('global.address-line.2')}>
            <InputCustom value={companyData.address2} onChange={(e) => handleChange('address2', e)} />
          </FormCaption>
          <FormCaption caption={word('global.address-line.3')}>
            <InputCustom value={companyData.address3} onChange={(e) => handleChange('address3', e)} />
          </FormCaption>
          <styled.SplitWrapper>
            <FormCaption caption={`${word('global.city')}*`}>
              <InputCustom value={companyData.city} onChange={(e) => handleChange('city', e)} error={cityError} />
            </FormCaption>
            <FormCaption caption={word('global.region')}>
              <InputCustom value={companyData.region} onChange={(e) => handleChange('region', e)} />
            </FormCaption>
          </styled.SplitWrapper>
          <styled.SplitWrapper>
            <FormCaption caption={`${word('global.postcode')}*`}>
              <InputCustom value={companyData.postcode} onChange={(e) => handleChange('postcode', e)} error={postcodeError} />
            </FormCaption>
            <FormCaption caption={`${word('global.country')}*`}>
              <Select
                searchable
                selectedValues={selectedCountry}
                values={countries}
                onSelectedChanged={setSelectedCountry}
                error={countryError}
                position="top"
              />
            </FormCaption>
          </styled.SplitWrapper>
          <MainButton children={word('global.continue')} onClick={onCreate} />
        </styled.BodyWrapper>
      </DisplayRound>
      <WelcomeView />
    </styled.AccountWrapper>
  );
};
