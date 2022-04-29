import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { SmallAlert } from '../../../../@core/modules/Other';
import { AppRoutes } from '../../../../app/api';

export type AlertType = 'token-error' | 'connect-now';

type Props = {
  alert: AlertType;
  name: string;
};

export const NoServiceAlert: React.VFC<Props> = ({ alert, name }) => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onConnect = useCallback(() => push(AppRoutes.Settings.ConnectCarriers.Index), [push]);

  if (alert === 'connect-now')
    return (
      <SmallAlert>
        <p children={word('order.ship.step-2.not-connected-service').replace('{{CARRIER}}', name)} />
        <MainButton type="text-green" flat children={word('global.connect.now')} onClick={onConnect} />
      </SmallAlert>
    );

  if (alert === 'token-error')
    return <SmallAlert type="warning-red" description={word('order.ship.step-2.invalid-token-usps')} />;

  return null;
};
