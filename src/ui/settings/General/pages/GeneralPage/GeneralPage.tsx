import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';
import { config } from '../../../../../private';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { getCompanyId, validateEmail } from '../../../../../utils';
import { MainButton } from '../../../../@core/modules/Button';

import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { ImageDropzone } from '../../../../@core/modules/ImageDropzone';
import { InputCustom } from '../../../../@core/modules/Input';
import { DisplayRound } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { countries } from './GeneralPage.config';
import { CompanyLogoSection } from '../../sections/CompanyLogoSection';

import * as styled from './GeneralPage.styled';
import { useDispatch } from 'react-redux';
import { setCompanyData } from '../../../../redux/action';

type Props = {};

type SelectProps = {
  label: string,
  value: string
}


const weightUnits = [
  {
    label: 'Grams (g)',
    value: 'g'
  }, {
    label: 'Kilograms (kg)',
    value: 'kg'
  }, {
    label: 'Pounds (lb)',
    value: 'lb'
  }, {
    label: 'Ounces (oz)',
    value: 'oz'
  }
];

const dimensionUnits = [
  {
    label: 'Centimeters (cm)',
    value: 'cm'
  }, {
    label: 'Inches (inch)',
    value: 'inch'
  }
]

const currencies = [
  {
    label: 'US Dollar ($)',
    value: 'USD'
  }, {
    label: 'Great British Pounds (£)',
    value: 'GBP'
  }, {
    label: 'Euros (€)',
    value: 'EUR'
  }
]

const barcodeFormats = [
  {
    label: 'Code128',
    value: 'Code128'
  }
]

