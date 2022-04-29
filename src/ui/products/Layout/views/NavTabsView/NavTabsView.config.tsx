import { WordFunc } from '../../../../../assets/locale';
import { NavPath } from '../../../../@core/modules/Navigation';

import { AppRoutes } from '../../../../app/api';

export const getPaths = (word: WordFunc): NavPath[] => [
  {
    label: word('products'),
    link : AppRoutes.Products.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Products.Add,
  },
  {
    label: '',
    link : AppRoutes.Products.Product.Index,
  },
  {
    shadow: true,
    link  : AppRoutes.Products.Product.Add,
  },
  {
    shadow: true,
    link  : AppRoutes.Products.Product.EditImage,
  },
];
