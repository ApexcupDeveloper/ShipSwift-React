import { useCallback, useEffect, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom, InputSearch } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { SummaryRaw } from '../../components/SummaryRaw';
import { MainButton } from '../../../../@core/modules/Button';

import * as styled from './AddOrderForm.styled';
import { AddCustomerForm } from '../../../../settings/Customers/forms/AddCustomerForm';

type Props = {
  visible?: boolean;
};

const currencySymbol = '£';

export const AddOrderForm: React.VFC<Props> = ({ visible = true }) => {
  const { word } = useLocale();

  const [showCreateNew, setShowCreateNew] = useState(false);
  const onShowCreate = useCallback(() => setShowCreateNew(true), []);

  useEffect(() => {
    !visible && setShowCreateNew(visible);
  }, [visible]);

  return (
    <styled.BodyWrapper>
      <SplitInput>
        <FormCaption caption={word('global.channel')}>
          <Select />
        </FormCaption>
        <FormCaption caption={word('global.due-date')}>
          <Select />
        </FormCaption>
      </SplitInput>
      <FormSection title={word('global.customer')} list={showCreateNew}>
        <styled.SpecialButtonWithContent>
          <InputSearch />
          <MainButton flat type="text-green" children={word('global.create.new.customer')} onClick={onShowCreate} />
        </styled.SpecialButtonWithContent>
      </FormSection>
      {showCreateNew && <AddCustomerForm />}
      <FormSection title={word('global.product')}>
        <InputSearch />
      </FormSection>
      <FormSection title={word('global.shipping')}>
        <SplitInput>
          <FormCaption caption={word('global.shipping-method')}>
            <Select />
          </FormCaption>
          <FormCaption caption={word('global.shipping-cost')}>
            <InputCustom prefix={currencySymbol} />
          </FormCaption>
        </SplitInput>
      </FormSection>
      <FormSection title={word('global.discount')}>
        <SplitInput>
          <FormCaption caption={word('global.discount.shipping')}>
            <InputCustom prefix={currencySymbol} />
          </FormCaption>
          <FormCaption caption={word('global.discount.order-additional')}>
            <InputCustom prefix={currencySymbol} />
          </FormCaption>
        </SplitInput>
      </FormSection>
      <FormSection title={word('global.order.summary')}>
        <SummaryRaw title={word('global.subtotal')} count={122} prefix={currencySymbol} />
        <SummaryRaw title={word('global.discount')} count={22} prefix={currencySymbol} />
        <SummaryRaw title={word('global.total.tax')} count={3} prefix={currencySymbol} />
        <SummaryRaw title={word('global.order.total')} bold count={3} prefix={currencySymbol} />
      </FormSection>
      <FormSection title={word('global.payment')}>
        <SplitInput>
          <FormCaption caption={word('global.payment.type')}>
            <Select />
          </FormCaption>
          <FormCaption caption={word('global.payment.reference')}>
            <InputCustom prefix={currencySymbol} />
          </FormCaption>
        </SplitInput>
      </FormSection>
      <FormSection title={word('global.order.notes')} list>
        <FormCaption caption={word('global.internal.notes')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.customer.notes')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.tag')}>
          <InputCustom />
        </FormCaption>
      </FormSection>
    </styled.BodyWrapper>
  );
};