export const GeneralPage: React.VFC<Props> = () => {
  const { word } = useLocale();
  const getClient = useGrpcClient();
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const toastId = useRef<any>(null);
  const companyId = getCompanyId(user);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [address1Error, setAddress1Error] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [postcodeError, setPostcodeError] = useState(false);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState<SelectProps[]>([weightUnits[0]]);
  const [selectedCountry, setSelectedCountry] = useState<SelectProps[]>([]);
  const [selectedDimensionUnit, setSelectedDimensionUnit] = useState<SelectProps[]>([dimensionUnits[0]]);
  const [selectedCurrency, setSelectedCurrency] = useState<SelectProps[]>([currencies[0]]);
  const [selectedBarcode, setSelectedBarcode] = useState<SelectProps[]>([barcodeFormats[0]]);
  const [editable, setEditable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [companyInfo, setCompanyInfo] = useState<CompanyInfo.AsObject>({
    name: '',
    email: '',
    logoUrl: '',
    vatNumber: '',
    eoriNumber: '',
    defaultCurrency: '',
    purchaseOrderPrefix: '',
    weightUnit: '',
    dimensionUnit: '',
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
  });

  useEffect(() => {
    if (user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin' || item === 'Account Owner' || item === 'Free Trial')) {
        setEditable(true);
      } else {
        setEditable(false);
      }
    }
  }, [user])

  useEffect(() => {
    if (companyId) {
      getClient()
        .then(client => {
          client.getCompany({
            companyId: companyId
          })
            .then((res: any) => {
              const companyInfo = res.companyInfo as CompanyInfo.AsObject;
              setCompanyInfo(companyInfo);
              if (companyInfo.defaultCurrency === '' || companyInfo.defaultCurrency === 'USD') {
                setSelectedCurrency([currencies[0]]);
              } else if (companyInfo.defaultCurrency === 'GBP') {
                setSelectedCurrency([currencies[1]]);
              } else {
                setSelectedCurrency([currencies[2]]);
              }
              if (companyInfo.weightUnit === '' || companyInfo.weightUnit === 'g') {
                setSelectedWeightUnit([weightUnits[0]]);
              } else if (companyInfo.weightUnit === 'kg') {
                setSelectedWeightUnit([weightUnits[1]]);
              } else if (companyInfo.weightUnit === 'lb') {
                setSelectedWeightUnit([weightUnits[2]]);
              } else {
                setSelectedWeightUnit([weightUnits[3]]);
              }
              if (companyInfo.dimensionUnit === '' || companyInfo.dimensionUnit === 'cm') {
                setSelectedDimensionUnit([dimensionUnits[0]]);
              } else {
                setSelectedDimensionUnit([dimensionUnits[1]]);
              }
              if (companyInfo && companyInfo.country) {
                setSelectedCountry(countries.filter(item => item.value === companyInfo.country))
              }
            })
            .catch((err) => {
              addErrorToast(err.message)
            })
        })
        .catch(err => {
          addErrorToast(err.message)
        })
    }
  }, [companyId])

  const handleChange = (type: string, value: string) => {
    if (type === 'ioss') {
      setCompanyInfo((prevState) => ({
        ...prevState,
        [type]: {
          value: value
        },
      }))
    } else {
      setCompanyInfo((prevState) => ({
        ...prevState,
        [type]: value,
      }))
    }
  }

  const onSave = () => {
    setNameError(companyInfo.name.length === 0);
    setCityError(companyInfo.city.length === 0);
    setAddress1Error(companyInfo.address1.length === 0);
    setCountryError(selectedCountry.length === 0);
    setPostcodeError(companyInfo.postcode.length === 0);

    if (companyInfo.email.length === 0) {
      setEmailError(true);
    } else {
      if (!validateEmail(companyInfo.email)) {
        addErrorToast('Invalid email.')
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }

    if (
      companyInfo.city.length === 0 ||
      companyInfo.name.length === 0 ||
      companyInfo.email.length === 0 ||
      companyInfo.address1.length === 0 ||
      selectedCountry.length === 0 ||
      !validateEmail(companyInfo.email)
    ) {
      return;
    }
    setIsLoading(true);
    toastId.current = addInfoToast('Saving company information', false);
    getClient()
      .then(client => {
        const newCompanyData = {
          ...companyInfo,
          defaultCurrency: selectedCurrency[0].value,
          weightUnit: selectedWeightUnit[0].value,
          dimensionUnit: selectedDimensionUnit[0].value,
          barcodeFormat: selectedBarcode[0].value,
          country: selectedCountry[0].value
        };
        client
          .editCompany({
            companyId: getCompanyId(user),
            companyInfo: newCompanyData
          })
          .then((response: any) => {
            setIsLoading(false);
            updateToast(toastId.current, 'Company information saved', 'success', 5000);
            dispatch(setCompanyData(newCompanyData));
          })
          .catch((err) => {
            setIsLoading(false);
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        setIsLoading(false);
        updateToast(toastId.current, err.message, 'error', 5000);
      })
  }

  return (
    <DisplayRound overflow>
      <styled.BodyWrapper>
        <CompanyLogoSection companyInfo={companyInfo} />
        <FormCaption caption={`${word('global.company.name')}*`}>
          <InputCustom disabled={!editable} value={companyInfo.name} onChange={(e) => handleChange('name', e)} error={nameError} />
        </FormCaption>
        <FormCaption caption={`${word('global.company.email')}*`}>
          <InputCustom disabled={!editable} value={companyInfo.email} onChange={(e) => handleChange('email', e)} error={emailError} />
        </FormCaption>
        <SplitInput>
          <FormCaption caption={word('global.vat.number')}>
            <InputCustom disabled={!editable} value={companyInfo.vatNumber} onChange={(e) => handleChange('vatNumber', e)} />
          </FormCaption>
          <FormCaption caption={word('global.eori.number')}>
            <InputCustom disabled={!editable} value={companyInfo.eoriNumber} onChange={(e) => handleChange('eoriNumber', e)} />
          </FormCaption>
        </SplitInput>
        <SplitInput>
          <FormCaption caption={word('global.barcode-format')}>
            <Select
              disabled={!editable}
              values={barcodeFormats}
              defaultValues={selectedBarcode}
              selectedValues={selectedBarcode}
              onSelectedChanged={setSelectedBarcode}
            />
          </FormCaption>
          <FormCaption caption={word('global.ioss')}>
            <InputCustom disabled={!editable} value={companyInfo.ioss?.value} onChange={(e) => handleChange('ioss', e)} />
          </FormCaption>
        </SplitInput>
        <FormCaption caption={word('global.default.delivery.method')}>
          <Select disabled={!editable} />
        </FormCaption>
        <FormCaption caption={word('global.timezone')}>
          <Select disabled={!editable} />
        </FormCaption>
        <SplitInput>
          <FormCaption caption={word('global.currency')}>
            <Select
              disabled={!editable}
              values={currencies}
              defaultValues={selectedCurrency}
              selectedValues={selectedCurrency}
              onSelectedChanged={setSelectedCurrency}
            />
          </FormCaption>
          <FormCaption caption={word('global.purchase.order.prefix')}>
            <InputCustom disabled={!editable} value={companyInfo?.purchaseOrderPrefix} onChange={(e) => handleChange('purchaseOrderPrefix', e)} />
          </FormCaption>
        </SplitInput>
        <SplitInput>
          <FormCaption caption={word('global.weight.unit')}>
            <Select
              disabled={!editable}
              values={weightUnits}
              defaultValues={selectedWeightUnit}
              selectedValues={selectedWeightUnit}
              onSelectedChanged={setSelectedWeightUnit}
            />
          </FormCaption>
          <FormCaption caption={word('global.dimensions.unit')}>
            <Select
              disabled={!editable}
              values={dimensionUnits}
              defaultValues={selectedDimensionUnit}
              selectedValues={selectedDimensionUnit}
              onSelectedChanged={setSelectedDimensionUnit}
            />
          </FormCaption>
        </SplitInput>
        <FormCaption caption={word('global.invoice.note')}>
          <InputCustom disabled={!editable} value={companyInfo.invoiceNote} onChange={(e) => handleChange('invoiceNote', e)} />
        </FormCaption>
        <FormSection title={word('global.company.main.address')} description={'Hidden tooltip'} list>
          <FormCaption caption={`${word('global.address-line.1')}*`}>
            <InputCustom disabled={!editable} value={companyInfo.address1} onChange={(e) => handleChange('address1', e)} error={address1Error} />
          </FormCaption>
          <FormCaption caption={word('global.address-line.2')}>
            <InputCustom disabled={!editable} value={companyInfo.address2} onChange={(e) => handleChange('address2', e)} />
          </FormCaption>
          <FormCaption caption={word('global.address-line.3')}>
            <InputCustom disabled={!editable} value={companyInfo.address3} onChange={(e) => handleChange('address3', e)} />
          </FormCaption>
          <SplitInput>
            <FormCaption caption={`${word('global.city')}*`}>
              <InputCustom disabled={!editable}  value={companyInfo.city} onChange={(e) => handleChange('city', e)} error={cityError}/>
            </FormCaption>
            <FormCaption caption={word('global.region')}>
              <InputCustom disabled={!editable} value={companyInfo.region} onChange={(e) => handleChange('region', e)} />
            </FormCaption>
          </SplitInput>
          <SplitInput>
            <FormCaption caption={`${word('global.postcode')}*`}>
              <InputCustom disabled={!editable} value={companyInfo.postcode} onChange={(e) => handleChange('postcode', e)} error={postcodeError} />
            </FormCaption>
            <FormCaption caption={`${word('global.country')}*`}>
              <Select
                searchable
                position='top'
                values={countries}
                selectedValues={selectedCountry}
                onSelectedChanged={setSelectedCountry}
                disabled={!editable}
                error={countryError}
              />
            </FormCaption>
          </SplitInput>
          <FormCaption caption={word('global.phone')}>
            <InputCustom disabled={!editable} value={companyInfo.phone} onChange={(e) => handleChange('phone', e)} />
          </FormCaption>
          {editable && (
            <SplitInput>
              <FormCaption></FormCaption>
              <MainButton children={word('global.save')} onClick={onSave} disabled={isLoading} />
            </SplitInput>
          )}
        </FormSection>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
