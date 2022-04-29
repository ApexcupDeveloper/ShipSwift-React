import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';

import * as styled from './AddUserForm.styled';

type Props = {};

export const AddUserForm: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <FormSection list>
        <FormCaption caption={word('global.name')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.email')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.role')}>
          <Select />
        </FormCaption>
      </FormSection>
      <FormSection title={word('global.additional')} list>
        <FormCaption caption={word('global.timezone')}>
          <Select />
        </FormCaption>
        <FormCaption caption={word('global.default.warehouse')}>
          <Select />
        </FormCaption>
        <FormCaption caption={word('global.default.store')}>
          <Select />
        </FormCaption>
      </FormSection>
    </styled.BodyWrapper>
  );
};
