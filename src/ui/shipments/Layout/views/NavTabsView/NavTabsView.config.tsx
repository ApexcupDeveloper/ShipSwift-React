import { WordFunc } from '../../../../../assets/locale';
import { NavPath } from '../../../../@core/modules/Navigation';

import { AppRoutes } from '../../../../app/api';

export const getPaths = (word: WordFunc): NavPath[] => [
  {
    label: word('shipments.batches'),
    link: AppRoutes.Shipments.Batches,
  },
  {
    label: '',
    link : AppRoutes.Shipments.Batch.Index,
  },
];
