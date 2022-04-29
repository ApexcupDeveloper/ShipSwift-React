import { useEffect, useMemo, useState } from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addComma, getCompanyId } from '../../../../../utils';

import { BoardRaw } from '../../../../@core/modules/ListBuilder';
import { addErrorToast } from '../../../../toast';

type Props = {
  revenue: string;
  revenueLabel: string;

  orders: number;
  ordersLabel: string;

  shipped: number;
  shippedLabel: string;

  currency: string;
};

export const Statistics: React.VFC<Props> = ({ currency, revenue, revenueLabel, orders, ordersLabel, shipped, shippedLabel }) => {
  return (
    <BoardRaw>
      <BoardRaw.Card label={revenueLabel} stats={currency + addComma(revenue)} />
      <BoardRaw.Card label={ordersLabel} stats={orders} />
      <BoardRaw.Card label={shippedLabel} stats={shipped} />
    </BoardRaw>
  );
};
