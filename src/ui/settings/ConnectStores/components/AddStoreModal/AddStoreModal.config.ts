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

export const guideInstuctions = (key: string) => {
  switch (key) {
    case 'Etsy':
      return 'https://docs.shipswift.com/en/article/etsy-integration-zbss14/';
    default:
      return '';
  }
};