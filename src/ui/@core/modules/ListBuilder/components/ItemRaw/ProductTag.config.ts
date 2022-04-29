import { WordFunc } from "../../../../../../assets/locale";

export type Label =
  | 'small-parcel'
  | 'blue-product-tag'
  | 'green-product-tag'
  | 'big-parcel'
  | 'new-tag'
  | 'in-stock'
  | 'out-of-stock';

export type LabelInfo = {
  label: string;
  color?: string;
  background: string;
};

export const getLabelInfo = (label: Label, word: WordFunc, isDark: boolean): LabelInfo | undefined => {
  switch (label) {
    case 'small-parcel':
      return {
        background: '#608AF3',
        label: word('product.tag.small-parcel'),
      };

    case 'blue-product-tag':
      return {
        background: '#47CADC',
        label: word('product.tag'),
      };

    case 'green-product-tag':
      return {
        background: '#63CD96',
        label: word('product.tag'),
      };

    case 'big-parcel':
      return {
        background: '#F0BE5D',
        label: word('product.tag.big-parcel'),
      };

    case 'new-tag':
      return {
        background: '#F28660',
        label: word('product.tag.new'),
      };

    case 'out-of-stock':
      return {
        background: '#F3749A',
        color: '#F3F6FA',
        label: word('product.tag.out-of-stock'),
      };

    case 'in-stock':
      return {
        background:  isDark ? '#32C19F' : '#CBF8E5',
        color:  isDark ? '#F3F6FA' : '#32C19F',
        label: word('product.tag.in-stock'),
      };
  }
};
