import { WordFunc } from '../../../../../../assets/locale';

export type Label =
  | ''
  | 'unpaid'
  | 'default';

export type LabelInfo = {
  label: string;
  color: string;
  background: string;
};

export const getLabelInfo = (label: Label, word: WordFunc, isDark?: boolean): LabelInfo | undefined => {
  switch (label) {
    case 'unpaid':
      return {
        background: '#F3F6FA',
        color: '#7F7F8D',
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
