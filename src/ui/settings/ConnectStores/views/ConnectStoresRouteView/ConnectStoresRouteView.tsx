import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { SetUpStoreSection } from '../../sections/SetUpStoreSection';
import { AddShopifySection } from '../../sections/AddShopifySection';
import { AddBigCommerceSection } from '../../sections/AddBigCommerceSection';
import { AddWooCommerceSection } from '../../sections/AddWooCommerceSection';
import { AddSquareSpaceSection } from '../../sections/AddSquareSpaceSection';
import { AddMagento2Section } from '../../sections/AddMagento2Section';
import { AddEBaySection } from '../../sections/AddEBaySection';
import { StoreAddedSection } from '../../sections/StoreAddedSection';
import { StoreFailedSection } from '../../sections/StoreFailedSection';
import { RaiseTicketSection } from '../../sections/RaiseTicketSection';
import { AmazonSettingsSection } from '../../sections/AmazonSettingsSection';
import { WooCommerceSettingForm } from '../../forms/WooCommerceSettingForm';
import { ShopifySettingForm } from '../../forms/ShopifySettingForm';
import { SquareSpaceSettingForm } from '../../forms/SquareSpaceSettingForm';
import { BigCommerceSettingForm } from '../../forms/BigCommerceSettingForm';
import { MagentoSettingForm } from '../../forms/MagentoSettingForm';
import { AddEtsySection } from '../../sections/AddEtsySection';
import { EtsySettingForm } from '../../forms/EtsySettingForm';
import { AmazonSettingForm } from '../../forms/AmazonSettingForm';
import { EbaySettingForm } from '../../forms/EbaySettingForm';

type Props = {};

export const ConnectStoresRouteView: React.VFC<Props> = () => {
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Settings.ConnectStores.Index), [push]);

  return (
    <Switch>
      <Route exact path={AppRoutes.Settings.ConnectStores.SetUpStore.Index}>
        <SetUpStoreSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.Amazon}>
        <AmazonSettingsSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.AddedStore}>
        <StoreAddedSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.FailedStore}>
        <StoreFailedSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.RaiseTicket}>
        <RaiseTicketSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.WooCommerce}>
        <AddWooCommerceSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.SquareSpace}>
        <AddSquareSpaceSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.EBay}>
        <AddEBaySection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.Etsy}>
        <AddEtsySection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.BigCommerce}>
        <AddBigCommerceSection onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.Magento2}>
        <AddMagento2Section onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.SetUpStore.Shopify}>
        <AddShopifySection onClose={onClose} />
      </Route>

      <Route path={AppRoutes.Settings.ConnectStores.EditStore.WooCommerce}>
        <WooCommerceSettingForm onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.EditStore.Shopify}>
        <ShopifySettingForm onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.EditStore.SquareSpace}>
        <SquareSpaceSettingForm onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.EditStore.BigCommerce}>
        <BigCommerceSettingForm onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.EditStore.Magento2}>
        <MagentoSettingForm onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.EditStore.Etsy}>
        <EtsySettingForm onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.EditStore.EBay}>
        <EbaySettingForm onClose={onClose} />
      </Route>
      <Route path={AppRoutes.Settings.ConnectStores.EditStore.Amazon}>
        <AmazonSettingForm onClose={onClose} />
      </Route>
    </Switch>
  );
};
