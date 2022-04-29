import { WordFunc } from '../../../../../assets/locale';

export const mapInstuctions = (word: WordFunc) => (key: string) => {
  switch (key) {
    case 'Shopify':
      return word('setup-store.shopify-how-connect');
    case 'Etsy':
      return word('setup-store.etsy-how-connect');
    default:
      return word('setup-store.how-connect');
  }
};
