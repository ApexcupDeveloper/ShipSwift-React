import { useMemo } from 'react';

import { ItemRaw, PaymentsLabel } from '../../../../@core/modules/ListBuilder';

type Props = {
  date: string;
  order: string;
  paymentMethod: string;
  paymentStatus: PaymentsLabel;
  amount: number;
  details: string[];
};

const currencySymbol = '£';

export const BillingRaw: React.VFC<Props> = ({ date, order, paymentMethod, paymentStatus, amount, details }) => {
  const formattedTotal = useMemo(() => `${currencySymbol}${amount}`, [amount]);

  return (
    <ItemRaw>
      <ItemRaw.Title children={date} />
      <ItemRaw.Title bold children={`Accelerator (${order})`} />
      <ItemRaw.Title children={paymentMethod} />
      <ItemRaw.Payments label={paymentStatus} />
      <ItemRaw.Title children={formattedTotal} />
      <ItemRaw.Merge flex={.5}>
        {useMemo(() => details.map((item) => (
          <ItemRaw.Title children={item} />
        )), [details])}
      </ItemRaw.Merge>
    </ItemRaw>
  );
};
