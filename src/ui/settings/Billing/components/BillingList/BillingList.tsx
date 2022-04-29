import {useLocale} from '../../../../../assets/locale';

import {TitleRaw} from '../../../../@core/modules/ListBuilder';
import {BillingRaw} from './BillingRaw';

import * as styled from './BillingList.styled';
import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth0} from "../../../../../business/auth/hooks";
import { useSelector } from 'react-redux';

type InvoiceProps = {
  invoiceNumber: string;
  total: number;
  status: string;
  pdfUrl: string;
  created: any;
  paymentType: string;
}

type Props = {
  data: InvoiceProps[];
};

export const BillingList: React.VFC<Props> = ({ data }) => {
  const {word} = useLocale();
  const [currency, setCurrency] = useState('$');
  const companyData = useSelector((state: any) => state.company.company);

  useEffect(() => {
    if (companyData) {
      if (companyData.defaultCurrency === 'GBP') {
        setCurrency('£');
      } else if (companyData.defaultCurrency === 'EUR') {
        setCurrency('€');
      } else {
        setCurrency('$');
      }
    }
  }, [companyData])

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('global.date')}/>
        <TitleRaw.Item children={word('global.order')}/>
        <TitleRaw.Item children={word('global.payment-method')}/>
        <TitleRaw.Item children={word('global.payment-status')}/>
        <TitleRaw.Item children={word('global.amount')}/>
        <TitleRaw.Item children={word('global.invoice')}/>
      </TitleRaw>
      {data.map((props, index) => (
        <BillingRaw {...props} currency={currency} key={index} />
      ))}
    </styled.BodyWrapper>
  );
};
