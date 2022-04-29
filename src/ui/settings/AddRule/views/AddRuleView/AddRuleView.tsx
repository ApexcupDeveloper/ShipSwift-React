import { useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { Checkbox } from '../../../../@core/modules/Checkbox';
import { MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { DisplayRound, SmallAlert } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';
import { IRulesObject, RulesBuilder } from '../../../../@core/modules/RulesBuilder';

import * as styled from './AddRuleView.styled';

type Props = {};

export const AddRuleView: React.VFC<Props> = () => {
  const [rules, setRules] = useState<IRulesObject[]>([]);
  const { word } = useLocale();

  return (
    <DisplayRound overflow>
      <styled.BodyWrapper>
        <SmallAlert description={word('rules.alert.only-applied-to-orders')} />
        <FormSection title={word('global.add.name')} list>
          <styled.Description children={word('rules.description.easy-name')} />
          <FormCaption caption={word('global.name')}>
            <InputCustom />
          </FormCaption>
        </FormSection>
        <FormSection title={word('global.when')} showSplitter>
          <FormCaption caption={word('global.when.order')}>
            <Select />
          </FormCaption>
        </FormSection>
        <FormSection title={word('global.if')} showSplitter>
          <RulesBuilder values={[] as any[]} rules={rules} onChange={setRules} />
        </FormSection>
        <FormSection list title={word('global.then')} showSplitter>
          <styled.Description children={word('rules.description.apply-all')} />
          <FormSection list title={word('global.preferred.shipping.options')}>
            <FormCaption caption={word('global.carrier')}>
              <Select />
            </FormCaption>
            <FormCaption caption={word('global.service')}>
              <Select />
            </FormCaption>
            <FormCaption caption={word('global.carrier.packaging')}>
              <Select />
            </FormCaption>
          </FormSection>
          <FormSection list title={word('global.order.tags')}>
            <FormCaption caption={word('global.tags')}>
              <Select />
            </FormCaption>
          </FormSection>
          <FormSection list title={word('global.printing.templates')}>
            <styled.SubSection>
              <FormCaption caption={word('global.invoices')}>
                <Select />
              </FormCaption>
              <Checkbox label={word('rules.description.auto-print')} />
            </styled.SubSection>
            <styled.SubSection>
              <FormCaption caption={word('global.packing.slips')}>
                <Select />
              </FormCaption>
              <Checkbox label={word('rules.description.auto-print')} />
            </styled.SubSection>
          </FormSection>
          <FormSection list title={word('global.internal.note')}>
            <FormCaption>
              <InputCustom />
            </FormCaption>
          </FormSection>
        </FormSection>
        <MainButton children={word('global.create.rule')} />
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
