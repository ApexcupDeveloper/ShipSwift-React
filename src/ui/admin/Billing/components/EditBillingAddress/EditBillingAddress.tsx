import { useLocale } from '../../../../../assets/locale';
import { useState, useCallback } from 'react';

import { InputCustom } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { FormCaption } from '../../../../@core/modules/Container';
import { SplitInput } from '../../../../@core/modules/FormBuilder';

import * as config from './EditBillingAddress.config';

const mocks = {
  name: 'John Richards',
  company: 'Company name',
  phone: '+3(989) 7312879',
  email: 'email@email.com',
  address: ['4517 Washington Ave. Manchester, Kentucky 39495', '3517 W. Gray St. Utica, Pennsylvania 57867'],
  townOrCity: '801 Barton Springs Rd',
  stateOrCountry: 'State',
  postcodeOrZipcode: '76863',
  country: 'Ukraine',
};

type Props = {};

export const EditBillingAddress: React.FC<Props> = () => {
  const { word } = useLocale();
  const [selectedValues, setSelectedValues] = useState(config.selectedValues);

  const onSelectedChanged = useCallback((select) => setSelectedValues(select), []);

  return (
    <ListSection>
      <FormCaption caption={word('global.name')}>
        <InputCustom value={mocks.name} />
      </FormCaption>
      <FormCaption caption={word('global.company')}>
        <InputCustom value={mocks.company} />
      </FormCaption>
      <SplitInput>
        <FormCaption caption={word('global.phone-number')}>
          <InputCustom value={mocks.phone} />
        </FormCaption>
        <FormCaption caption={word('global.email')}>
          <InputCustom value={mocks.email} />
        </FormCaption>
      </SplitInput>
      {mocks.address.map((item, i) => (
        <FormCaption caption={`${word('global.address')} ${i + 1}`}>
          <InputCustom value={mocks.address[i]} />
        </FormCaption>
      ))}
      <SplitInput>
        <FormCaption caption={word('global.town-or-city')}>
          <InputCustom value={mocks.townOrCity} />
        </FormCaption>
        <FormCaption>
          <InputCustom value={mocks.stateOrCountry} />
        </FormCaption>
      </SplitInput>
      <SplitInput>
        <FormCaption caption={word('global.postcode-or-zipcode')}>
          <InputCustom value={mocks.postcodeOrZipcode} />
        </FormCaption>
        <FormCaption caption={word('global.country')}>
          <Select
            onSelectedChanged={onSelectedChanged}
            defaultValues={config.defaultValues}
            values={config.selectValues}
            selectedValues={selectedValues}
          />
        </FormCaption>
      </SplitInput>
    </ListSection>
  );
};
