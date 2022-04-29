import { WordFunc } from "../../../../../../assets/locale";

export type Label =
  | 'active'
  | 'inactive';

export type LabelInfo = {
  label: string;
  color: string;
  background: string;
};

export const getLabelInfo = (label: Label, word: WordFunc, isDark: boolean): LabelInfo | undefined => {
  switch (label) {
    case 'active':
      return {
        background: isDark ? '#32C19F' : '#CBF8E5',
        color: isDark ? '#F3F6F9' : '#32C19F',
        label: word('global.status.active'),
      };

    case 'inactive':
      return {
        background: isDark ? '#7B8A99' : '#F3F6F9',
        color: isDark ? '#F3F6F9' :'#7B8A99',
        label: word('global.status.inactive'),
      };
  }
};
