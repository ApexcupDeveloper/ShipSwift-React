import { WordFunc } from '../../../../../assets/locale';
import { AppRoutes } from '../../../../app/api/routes';

import {
  DashboardIcon20,
  ProductsIcon20,
  OrdersIcon20,
  ShipmentIcon20
} from '../../../../../assets/icons';

export const navMap = (word: WordFunc) => [
  { icon: <DashboardIcon20 />, label: word('dashboard'), link: AppRoutes.Dashboard.Index },
  { icon: <OrdersIcon20 />, label: word('orders'), link: AppRoutes.Orders.Index },
  { icon: <ProductsIcon20 />, label: word('products'), link: AppRoutes.Products.Index },
  { icon: <ShipmentIcon20 />, label: word('shipments'), link: AppRoutes.Shipments.Batches },
];
