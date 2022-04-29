import {useCallback} from 'react';
import {useHistory} from 'react-router';

import {Switch, Route} from 'react-router';
import {AppRoutes} from '../../../../app/api';

import { AddNewCardSection } from '../../sections/AddNewCardSection';
import {BillingSettingsSection} from '../../sections/BillingSettingsSection';
import {EditBillingAddressSection} from '../../sections/EditBillingAddressSection';
import {SelectPlanSection} from "../../sections/SelectPlanSection";

type Props = {};

export const BillingRouteView: React.FC<Props> = () => {
  const {push} = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Settings.Billing.Index), [push]);
  const onEditClose  = useCallback(() => push(AppRoutes.Settings.Billing.BillingSettings.Index), [push]);

  return (
    <Switch>
      <Route
        path={AppRoutes.Settings.Billing.BillingSettings.selectPlan}
        children={<SelectPlanSection onClose={onClose}/>}
      />
      <Route
        path={AppRoutes.Settings.Billing.BillingSettings.AddNewCard}
        children={<AddNewCardSection onClose={onClose} onEditClose={onEditClose}/>}
      />
      <Route
        path={AppRoutes.Settings.Billing.BillingSettings.EditBillingAddress}
        children={<EditBillingAddressSection onClose={onEditClose}/>}
      />
      <Route
        path={AppRoutes.Settings.Billing.BillingSettings.Index}
        children={<BillingSettingsSection onClose={onClose}/>}
      />
      ;
    </Switch>
  );
};
