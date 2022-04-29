import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { OrdersRaw } from './OrdersRaw';

import * as styled from './OrdersList.styled';

type Props = {};

type RawProps = React.ComponentProps<typeof OrdersRaw>;
const mockList: (RawProps & { key: string })[] = [
  {
    key           : 'id1',
    name          : 'CSO-0001-43435',
    orderDate     : '02/05/2020',
    orderItems    : 8,
    country       : 'US',
    shippingMethod: 'Royal Mail',
    total         : 15.05,
    orderStatus   : 'on-hold',
  },
  {
    key           : 'id2',
    name          : 'CSO-0001-43435',
    orderDate     : '02/05/2020',
    orderItems    : 8,
    country       : 'US',
    shippingMethod: 'Royal Mail',
    total         : 15.05,
    orderStatus   : 'cancelled',
  },
  {
    key           : 'id3',
    name          : 'CSO-0001-43435',
    orderDate     : '02/05/2020',
    orderItems    : 8,
    country       : 'US',
    shippingMethod: 'Royal Mail',
    total         : 15.05,
    orderStatus   : 'shipped',
  },
];

export const OrdersList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Merge flex={1.5}>
          <TitleRaw.Checkbox />
          <TitleRaw.Item children={word('order.number')} />
        </TitleRaw.Merge>
        <TitleRaw.Item children={word('order.date')} />
        <TitleRaw.Item children={word('order.customer-name')} />
        <TitleRaw.Item children={word('order.country')} />
        <TitleRaw.Item children={word('order.shipping-method')} />
        <TitleRaw.Item children={word('order.total')} />
        <TitleRaw.Item children={word('order.status')} />
      </TitleRaw>
      {mockList.map((props) => (
        <OrdersRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
