import { AlertInfoIcon20, AlertSuccessIcon20, AlertWarningIcon20 } from '../../../../../assets/icons';

export type AlertType = 'success' | 'info' | 'info-blue' | 'warning' | 'warning-red';

export const getStyle = (type: AlertType, isDark?: boolean) => {
  switch (type) {
    case 'success':
      return {
        icon: <AlertSuccessIcon20 />,
        background: '#E5FFEA',
        iconColor: '#4FC971',
      };

    case 'warning-red':
      return {
        icon: <AlertWarningIcon20 />,
        background: isDark ? '#1C1C1E' : '#FFEDEB',
        iconColor: '#F76A57',
      };

    case 'warning':
      return {
        icon: <AlertWarningIcon20 />,
        background: isDark ? '#1C1C1E' : '#FFF8E0',
        iconColor: '#ECBE39',
      };

    case 'info-blue':
      return {
        icon: <AlertInfoIcon20 />,
        background: '#E8EEFD',
        iconColor: '#687BFF',
      };

    default:
      return {
        icon: <AlertInfoIcon20 />,
        iconColor: '#BCC1D0',
        background: isDark ? '#1C1C1E' : '#F9FAFD',
      };
  }
};
