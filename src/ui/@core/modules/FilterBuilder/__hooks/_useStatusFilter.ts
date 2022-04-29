import { useCallback, useMemo } from 'react';
import { useObjectState } from '../../../hooks/useObjectState';
import { ChangeEvent } from '../../../hooks/useInputState';

export type StatusFilter = {
  paymentRequired: boolean;
  pendingPayment: boolean;
  waitingForStock: boolean;
  readyToShip: boolean;
  shipped: boolean;
  cancelled: boolean;
  refunded: boolean;
};

export const StatusFilterKeys = {
  paymentRequired: 'Payment Required',
  waitingForStock: 'Waiting For Stock',
  readyToShip: 'Ready to Ship',
  shipped: 'Shipped',
  cancelled: 'Cancelled',
  refunded: 'Refunded',
  pendingPayment: 'Pending Payment'
};

export const _useStatusFilter = () => {
  const [data, setData, clearData] = useObjectState<StatusFilter>();
  const [dataApplied, setDataApplied, clearDataApplied] = useObjectState<StatusFilter>();

  const handleChange = useCallback(
    (e: ChangeEvent) => {
      e.target.name && setData({ [e.target.name]: e.target.value });
    },
    [setData]
  );

  const clear = useCallback(() => {
    clearData();
    clearDataApplied();
  }, [clearData, clearDataApplied]);

  const apply = useCallback(() => {
    setDataApplied(data);
  }, [data, setDataApplied]);

  const hasApplied = useCallback(() => !!(dataApplied && Object.values(dataApplied).find(Boolean)), [dataApplied]);

  const getAllAplieds = useMemo(
    () =>
      (dataApplied &&
        Object.keys(dataApplied)
          .filter((key) => (dataApplied as any)?.[key])
          .map((key) => (StatusFilterKeys as any)?.[key])
          .join(', ')) ||
      '',
    [dataApplied]
  );

  // const getAllAplieds = useMemo(() => {
  //   if (!dataApplied) return '';
  //   return Object.keys(dataApplied)
  //     .filter((key) => {
  //       switch (key) {
  //         case 'paymentRequired':
  //           return dataApplied.paymentRequired;
  //         case 'waitingForStock':
  //           return dataApplied.waitingForStock;
  //         case 'readyToShip':
  //           return dataApplied.readyToShip;
  //         case 'shipped':
  //           return dataApplied.shipped;
  //         case 'cancelled':
  //           return dataApplied.cancelled;
  //         case 'refunded':
  //           return dataApplied.refunded;
  //         default: {
  //           alert('!ou');
  //           return false;
  //         }
  //       }
  //     })
  //     .map((key) => typeof (StatusFilterKeys as any)?.[key])
  //     .filter(Boolean)
  //     .join(', ');
  // }, [dataApplied]);

  return {
    data,
    handleChange,
    clear,
    apply,
    hasApplied,
    getAllAplieds,
    dataApplied
  };
};
