import { useLocale } from '../../../../../../assets/locale';
import { useOrderFilter } from '../../hooks/useOrderFilter';

import { Caption } from '../../../Container';
import { InputCustom } from '../../../Input';
import { List } from '../../components/List';

type Props = {};
const normalize = (value: any) => value || '';

export const OrderFilter: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { data, handleChange } = useOrderFilter();

  return (
    <List>
      <Caption caption={word('order.number')}>
        <InputCustom type='number' name="number" value={normalize(data?.number)} handleChangeEvent={handleChange} />
      </Caption>
      <Caption caption={word('product.name')}>
        <InputCustom name="name" value={data?.name} handleChangeEvent={handleChange} />
      </Caption>
      <Caption caption={word('global.sku')}>
        <InputCustom type='number' name="sku" value={normalize(data?.sku)} handleChangeEvent={handleChange} />
      </Caption>
    </List>
  );
};
