import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { MainButton } from '../../../../@core/modules/Button';

import { useRef, useState } from 'react';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { getCompanyId, validateEmail } from '../../../../../utils';
import * as styled from './AddWarehouseSection.styled';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';
import { countries } from '../../../General/pages/GeneralPage/GeneralPage.config';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';

type Props = {
  onClose: () => void;
};

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


export const AddWarehouseSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const toastId = useRef<any>(null);
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useGrpcClient();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [address1Error, setAddress1Error] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [postcodeError, setPostcodeError] = useState(false);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState<SelectProps[]>([weightUnits[0]]);
  const [selectedCountry, setSelectedCountry] = useState<SelectProps[]>([]);
  const [selectedDimensionUnit, setSelectedDimensionUnit] = useState<SelectProps[]>([dimensionUnits[0]]);
  const [selectedCurrency, setSelectedCurrency] = useState<SelectProps[]>([currencies[0]]);
  const [isLoading, setIsLoading] = useState(false);
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
  });

  const handleChange = (type: string, value: string) => {
    if (type === 'ioss') {
      setCompanyData((prevState) => ({
        ...prevState,
        [type]: {
          value: value
        },
      }))
    } else {
      setCompanyData((prevState) => ({
        ...prevState,
        [type]: value,
      }))
    }
  }

  const onSave = () => {
    if (companyData.name.length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
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
    if (companyData.address1.length === 0) {
      setAddress1Error(true);
    } else {
      setAddress1Error(false);
    }
    if (selectedCountry.length === 0) {
      setCountryError(true);
    } else {
      setCountryError(false);
    }
    if (companyData.postcode.length === 0) {
      setPostcodeError(true);
    } else {
      setPostcodeError(false);
    }

    if (
      companyData.name.length === 0 ||
      companyData.email.length === 0 ||
      companyData.address1.length === 0 ||
      selectedCountry.length === 0 ||
      !validateEmail(companyData.email)
    ) {
      return;
    }
    setIsLoading(true);
    toastId.current = addInfoToast('Saving warehouse information', false);
    getClient()
      .then(client => {
        client
          .addWarehouse({
            companyId: getCompanyId(user),
            warehouseInfo: {
              ...companyData,
              defaultCurrency: selectedCurrency[0].value,
              weightUnit: selectedWeightUnit[0].value,
              dimensionUnit: selectedDimensionUnit[0].value,
              country: selectedCountry[0].value
            }
          })
          .then((response: any) => {
            setIsLoading(false);
            updateToast(toastId.current, 'Warehouse information saved', 'success', 5000);
            onClose();
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
    <Modal
      visible
      width={850}
      onClose={onClose}
      title={word('global.add.warehouse')}
      footer={
        <>
          <MainButton type={'text'} flat children={word('global.cancel')} onClick={onClose} />
          <MainButton children={word('global.save')} onClick={onSave} />
        </>
      }
    >
      <styled.BodyWrapper>
        <FormSection list>
          <FormCaption caption={word('global.name') + '*'}>
            <InputCustom value={companyData.name} onChange={(e) => handleChange('name', e)} error={nameError} />
          </FormCaption>
          <SplitInput>
            <FormCaption caption={word('global.phone')}>
              <InputCustom value={companyData.phone} onChange={(e) => handleChange('phone', e)} />
            </FormCaption>
            <FormCaption caption={word('global.email') + '*'}>
              <InputCustom value={companyData.email} onChange={(e) => handleChange('email', e)} error={emailError} />
            </FormCaption>
          </SplitInput>
        </FormSection>
        <FormSection title={word('global.units')} list>
          <SplitInput>
            <FormCaption caption={word('global.weight.unit')}>
              <Select
                values={weightUnits}
                selectedValues={selectedWeightUnit}
                onSelectedChanged={setSelectedWeightUnit}
              />
            </FormCaption>
            <FormCaption caption={word('global.dimensions.unit')}>
              <Select
                values={dimensionUnits}
                selectedValues={selectedDimensionUnit}
                onSelectedChanged={setSelectedDimensionUnit}
              />
            </FormCaption>
          </SplitInput>
          <SplitInput>
            <FormCaption caption={word('global.currency')}>
              <Select
                values={currencies}
                selectedValues={selectedCurrency}
                onSelectedChanged={setSelectedCurrency}
              />
            </FormCaption>
            <FormCaption>
            </FormCaption>
          </SplitInput>
        </FormSection>
        <FormSection title={word('global.address')} list>
          <FormCaption caption={word('global.address-line.1') + '*'}>
            <InputCustom value={companyData.address1} onChange={(e) => handleChange('address1', e)} error={address1Error} />
          </FormCaption>
          <FormCaption caption={word('global.address-line.2')}>
            <InputCustom value={companyData.address2} onChange={(e) => handleChange('address2', e)} />
          </FormCaption>
          <FormCaption caption={word('global.address-line.3')}>
            <InputCustom value={companyData.address3} onChange={(e) => handleChange('address3', e)} />
          </FormCaption>
          <SplitInput>
            <FormCaption caption={word('global.city')}>
              <InputCustom value={companyData.city} onChange={(e) => handleChange('city', e)} />
            </FormCaption>
            <FormCaption caption={word('global.region')}>
              <InputCustom value={companyData.region} onChange={(e) => handleChange('region', e)} />
            </FormCaption>
          </SplitInput>
          <SplitInput>
            <FormCaption caption={word('global.postcode') + '*'}>
              <InputCustom value={companyData.postcode} onChange={(e) => handleChange('postcode', e)} error={postcodeError} />
            </FormCaption>
            <FormCaption caption={word('global.country') + '*'}>
              <Select
                searchable
                values={countries}
                selectedValues={selectedCountry}
                onSelectedChanged={setSelectedCountry}
                error={countryError}
              />
            </FormCaption>
          </SplitInput>
        </FormSection>
      </styled.BodyWrapper>
    </Modal>
  );
};
