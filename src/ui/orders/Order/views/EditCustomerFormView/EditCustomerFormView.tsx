import { useCallback, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { InputSearch } from '../../../../@core/modules/Input';
import { AddCustomerForm } from '../../../../settings/Customers/forms/AddCustomerForm';

import * as styled from './EditCustomerFormView.styled';

type Props = {
  visible?: boolean;
};

export const EditCustomerFormView: React.VFC<Props> = ({ visible = true }) => {
  const { word } = useLocale();

  const [showCreateNew, setShowCreateNew] = useState(true);
  const onShowCreate = useCallback(() => setShowCreateNew(true), []);

  return (
    <styled.BodyWrapper>
      <styled.SpecialButtonWithContent>
        <InputSearch />
        <MainButton flat type='text-green' children={word('global.create.new.customer')} onClick={onShowCreate} />
      </styled.SpecialButtonWithContent>
      {showCreateNew && <AddCustomerForm />}
    </styled.BodyWrapper>
  );
};
