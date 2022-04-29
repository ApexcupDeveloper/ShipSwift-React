import { useEffect, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { Checkbox } from '../../../../@core/modules/Checkbox';
import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { AddressSection } from '../../sections/AddressSection';

import * as styled from './AddWarehouseForm.styled';

type Props = {
  visible?: boolean;
};

export const AddWarehouseForm: React.VFC<Props> = ({ visible = true }) => {
  const { word } = useLocale();

  const [sameAsBilling, setSameAsBilling] = useState(true);

  useEffect(() => {
    !visible && setSameAsBilling(false);
  }, [visible]);

  return (
    <styled.BodyWrapper>
      <FormSection list>
        <FormCaption caption={word('global.name')}>
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
      </FormSection>
      <FormSection title={word('global.billing.address')} list>
        <AddressSection />
      </FormSection>
      <FormSection title={word('global.shipping.address')} list>
        <Checkbox checked={sameAsBilling} onChange={setSameAsBilling} label={word('global.same-as-billing')} />
        {!sameAsBilling && <AddressSection />}
      </FormSection>
    </styled.BodyWrapper>
  );
};
