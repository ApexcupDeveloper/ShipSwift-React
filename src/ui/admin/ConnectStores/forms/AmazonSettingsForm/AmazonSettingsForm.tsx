import { useLocale } from '../../../../../assets/locale';
import { MainButton } from '../../../../@core/modules/Button';

import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { AvatarLetter, SmallAlert } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';
import { DictionaryMap } from '../../components/DictionaryMap';
import { SettingsSwitch } from '../../components/SettingsSwitch';

import * as styled from './AmazonSettingsForm.styled';

type Props = {};

const authorized = false;

export const AmazonSettingsForm: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      {!authorized && (
        <styled.AuthorizeWrapper>
          <SmallAlert type='warning' description={word('setup-store.not-active-store')} />
          <MainButton children={word('global.authorize.connection')} />
        </styled.AuthorizeWrapper>
      )}
      {authorized && <DictionaryMap field={word('global.token')} value={'A1X12324dj0390'} />}
      <FormSection title={word('settings')} list>
        <AvatarLetter name={'Amazon 1'} />
        <SplitInput>
          <FormCaption caption={word('global.name')}>
            <InputCustom />
          </FormCaption>
          <FormCaption caption={word('global.short.name')}>
            <InputCustom />
          </FormCaption>
        </SplitInput>
        <SplitInput>
          <FormCaption caption={word('global.currency')}>
            <Select />
          </FormCaption>
          <FormCaption caption={word('global.marketplace')}>
            <Select />
          </FormCaption>
        </SplitInput>
        <FormCaption caption={word('global.store.email')}>
          <InputCustom />
        </FormCaption>
      </FormSection>
      <FormSection title={word('setup-store.how-synced')} list>
        <SmallAlert description={word('setup-store.how-synced.description')} />
        <SettingsSwitch tooltip={'Some help description with tooltip'} name={word('setup-store.search-product')} />
        <SettingsSwitch tooltip={'Some help description with tooltip'} name={word('setup-store.same-name')} />
        <SettingsSwitch tooltip={'Some help description with tooltip'} name={word('setup-store.with-same-sku')} />
      </FormSection>
    </styled.BodyWrapper>
  );
};
