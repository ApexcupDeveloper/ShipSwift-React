import { WordFunc } from '../../../../../assets/locale';
import { NavPath } from '../../../../@core/modules/Navigation';

import { AppRoutes } from '../../../../app/api';

export const getPaths = (word: WordFunc): NavPath[] => [
  // Orders
  {
    label: word('orders'),
    depth: 0,
    link: AppRoutes.Orders.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Orders.Add,
  },
  {
    shadow: true,
    link: AppRoutes.Orders.View.Shipment,
  },
  {
    shadow: true,
    link: AppRoutes.Orders.Ship.Step1,
  },
  {
    shadow: true,
    link: AppRoutes.Orders.Ship.Step2,
  },
  // Order
  {
    label: word('global.order'),
    depth: 1,
    link: AppRoutes.Orders.Order.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Orders.Order.Edit,
  },

  // Ship order
  {
    shadow: true,
    depth: 1,
    link: AppRoutes.Orders.Order.Ship.Step1,
  },
  {
    shadow: true,
    depth: 1,
    link: AppRoutes.Orders.Order.Ship.Step2,
  },
  // Ship Multi orders
  {
    shadow: true,
    link: AppRoutes.Orders.MultiShip,
  },
  
  // Print order
  {
    shadow: true,
    link: AppRoutes.Orders.Order.Print.Step1,
  },
  {
    shadow: true,
    link: AppRoutes.Orders.Order.Print.Step2,
  },
  {
    shadow: true,
    link: AppRoutes.Orders.Order.Print.Step3,
  },
  {
    shadow: true,
    link: AppRoutes.Orders.Order.Print.Step4,
  },
];
