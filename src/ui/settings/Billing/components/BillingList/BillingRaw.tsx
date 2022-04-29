import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { convertTime } from '../../../../../utils';
import { convertDate } from '../../../../../utils/convert-time';

import { ItemRaw, PaymentsLabel } from '../../../../@core/modules/ListBuilder';

type Props = {
  invoiceNumber: string;
  total: number;
  status: string;
  pdfUrl: string;
  created: any;
  paymentType: string;
  currency: string;
};

export const BillingRaw: React.VFC<Props> = ({ invoiceNumber, total, status, pdfUrl, paymentType, created, currency }) => {
  const {word} = useLocale();
  const formattedTotal = useMemo(() => `${currency}${total}`, [total, currency]);

  return (
    <ItemRaw>
      <ItemRaw.Title children={convertDate(created.seconds * 1000)} />
      <ItemRaw.Title bold children={invoiceNumber} />
      <ItemRaw.Title children={paymentType} />
      <ItemRaw.Title children={status} />
      <ItemRaw.Title children={formattedTotal} />
      <ItemRaw.Link url={pdfUrl} align='center' label={word('global.download.invoice')} />
    </ItemRaw>
  );
};
