import { WordFunc } from "../../../../../assets/locale";

import { WelcomeCheckProps } from "../../components/WelcomeCheck";

export const getChecked = (word: WordFunc): WelcomeCheckProps[] => [
  {
    title: word('welcome.step-3.checked.import-orders')
  },
  {
    title: word('welcome.step-3.checked.import-stock-levels')
  },
  {
    title: word('welcome.step-3.checked.import-product-date')
  },
  {
    title: word('welcome.step-3.checked.import-orders')
  },
];

export const getUnchecked = (word: WordFunc): WelcomeCheckProps[] => [
  {
    title: word('welcome.step-3.unchecked.not-inventory')
  },
  {
    title: word('welcome.step-3.unchecked.not-product-prices')
  },
  {
    title: word('welcome.step-3.unchecked.not-order-status')
  },
  {
    title: word('welcome.step-3.unchecked.not-email-customers')
  },
]