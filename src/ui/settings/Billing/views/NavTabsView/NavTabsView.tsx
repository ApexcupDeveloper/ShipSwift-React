import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import { AppRoutes } from '../../../../app/api';
import { BillingRouteView } from '../BillingRouteView';

import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';

import { SettingsIcon20 } from '../../../../../assets/icons';
import * as styled from './NavTabsView.styled';

type Props = {};

export const NavTabsView: React.FC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onAdd = useCallback(() => push(AppRoutes.Settings.Billing.BillingSettings.Index), [push]);

  return (
    <NavTabContainer>
      <styled.ButtonWrapper>
        <MainButton
          flat
          type={'text-green'}
          icon={<SettingsIcon20 />}
          children={word('global.billing-settings')}
          onClick={onAdd}
        />
      </styled.ButtonWrapper>
      <BillingRouteView />
    </NavTabContainer>
  );
};
