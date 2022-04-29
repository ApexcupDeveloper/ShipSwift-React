import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { DisplayRound } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';

import { CompanyLogoSection } from '../../sections/CompanyLogoSection';

import * as styled from './GeneralPage.styled';

type Props = {};

export const GeneralPage: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <DisplayRound overflow>
      <styled.BodyWrapper>
        <CompanyLogoSection />
        <FormCaption caption={word('global.company.name')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.company.email')}>
          <InputCustom />
        </FormCaption>
        <SplitInput>
          <FormCaption caption={word('global.vat.number')}>
            <InputCustom />
          </FormCaption>
          <FormCaption caption={word('global.eori.number')}>
            <InputCustom />
          </FormCaption>
        </SplitInput>
        <FormCaption caption={word('global.default.delivery.method')}>
          <Select />
        </FormCaption>
        <FormCaption caption={word('global.timezone')}>
          <Select />
        </FormCaption>
        <SplitInput>
          <FormCaption caption={word('global.currency')}>
            <Select />
          </FormCaption>
          <FormCaption caption={word('global.purchase.order.prefix')}>
            <InputCustom />
          </FormCaption>
        </SplitInput>
        <SplitInput>
          <FormCaption caption={word('global.weight.unit')}>
            <Select />
          </FormCaption>
          <FormCaption caption={word('global.dimensions.unit')}>
            <InputCustom disabled />
          </FormCaption>
        </SplitInput>
        <FormCaption caption={word('global.invoice.note')}>
          <InputCustom />
        </FormCaption>
        <FormSection title={word('global.company.main.address')} description={'Hidden tooltip'} list>
          <FormCaption caption={word('global.phone')}>
            <InputCustom />
          </FormCaption>
          <FormCaption caption={word('global.address-line.1')}>
            <InputCustom />
          </FormCaption>
          <FormCaption caption={word('global.address-line.2')}>
            <InputCustom />
          </FormCaption>
          <FormCaption caption={word('global.address-line.3')}>
            <InputCustom />
          </FormCaption>
          <SplitInput>
            <FormCaption caption={word('global.country')}>
              <Select />
            </FormCaption>
            <FormCaption caption={word('global.region')}>
              <InputCustom />
            </FormCaption>
          </SplitInput>
          <SplitInput>
            <FormCaption caption={word('global.city')}>
              <InputCustom />
            </FormCaption>
            <FormCaption caption={word('global.postcode')}>
              <InputCustom />
            </FormCaption>
          </SplitInput>
        </FormSection>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
