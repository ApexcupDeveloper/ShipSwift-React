import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { ProgressBar } from '../ProgressBar';

import * as styled from './BillingStatistics.styled';

const mock = {
  costs: 120,
  date: '22/05/2021',
  users: {
    subscribed: 2,
    all: 4,
  },
  orders: {
    subscribed: 280,
    all: 300,
  },
};

type Props = {};

const currencySymbol = '£';

export const BillingStatistics: React.VFC<Props> = () => {
  const { word } = useLocale();
  const formattedTotal = useMemo(() => `${currencySymbol}${mock.costs}`, []);

  return (
    <styled.BodyWrapper>
      <styled.Container>
        <styled.AcceleratorCard>
          <span>{word('global.accelerator')}</span>
          <span>
            <strong>{formattedTotal}</strong>/ month
          </span>
        </styled.AcceleratorCard>
        <styled.UntilCard>{`until ${mock.date}`}</styled.UntilCard>
        <ProgressBar name={word('global.users')} num={mock.users.subscribed} range={mock.users.all} />
        <ProgressBar name={word('global.users')} num={mock.orders.subscribed} range={mock.orders.all} />
      </styled.Container>
      <styled.Container>
        <MainButton type="text" children={word('global.cancel-subscription')} />
        <MainButton children={word('global.upgrade')} />
      </styled.Container>
    </styled.BodyWrapper>
  );
};
