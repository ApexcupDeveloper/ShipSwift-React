import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { OptionValue } from '../../../../@core/modules/Select/components/Option';

import * as styled from './OrderTotal.styled';

export type OrderRowProps = {
  planPrice: number;
  userPrice: number;
  users: OptionValue<any> | undefined;
  orders: OptionValue<any> | undefined;
  plan: OptionValue<any> | undefined;
  period: OptionValue<any> | undefined;
};

export const OrderRow: React.FC<OrderRowProps> = ({ planPrice, userPrice, users, orders, plan, period }) => {
  const [currency, setCurrency] = useState('');
  const companyData = useSelector((state: any) => state.company.company);

  useEffect(() => {
    if (companyData.defaultCurrency === 'GBP') {
      setCurrency('£')
    } else if (companyData.defaultCurrency === 'EUR') {
      setCurrency('€')
    } else {
      setCurrency('$')
    }
  }, [companyData])

  const getLabel = (plan: string, users: string) => {
    if (plan === 'Growth') {
      if (users === '2') {
        return `2 Seats (included in plan)`;
      } else {
        return `2 Seats (included in plan) + ${Number(users) - 2} Extra seats`;
      }
    } else if (plan === 'Professional') {
      if (users === '4') {
        return `4 Seats (included in plan)`;
      } else {
        return `4 Seats (included in plan) + ${Number(users) - 4} Extra seats`;
      }
    } else {
      if (users === '5') {
        return `5 Seats (included in plan)`;
      } else {
        return `5 Seats (included in plan) + ${Number(users) - 5} Extra seats`;
      }
    }
  }

  return (
    <styled.BodyWrapper>
      {plan && (
        <ItemRaw>
          <ItemRaw.Title align="left" flex={2} children={plan.label + ' Plan'} />
          <ItemRaw.Title align="right" children={currency + planPrice} />
        </ItemRaw>
      )}
      {users && plan && (
        <ItemRaw>
          <ItemRaw.Title align="left" flex={2} children={getLabel(plan.label, users.label)} />
          <ItemRaw.Title align="right" children={currency + userPrice} />
        </ItemRaw>
      )}
      <ItemRaw>
        <ItemRaw.Title align="left" flex={2} children={'Total Price'} />
        <ItemRaw.Title align="right" children={currency + (userPrice + planPrice)} />
      </ItemRaw>
    </styled.BodyWrapper>
  );
};
