import { useLocale } from '../../../../../../assets/locale';
import { useCustomerFilter } from '../../hooks/useCustomerFilter';

import { Caption } from '../../../Container';
import { InputCustom } from '../../../Input';
import { List } from '../../components/List';

type Props = {};

export const CustomerFilter: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { data, handleChange } = useCustomerFilter();

  return (
    <List>
      <Caption caption={word('global.name')}>
        <InputCustom name="name" value={data?.name} handleChangeEvent={handleChange} />
      </Caption>
      <Caption caption={word('global.email-address')}>
        <InputCustom name="email" value={data?.email} handleChangeEvent={handleChange} />
      </Caption>
      <Caption caption={word('global.postcode')}>
        <InputCustom name="postcode" value={data?.postcode} handleChangeEvent={handleChange} />
      </Caption>
    </List>
  );
};
