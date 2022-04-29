import {
  BriefcaseIcon20,
  CheckIcon20,
  EmailIcon20,
  FileIcon20,
  FlagIcon20,
  LinkIcon20,
  PrinterIcon20,
  SettingsIcon20,
  StoreTrolleyIcon20,
  TruckIcon20,
  UsersIcon20,
} from '../../../../../assets/icons';

import { WordFunc } from '../../../../../assets/locale';
import { NavPath } from '../../../../@core/modules/Navigation';
import { SettingsCardProps } from '../../components/SettingsCard';

import { AppRoutes } from '../../../../app/api';

const getSettingsList = (word: WordFunc) => [
  {
    path: {
      label: word('settings.general'),
      link: AppRoutes.Settings.General,
    },
    get card() {
      return { icon: <SettingsIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.connect-stores'),
      link: AppRoutes.Settings.ConnectStores.Index,
    },
    get card() {
      return { icon: <StoreTrolleyIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.connect-carriers'),
      link: AppRoutes.Settings.ConnectCarriers.Index,
    },
    get card() {
      return { icon: <TruckIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.delivery-methods'),
      link: AppRoutes.Settings.DeliveryMethods.Index,
    },
    get card() {
      return { icon: <CheckIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.printing-templates'),
      link: AppRoutes.Settings.PrintingTemplates,
    },
    get card() {
      return { icon: <FileIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.email-templates'),
      link: AppRoutes.Settings.EmailTemplates.Index,
    },
    get card() {
      return { icon: <EmailIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.printer-and-scales'),
      link: AppRoutes.Settings.PrintersScales,
    },
    get card() {
      return { icon: <PrinterIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.customers'),
      link: AppRoutes.Settings.Customers.Index,
    },
    get card() {
      return { icon: <BriefcaseIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.users'),
      link: AppRoutes.Settings.Users.Index,
    },
    get card() {
      return { icon: <UsersIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.link-products'),
      link: AppRoutes.Settings.LinkProducts.Index,
    },
    get card() {
      return { icon: <LinkIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.rules'),
      link: AppRoutes.Settings.Rules.Index,
    },
    get card() {
      return { icon: <FlagIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.billing'),
      link: AppRoutes.Settings.Billing.Index,
    },
    get card() {
      return { icon: <PrinterIcon20 />, ...this.path };
    },
  },
  {
    path: {
      label: word('settings.warehouses'),
      link: AppRoutes.Settings.Warehouses.Index,
    },
    get card() {
      return { icon: <PrinterIcon20 />, ...this.path };
    },
  },
];

export const Settings = (word: WordFunc) => {
  const list = getSettingsList(word);
  const paths: NavPath[] = [];
  const cards: Omit<SettingsCardProps, 'description'>[] = [];

  paths.push({
    link: AppRoutes.Settings.Index,
    label: word('settings'),
  });

  for (const { card, path } of list) {
    paths.push(path);
    cards.push(card);
  }

  return { paths, cards };
};
