import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { getCompanyId, validateEmail } from '../../../../../utils';
import { MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { AddressSection, FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { DisplayRound } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { countries } from '../../../General/pages/GeneralPage/GeneralPage.config';
import * as styled from './AddressView.styled';

type Props = {
  data: CompanyInfo.AsObject
};

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
];

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
];

type SelectProps = {
  label: string,
  value: string
}


export const AddressView: React.VFC<Props> = ({ data }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useGrpcClient();
  const toastId = useRef<any>(null);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState<SelectProps[]>([weightUnits[0]]);
  const [selectedCountry, setSelectedCountry] = useState<SelectProps[]>([]);
  const [selectedDimensionUnit, setSelectedDimensionUnit] = useState<SelectProps[]>([dimensionUnits[0]]);
  const [selectedCurrency, setSelectedCurrency] = useState<SelectProps[]>([currencies[0]]);
  const [isLoading, setIsLoading] = useState(false);
  const [editable, setEditable] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [address1Error, setAddress1Error] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [postcodeError, setPostcodeError] = useState(false);

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
    setCompanyInfo(data);
    if (data.defaultCurrency === '' || data.defaultCurrency === 'USD') {
      setSelectedCurrency([currencies[0]]);
    } else if (data.defaultCurrency === 'GBP') {
      setSelectedCurrency([currencies[1]]);
    } else {
      setSelectedCurrency([currencies[2]]);
    }

    if (data.weightUnit === '' || data.weightUnit === 'g') {
      setSelectedWeightUnit([weightUnits[0]]);
    } else if (data.weightUnit === 'kg') {
      setSelectedWeightUnit([weightUnits[1]]);
    } else if (data.weightUnit === 'lb') {
      setSelectedWeightUnit([weightUnits[2]]);
    } else {
      setSelectedWeightUnit([weightUnits[3]]);
    }

    if (data.dimensionUnit === '' || data.dimensionUnit === 'cm') {
      setSelectedDimensionUnit([dimensionUnits[0]]);
    } else {
      setSelectedDimensionUnit([dimensionUnits[1]]);
    }

    if (data.country) {
      setSelectedCountry(countries.filter(item => item.value === data.country))
    }
  }, [data])

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
    if(editable) {
      if (companyInfo.name.length === 0) {
        setNameError(true);
      } else {
        setNameError(false);
      }
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
      if (companyInfo.address1.length === 0) {
        setAddress1Error(true);
      } else {
        setAddress1Error(false);
      }
      if (selectedCountry.length === 0) {
        setCountryError(true);
      } else {
        setCountryError(false);
      }
      if (companyInfo.postcode.length === 0) {
        setPostcodeError(true);
      } else {
        setPostcodeError(false);
      }
  
      if (
        companyInfo.name.length === 0 ||
        companyInfo.email.length === 0 ||
        companyInfo.address1.length === 0 ||
        selectedCountry.length === 0 ||
        !validateEmail(companyInfo.email)
      ) {
        return;
      }
      setIsLoading(true);
      toastId.current = addInfoToast('Saving wareshouse information', false);
      getClient()
        .then(client => {
          client
            .editWarehouse({
              companyId: companyId,
              warehouseId: data.id,
              warehouseInfo: {
                ...companyInfo,
                defaultCurrency: selectedCurrency[0].value,
                weightUnit: selectedWeightUnit[0].value,
                dimensionUnit: selectedDimensionUnit[0].value,
                country: selectedCountry[0].value
              }
            })
            .then((response: any) => {
              setEditable(false);
              setIsLoading(false);
              updateToast(toastId.current, 'Wareshouse information saved', 'success', 5000);
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
    } else {
      setEditable(true);
    }
  }

  return (
    <DisplayRound overflow>
      <styled.BodyWrapper>
        <styled.ButtonWrapper>
        <MainButton children={editable ? word('global.save') : word('global.edit')} onClick={onSave} disabled={isLoading} />
        </styled.ButtonWrapper>
        <SplitInput>
          <styled.SectionWrapper>
            <styled.SectionTitle>{word('settings.warehouse')}</styled.SectionTitle>
            <FormCaption caption={word('global.name')}>
              <InputCustom value={companyInfo.name} onChange={(e) => handleChange('name', e)} error={nameError} disabled={!editable} />
            </FormCaption>
            <FormCaption caption={word('global.phone')}>
              <InputCustom value={companyInfo.phone} onChange={(e) => handleChange('phone', e)} disabled={!editable} />
            </FormCaption>
            <FormCaption caption={word('global.email')}>
              <InputCustom value={companyInfo.email} onChange={(e) => handleChange('email', e)} error={emailError} disabled={!editable} />
            </FormCaption>
          </styled.SectionWrapper>
          <styled.SectionWrapper>
            <styled.SectionTitle>{word('global.units')}</styled.SectionTitle>
            <FormCaption caption={word('global.currency')}>
              <Select
                values={currencies}
                defaultValues={selectedCurrency}
                selectedValues={selectedCurrency}
                onSelectedChanged={setSelectedCurrency}
                disabled={!editable}
              />
            </FormCaption>
            <FormCaption caption={word('global.weight.unit')}>
              <Select
                values={weightUnits}
                defaultValues={selectedWeightUnit}
                selectedValues={selectedWeightUnit}
                onSelectedChanged={setSelectedWeightUnit}
                disabled={!editable}
              />
            </FormCaption>
            <FormCaption caption={word('global.dimensions.unit')}>
              <Select
                values={dimensionUnits}
                defaultValues={selectedDimensionUnit}
                selectedValues={selectedDimensionUnit}
                onSelectedChanged={setSelectedDimensionUnit}
                disabled={!editable}
              />
            </FormCaption>
          </styled.SectionWrapper>
        </SplitInput>
        <SplitInput>
          <styled.SectionWrapper>
            <styled.SectionTitle>{word('global.address')}</styled.SectionTitle>
            <FormCaption caption={word('global.address-line.1')}>
              <InputCustom value={companyInfo.address1} onChange={(e) => handleChange('address1', e)} error={address1Error} disabled={!editable} />
            </FormCaption>
            <FormCaption caption={word('global.address-line.2')}>
              <InputCustom value={companyInfo.address2} onChange={(e) => handleChange('address2', e)} disabled={!editable} />
            </FormCaption>
            <FormCaption caption={word('global.address-line.3')}>
              <InputCustom value={companyInfo.address3} onChange={(e) => handleChange('address3', e)} disabled={!editable} />
            </FormCaption>
          </styled.SectionWrapper>
          <styled.SectionWrapper>
            <styled.SectionTitle></styled.SectionTitle>
            <FormCaption caption={word('global.city')}>
              <InputCustom value={companyInfo.city} onChange={(e) => handleChange('city', e)} disabled={!editable} />
            </FormCaption>
            <FormCaption caption={word('global.region')}>
              <InputCustom value={companyInfo.region} onChange={(e) => handleChange('region', e)} disabled={!editable} />
            </FormCaption>
            <FormCaption caption={word('global.postcode')}>
              <InputCustom value={companyInfo.postcode} onChange={(e) => handleChange('postcode', e)} error={postcodeError} disabled={!editable} />
            </FormCaption>
            <FormCaption caption={word('global.country')}>
              <Select
                searchable
                values={countries}
                selectedValues={selectedCountry}
                onSelectedChanged={setSelectedCountry}
                error={countryError}
                disabled={!editable}
              />
            </FormCaption>
          </styled.SectionWrapper>
        </SplitInput>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
