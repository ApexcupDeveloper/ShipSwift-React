import { WordFunc } from '../../../../../../assets/locale';
import { HistoryLabel } from './HistoryTag';

export type LabelInfo = {
  background: string;
  label: string;
};

export const getLabel = (label: HistoryLabel, word: WordFunc): LabelInfo => {
  switch (label) {
    case 'customer':
      return {
        background: '#6A9DEA',
        label: word('global.customer'),
      };

    default:
      return {
        background: '#939EB4',
        label: word('global.system'),
      };
  }
};
