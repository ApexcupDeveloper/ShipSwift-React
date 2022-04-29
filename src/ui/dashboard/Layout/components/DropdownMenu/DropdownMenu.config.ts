import { WordFunc } from '../../../../../assets/locale';
import { AppRoutes } from '../../../../app/api/routes';

export const navMap = (word: WordFunc) => [
  { label: word('global.account.settings'), link: AppRoutes.Settings.Account.Index },
  { label: word('settings.billing'), link: AppRoutes.Settings.Billing.Index },
  /*{ label: word('global.logout'), link: AppRoutes.Dashboard.Index },*/
];
