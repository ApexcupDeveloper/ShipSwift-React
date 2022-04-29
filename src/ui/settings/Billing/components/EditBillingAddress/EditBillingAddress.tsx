import { useLocale } from '../../../../../assets/locale';
import { useState, useCallback, useEffect } from 'react';

import { InputCustom } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { FormCaption } from '../../../../@core/modules/Container';
import { SplitInput } from '../../../../@core/modules/FormBuilder';

import { countries } from '../../../General/pages/GeneralPage/GeneralPage.config';

type Props = {
  addressData: AddressProps | undefined;
  onChange: (key: string, value: string) => void;
};

type AddressProps = {
  city: string;
  country: string;
  line1: string;
  line2: string;
  postalCode: string;
  state: string;
}

type SelectProps = {
  label: string,
  value: string
}

export const EditBillingAddress: React.FC<Props> = ({ addressData, onChange }) => {
  const { word } = useLocale();
  const [selectedCountry, setSelectedCountry] = useState<SelectProps[]>([]);

  useEffect(() => {
    if(addressData && addressData.country) {
      setSelectedCountry(countries.filter(item => item.value === addressData.country))
    }
  }, [addressData])

  return (
    <ListSection>
      <FormCaption caption={`${word('global.address')} 1`}>
        <InputCustom value={addressData ? addressData.line1 : ''} onChange={(e) => onChange('line1', e)} />
      </FormCaption>
      <FormCaption caption={`${word('global.address')} 2`}>
        <InputCustom value={addressData ? addressData.line2 : ''} onChange={(e) => onChange('line2', e)} />
      </FormCaption>
      <SplitInput>
        <FormCaption caption={word('global.town-or-city')}>
          <InputCustom value={addressData ? addressData.city : ''} onChange={(e) => onChange('city', e)} />
        </FormCaption>
        <FormCaption caption={word('global.state')}>
          <InputCustom value={addressData ? addressData.state : ''} onChange={(e) => onChange('state', e)} />
        </FormCaption>
      </SplitInput>
      <SplitInput>
        <FormCaption caption={word('global.postcode-or-zipcode')}>
          <InputCustom value={addressData ? addressData.postalCode : ''} onChange={(e) => onChange('postalCode', e)} />
        </FormCaption>
        <FormCaption caption={word('global.country')}>
          <Select
            onSelectedChanged={(val: any) => {
              setSelectedCountry(val);
              onChange('country', val[0].value)
            }}
            searchable
            values={countries}
            selectedValues={selectedCountry}
            position="top"
          />
        </FormCaption>
      </SplitInput>
    </ListSection>
  );
};
