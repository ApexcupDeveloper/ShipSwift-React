import { WordFunc } from '../../../../../../assets/locale';

export type Label =
  | 'on-hold'
  | 'shipped'
  | 'payment-required'
  | 'pending-payment'
  | 'waiting-for-stock'
  | 'cancelled'
  | 'ready-to-ship'
  | 'refunded'
  | 'unpaid'
  | 'default';

export type LabelInfo = {
  label: string;
  color: string;
  background: string;
};

export const getLabelInfo = (label: Label, word: WordFunc, isDark?: boolean): LabelInfo | undefined => {
  switch (label) {
    case 'on-hold':
      return {
        background: isDark ? '#7B8A99' : '#F3F6FA',
        color: isDark ? '#F3F6FA' : '#7B8A99',
        label: word('order.status.on-hold'),
      };

    case 'shipped':
      return {
        background: isDark ? '#32C19F' : '#CBF8E5',
        color: isDark ? '#F3F6FA' : '#32C19F',
        label: word('order.status.shipped'),
      };

    case 'payment-required':
      return {
        background: isDark ? '#7775F6' : '#E0E3FF',
        color: isDark ? '#F3F6FA' : '#7775F6',
        label: word('order.status.payment-required'),
      };

    case 'pending-payment':
      return {
        background: isDark ? '#F28660' : '#E0E3FF',
        color: isDark ? '#F3F6FA' : '#7775F6',
        label: word('order.status.pending-payment'),
      };

    case 'waiting-for-stock':
      return {
        background: isDark ? '#E09F21' : '#FFEFD0',
        color: isDark ? '#F3F6FA' : '#E09F21',
        label: word('order.status.waiting-for-stock'),
      };

    case 'cancelled':
      return {
        background: isDark ? '#EF5A5A' : '#FDE7E7',
        color: isDark ? '#F3F6FA' : '#EF5A5A',
        label: word('order.status.cancelled'),
      };

    case 'ready-to-ship':
      return {
        background: isDark ? '#4BA3F3' : '#E0F0FF',
        color: isDark ? '#F3F6FA' : '#4BA3F3',
        label: word('order.status.ready-to-ship'),
      };

    case 'refunded':
      return {
        background: isDark ? '#EF5A5A' : '#FDE7E7',
        color: isDark ? '#F3F6FA' : '#EF5A5A',
        label: word('order.status.refunded'),
      };

    case 'unpaid':
      return {
        background: isDark ? '#F0BE5D' : '#F3F6FA',
        color: isDark ? '#F3F6FA' : '#7F7F8D',
        label: word('global.unpaid'),
      };

    case 'default':
      return {
        background: isDark ? '#32C19F' : '#CBF8E5',
        color: isDark ? '#F3F6FA' : '#32C19F',
        label: word('global.default'),
      };
  }
};
