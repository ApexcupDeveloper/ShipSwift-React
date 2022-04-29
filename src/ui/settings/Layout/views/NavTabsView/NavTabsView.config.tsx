import { WordFunc } from '../../../../../assets/locale';
import { NavPath } from '../../../../@core/modules/Navigation';

import { AppRoutes } from '../../../../app/api';

export const getPaths = (word: WordFunc): NavPath[] => [
  {
    label: word('settings'),
    link: AppRoutes.Settings.Index,
  },
  {
    label: word('settings.general'),
    link: AppRoutes.Settings.General,
  },
  {
    label: word('settings.account'),
    link: AppRoutes.Settings.Account.Index,
  },

  // Connect stores
  {
    label: word('settings.connect-stores'),
    link: AppRoutes.Settings.ConnectStores.Index,
  },
  {
    shadow: true,
    label: word('settings.connect-stores'),
    link: AppRoutes.Settings.ConnectStores.SetUpStore.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.AddedStore,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.FailedStore,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.RaiseTicket,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.Shopify,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.BigCommerce,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.WooCommerce,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.SquareSpace,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.Magento2,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectStores.SetUpStore.EBay,
  },

  // Connect carriers
  {
    label: word('settings.connect-carriers'),
    link: AppRoutes.Settings.ConnectCarriers.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectCarriers.Step1.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectCarriers.Step2.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.ConnectCarriers.Step3.Index,
  },

  // Delivery methods
  {
    label: word('settings.delivery-methods'),
    link: AppRoutes.Settings.DeliveryMethods.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.DeliveryMethods.Add,
  },

  // Printing templates
  {
    label: word('settings.printing-templates'),
    link: AppRoutes.Settings.PrintingTemplates,
  },

  // Email templates
  {
    label: word('settings.email-templates'),
    link: AppRoutes.Settings.EmailTemplates.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.EmailTemplates.Edit,
  },

  // Printers & Scales
  {
    label: word('settings.printer-and-scales'),
    link: AppRoutes.Settings.PrintersScales,
  },

  // Customers
  {
    label: word('settings.customers'),
    link: AppRoutes.Settings.Customers.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.Customers.Add,
  },
  {
    label: word('global.customer'),
    link: AppRoutes.Settings.Customers.Selected.Index,
  },

  // Warehouses
  {
    label: word('settings.warehouses'),
    link: AppRoutes.Settings.Warehouses.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.Warehouses.Add,
  },
  {
    label: word('settings.warehouse'),
    link: AppRoutes.Settings.Warehouses.Selected.Index,
  },

  // Users
  {
    label: word('settings.users'),
    link: AppRoutes.Settings.Users.Index,
  },

  // Link products
  {
    label: word('settings.link-products'),
    link: AppRoutes.Settings.LinkProducts.Index,
  },
  {
    shadow: true,
    link: AppRoutes.Settings.LinkProducts.Search.Product,
  },

  // Rules
  {
    label: word('settings.rules'),
    link: AppRoutes.Settings.Rules.Index,
  },
  {
    label: word('global.add.rule'),
    link: AppRoutes.Settings.Rules.Add,
  },

  // Billing
  {
    label: word('settings.billing'),
    link: AppRoutes.Settings.Billing.Index,
  },

  // User data section
  // {
  //   label: word('settings.user-data-section'),
  //   link: AppRoutes.Settings.UserDataSection.Index,
  // }
];
