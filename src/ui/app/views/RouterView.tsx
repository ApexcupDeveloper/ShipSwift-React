import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { PrivateRoute, AuthRoute, SignUpRoute, RedirectSwitch } from '../components';
import { DashboardRoutes, AuthRoutes, AppRoutes } from '../api';
import { Spinner } from '../../@core/modules/Other';

import * as Auth from '../../auth';
import * as Dashboard from '../../dashboard';
import * as Orders from '../../orders';
import * as Products from '../../products';
import * as Settings from '../../settings';
import * as Supports from '../../supports';
import * as Admin from '../../admin';
import * as Shipment from '../../shipments';

import { TestPage } from '../../dashboard/pages/TestPage';
import { useAuth0 } from '../../../business/auth/hooks';
import React from 'react';
import { config } from '../../../private';
import { InvoiceTemplate } from '../../orders/InvoiceTemplate/@core/InvoiceTemplate';

// -> TODO delete
import { PopupWarning } from '../../@core/components/popupWarning';
import { useState } from 'react';
import { Component } from '../../dashboard/Layout/views/DashboardView/DashboardView.styled';
// <- TODO delete

export const RouterView: React.VFC = () => {
  const { isLoading, user } = useAuth0();
  const location = useLocation();
  const [showExpired, setShowExpired] = useState(false);

  let key = config.auth0.namespace + '/roles';
  let role: string[] = user && (user as any)[key];

  React.useEffect(() => {
    let baseURL = config.hostname;
    if (role && role.length > 0 && role.some(item => item === "Expired User")) {
      if( 
        !window.location.href.includes(AppRoutes.Settings.Billing.Index) &&
        !window.location.href.includes(AppRoutes.Settings.Account.Index)
      ) {
        setShowExpired(true);
      }
    }
    if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
    } else {
      if (
        window.location.href.includes(AppRoutes.Settings.ConnectCarriers.Step1.Test) ||
        window.location.href.includes(AppRoutes.Settings.ConnectCarriers.Step2.Test) ||
        window.location.href.includes(AppRoutes.Settings.ConnectCarriers.Step3.Test) ||
        window.location.href.includes(AppRoutes.Settings.ConnectCarriers.Step4.Test)
      ) {
        window.location.replace(baseURL + AppRoutes.Settings.ConnectCarriers.Index)
      }
    }
  }, [location, user]);

  if (isLoading) {
    return <Spinner />;
  }

  const onApply = () => {
    window.location.replace(AppRoutes.Settings.Billing.Index);
  }

  return (
    <div>
      <Switch>
        <AuthRoute path={AuthRoutes}>
          <RedirectSwitch>
            <Route path={AppRoutes.Auth.SignIn} component={Auth.SignIn} />
            <Route path={AppRoutes.Auth.SignUp} component={Auth.SignUp} />
            <Route path={AppRoutes.Auth.ResetPassword} component={Auth.ResetPassword} />
            <Route path={AppRoutes.Auth.NewPassword} component={Auth.NewPassword} />
          </RedirectSwitch>
        </AuthRoute>
        <Redirect exact from="/" to={AppRoutes.Dashboard.Index} />
        <PrivateRoute path={DashboardRoutes}>
          <Dashboard.DashboardRouteLayout>
            <Orders.OrdersRouteLayout path={AppRoutes.Orders.Index}>
              <Route exact path={[AppRoutes.Orders.Index, AppRoutes.Orders.Add, AppRoutes.Orders.MultiShip, AppRoutes.Orders.Ship.Step1, AppRoutes.Orders.Ship.Step2, AppRoutes.Orders.View.Shipment]} component={Orders.Orders} />
              <Route path={AppRoutes.Orders.Order.Index} component={Orders.Order} />
              <Route path={AppRoutes.Orders.InvoiceTemplate.Index} component={InvoiceTemplate} />
            </Orders.OrdersRouteLayout>
            <Products.ProductsRouteLayout path={AppRoutes.Products.Index}>
              <Route exact path={[AppRoutes.Products.Index, AppRoutes.Products.Add]} component={Products.Products} />
              <Route path={[AppRoutes.Products.Product.Index, AppRoutes.Products.Product.EditImage]} component={Products.Product} />
            </Products.ProductsRouteLayout>
            <Shipment.ShipmentsRouteLayout path={AppRoutes.Shipments.Batches}>
              <Route exact path={[AppRoutes.Shipments.Batches]} component={Shipment.Batches} />
              <Route path={[AppRoutes.Shipments.Batch.Index]} component={Shipment.Batch} />
            </Shipment.ShipmentsRouteLayout>
            <Supports.SupportsRouteLayout path={AppRoutes.Support.Index}>
              <Route exact path={AppRoutes.Support.Index} component={Supports.SupportsRouteLayout} />
              <Route path={AppRoutes.Support.Roadmap} component={Supports.UpvotyWidget} />
            </Supports.SupportsRouteLayout>
            <Settings.SettingsRouteLayout path={AppRoutes.Settings.Index}>
              <Route exact path={AppRoutes.Settings.Index} component={Settings.Settings} />
              <Route
                exact
                path={[AppRoutes.Settings.Customers.Index, AppRoutes.Settings.Customers.Add]}
                component={Settings.Customers}
              />
              <Route path={AppRoutes.Settings.Customers.Selected.Index} component={Settings.Customer} />
              <Route
                exact
                path={[AppRoutes.Settings.Warehouses.Index, AppRoutes.Settings.Warehouses.Add]}
                component={Settings.Warehouses}
              />
              <Route path={AppRoutes.Settings.Warehouses.Selected.Index} component={Settings.Warehouse} />
              <Route path={AppRoutes.Settings.Rules.Add} component={Settings.AddRule} />
              <Route path={AppRoutes.Settings.Rules.Index} component={Settings.Rules} />
              <Route path={AppRoutes.Settings.Users.Index} component={Settings.Users} />
              <Route path={AppRoutes.Settings.LinkProducts.Index} component={Settings.LinkProducts} />
              <Route path={AppRoutes.Settings.DeliveryMethods.Index} component={Settings.DeliveryMethods} />
              <Route path={AppRoutes.Settings.EmailTemplates.Index} component={Settings.EmailTemplates} />
              <Route path={AppRoutes.Settings.PrintersScales} component={Settings.PrintersAndScales} />
              <Route path={AppRoutes.Settings.General} component={Settings.General} />
              <Route path={AppRoutes.Settings.Account.Index} component={Settings.UserData} />
              <Route path={AppRoutes.Settings.PrintingTemplates} component={Settings.PrintingTemplates} />
              <Route path={AppRoutes.Settings.ConnectCarriers.Index} component={Settings.ConnectCarriers} />
              <Route path={AppRoutes.Settings.ConnectStores.Index} component={Settings.ConnectStores} />
              <Route path={AppRoutes.Settings.Billing.Index} component={Settings.Billing} />
              {/* <Route path={AppRoutes.Settings.UserDataSection.Index} component={Settings.UserData} /> */}
            </Settings.SettingsRouteLayout>
            <Admin.SettingsRouteLayout path={AppRoutes.Admin.Index}>
              <Route exact path={AppRoutes.Admin.Index} component={Admin.Settings} />
            </Admin.SettingsRouteLayout>
            <Route exact path={AppRoutes.Dashboard.Index} component={Dashboard.Dashboard} />
            <SignUpRoute path={AppRoutes.Auth.NewAccount} component={Auth.NewAccount} />
          </Dashboard.DashboardRouteLayout>
        </PrivateRoute>
        <PrivateRoute path={'/user'} component={TestPage} />
        <PrivateRoute path={AppRoutes[404]}>404</PrivateRoute>
      </Switch>
      <PopupWarning.ExpiredSubscription hide onApply={onApply} onCancel={() => { }} onClose={() => { }} visible={showExpired} />
    </div>
  );
};
