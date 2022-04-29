import { WordFunc } from '../../../../../assets/locale';
import { NavPath } from '../../../../@core/modules/Navigation';

import { AppRoutes } from '../../../../app/api';

export const getPaths = (word: WordFunc): NavPath[] => [
  {
    label: word('support'),
    link: AppRoutes.Support.Index,
  },
  {
    label: word('support.help.product-roadmap'),
    link: AppRoutes.Support.Roadmap
  },
];
