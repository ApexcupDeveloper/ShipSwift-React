import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { BillingRaw } from './BillingRaw';

import * as styled from './BillingList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

type RawType = React.ComponentProps<typeof BillingRaw>;
const mockList = generateArray<RawType>(10, (i) => ({
  key: 'id' + i,
  date: '02/05/2020 10:47 PM',
  order: i % 2 ? 'Monthly' : 'Yearly',
  paymentMethod: 'Credit Card',
  paymentStatus: 'unpaid',
  amount: 120,
  details: ['Invoice', 'Receipt'],
}));

export const BillingList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('global.date')} />
        <TitleRaw.Item children={word('global.order')} />
        <TitleRaw.Item children={word('global.payment-method')} />
        <TitleRaw.Item children={word('global.payment-status')} />
        <TitleRaw.Item children={word('global.amount')} />
        <TitleRaw.Merge flex={.5}>
          <TitleRaw.Item children={word('global.details')} />
        </TitleRaw.Merge>
      </TitleRaw>
      {mockList.map((props, index) => (
        <BillingRaw {...props} key={index} />
      ))}
    </styled.BodyWrapper>
  );
};
