import { SelectOption } from '../../../../@core/modules/Select';
import { AppRoutes } from '../../../../app/api';

export const quickStoresList: SelectOption[] = [
  {
    label: 'Shopify',
    value: AppRoutes.Settings.ConnectStores.SetUpStore.Shopify,
  },
  {
    label: 'Magento2',
    value: AppRoutes.Settings.ConnectStores.SetUpStore.Magento2,
  },
  {
    label: 'eBay',
    value: AppRoutes.Settings.ConnectStores.SetUpStore.EBay,
  },
  {
    label: 'Etsy',
    value: AppRoutes.Settings.ConnectStores.SetUpStore.Etsy,
  },
  {
    label: 'Amazon',
    value: AppRoutes.Settings.ConnectStores.SetUpStore.Amazon,
  },
  {
    label: 'BigCommerce',
    value: AppRoutes.Settings.ConnectStores.SetUpStore.BigCommerce,
  },
  {
    label: 'WooCommerce',
    value: AppRoutes.Settings.ConnectStores.SetUpStore.WooCommerce,
  },
  {
    label: 'Squarespace',
    value: AppRoutes.Settings.ConnectStores.SetUpStore.SquareSpace,
  },
];

export const quickEditStoresList = (type: string) => {
  switch (type) {
    case 'Shopify':
      return AppRoutes.Settings.ConnectStores.EditStore.Shopify;
    case 'Magento2':
      return AppRoutes.Settings.ConnectStores.EditStore.Magento2;
    case 'eBay':
      return AppRoutes.Settings.ConnectStores.EditStore.EBay;
    case 'Etsy':
      return AppRoutes.Settings.ConnectStores.EditStore.Etsy;
    case 'Amazon':
      return AppRoutes.Settings.ConnectStores.EditStore.Amazon;
    case 'BigCommerce':
      return AppRoutes.Settings.ConnectStores.EditStore.BigCommerce;
    case 'WooCommerce':
      return AppRoutes.Settings.ConnectStores.EditStore.WooCommerce;
    case 'Squarespace':
      return AppRoutes.Settings.ConnectStores.EditStore.SquareSpace;
    default:
      return '';
  }
};
