import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { SplitInput } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';

type Props = {};

export const AddressSection: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <>
      <FormCaption caption={word('global.name')}>
        <InputCustom />
      </FormCaption>
      <FormCaption caption={word('global.company')}>
        <InputCustom />
      </FormCaption>
      <SplitInput>
        <FormCaption caption={word('global.phone')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.email')}>
          <InputCustom />
        </FormCaption>
      </SplitInput>
      <FormCaption caption={word('global.address-line.1')}>
        <InputCustom />
      </FormCaption>
      <FormCaption caption={word('global.address-line.2')}>
        <InputCustom />
      </FormCaption>
      <SplitInput>
        <FormCaption caption={word('global.town-or-city')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.state-or-country')}>
          <InputCustom />
        </FormCaption>
      </SplitInput>
      <SplitInput>
        <FormCaption caption={word('global.postcode-or-zipcode')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.country')}>
          <Select />
        </FormCaption>
      </SplitInput>
    </>
  );
};
