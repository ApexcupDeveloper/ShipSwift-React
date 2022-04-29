import { WordFunc } from '../../../../../assets/locale';
import { AppRoutes } from '../../../../app/api/routes';

export const navMap = (word: WordFunc) => [
  { label: word('support.help.article'), link: '' },
  { label: word('support.help.product-roadmap'), link: AppRoutes.Support.Roadmap },
  { label: word('support.status.page'), link: '' },
];
