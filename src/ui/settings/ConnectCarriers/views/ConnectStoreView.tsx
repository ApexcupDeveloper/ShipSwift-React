import { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { AppRoutes } from '../../../app/api';
import { APCCarrierSection } from '../sections/Step1/APCSection';
import { AustraliaPostSection } from '../sections/Step1/AustraliaPostSection';
import { CanadaPostSection } from '../sections/Step1/CanadaPostSection';

import { DeutschePostSection } from '../sections/Step1/DeutschePostSection';
import { DHLSection } from '../sections/Step1/DHLSection';
import { DPDLocalSection } from '../sections/Step1/DPDLocalSection';
import { DPDSection } from '../sections/Step1/DPDSection';
import { FedExSection } from '../sections/Step1/FedExSection';
import { HermesSection } from '../sections/Step1/HermesSection';
import { ParcelforceSection } from '../sections/Step1/ParcelforceSection';
import { RoyalMailSection } from '../sections/Step1/RoyalMailSection';
import { UPSSection } from '../sections/Step1/UPSSection';
import { USPSSection } from '../sections/Step1/USPSSection';
import { ApcServiceSection } from '../sections/Step2/ApcServiceSection';
import { USPSServiceSection } from '../sections/Step2/USPSServiceSection';
import { UPSServiceSection } from '../sections/Step2/UPSServiceSection';
import { RoyalMailServiceSection } from '../sections/Step2/RoyalMailServiceSection';
import { ParcelforceServiceSection } from '../sections/Step2/ParcelforceServiceSection';
import { HermesServiceSection } from '../sections/Step2/HermesServiceSection';
import { FedExServiceSection } from '../sections/Step2/FedExServiceSection';
import { DPDServiceSection } from '../sections/Step2/DPDServiceSection';
import { DPDLocalServiceSection } from '../sections/Step2/DPDLocalServiceSection';
import { DHLServiceSection } from '../sections/Step2/DHLServiceSection';
import { DeutschePostServiceSection } from '../sections/Step2/DeutschePostServiceSection';
import { CanadaPostServiceSection } from '../sections/Step2/CanadaPostServiceSection';
import { AustraliaPostServiceSection } from '../sections/Step2/AustraliaPostServiceSection';
import { ApcEditSection } from '../sections/Step3/ApcEditSection';
import { CanadaPostEditSection } from '../sections/Step3/CanadaPostEditSection';
import { USPSEditSection } from '../sections/Step3/USPSEditSection';
import { UPSEditSection } from '../sections/Step3/UPSEditSection';
import { RoyalMailEditSection } from '../sections/Step3/RoyalMailEditSection';
import { ParcelforceEditSection } from '../sections/Step3/ParcelforceEditSection';
import { HermesEditSection } from '../sections/Step3/HermesEditSection';
import { FedExEditSection } from '../sections/Step3/FedExEditSection';
import { DPDLocalEditSection } from '../sections/Step3/DPDLocalEditSection';
import { DPDEditSection } from '../sections/Step3/DPDEditSection';
import { DHLEditSection } from '../sections/Step3/DHLEditSection';
import { DeutschePostEditSection } from '../sections/Step3/DeutschePostEditSection';
import { AustraliaPostEditSection } from '../sections/Step3/AustraliaPostEditSection';
import { ApcServiceEditSection } from '../sections/Step4/ApcServiceEditSection';
import { AustraliaPostServiceEditSection } from '../sections/Step4/AustraliaPostServiceEditSection';
import { CanadaPostServiceEditSection } from '../sections/Step4/CanadaPostServiceEditSection';
import { DeutschePostServiceEditSection } from '../sections/Step4/DeutschePostServiceEditSection';
import { DHLServiceEditSection } from '../sections/Step4/DHLServiceEditSection';
import { DPDLocalServiceEditSection } from '../sections/Step4/DPDLocalServiceEditSection';
import { DPDServiceEditSection } from '../sections/Step4/DPDServiceEditSection';
import { FedExServiceEditSection } from '../sections/Step4/FedExServiceEditSection';
import { HermesServiceEditSection } from '../sections/Step4/HermesServiceEditSection';
import { ParcelforceServiceEditSection } from '../sections/Step4/ParcelforceServiceEditSection';
import { RoyalMailServiceEditSection } from '../sections/Step4/RoyalMailServiceEditSection';
import { UPSServiceEditSection } from '../sections/Step4/UPSServiceEditSection';
import { USPSServiceEditSection } from '../sections/Step4/USPSServiceEditSection';
import { TestCarrierSection } from '../sections/Step1/TestSection';
import { TestServiceSection } from '../sections/Step2/TestServiceSection';
import { TestEditSection } from '../sections/Step3/TestEditSection';
import { TestServiceEditSection } from '../sections/Step4/TestServiceEditSection';
import { RoyalMailClickDropSection } from '../sections/Step1/RoyalMailClickDropSection';
import { RoyalMailClickDropEditSection } from '../sections/Step3/RoyalMailClickDropEditSection';
import { RoyalMailClickDropServiceEditSection } from '../sections/Step4/RoyalMailClickDropServiceEditSection';
import { RoyalMailClickDropServiceSection } from '../sections/Step2/RoyalMailClickDropServiceSection';

export const ConnectStoreView: React.VFC = () => {
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Settings.ConnectCarriers.Index), [push]);

  return (
    <Switch>
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.Test}
        children={<TestCarrierSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.APC}
        children={<APCCarrierSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.AustraliaPost}
        children={<AustraliaPostSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.CanadaPost}
        children={<CanadaPostSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.DHL}
        children={<DHLSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.DPD}
        children={<DPDSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.DPDLocal}
        children={<DPDLocalSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.FedEx}
        children={<FedExSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.Hermes}
        children={<HermesSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.Parcelforce}
        children={<ParcelforceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.RoyalMail}
        children={<RoyalMailSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.RoyalMailClickDrop}
        children={<RoyalMailClickDropSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.UPS}
        children={<UPSSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.USPS}
        children={<USPSSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step1.DeutschePost}
        children={<DeutschePostSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.APC}
        children={<ApcServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.Test}
        children={<TestServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.AustraliaPost}
        children={<AustraliaPostServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.CanadaPost}
        children={<CanadaPostServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.DeutschePost}
        children={<DeutschePostServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.DHL}
        children={<DHLServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.DPD}
        children={<DPDServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.DPDLocal}
        children={<DPDLocalServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.FedEx}
        children={<FedExServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.Hermes}
        children={<HermesServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.Parcelforce}
        children={<ParcelforceServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.RoyalMail}
        children={<RoyalMailServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.RoyalMailClickDrop}
        children={<RoyalMailClickDropServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.UPS}
        children={<UPSServiceSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step2.USPS}
        children={<USPSServiceSection onClose={onClose} />}
      />
       <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.Test}
        children={<TestEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.APC}
        children={<ApcEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.AustraliaPost}
        children={<AustraliaPostEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.CanadaPost}
        children={<CanadaPostEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.DeutschePost}
        children={<DeutschePostEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.DHL}
        children={<DHLEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.DPD}
        children={<DPDEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.DPDLocal}
        children={<DPDLocalEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.FedEx}
        children={<FedExEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.Hermes}
        children={<HermesEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.Parcelforce}
        children={<ParcelforceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.RoyalMail}
        children={<RoyalMailEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.RoyalMailClickDrop}
        children={<RoyalMailClickDropEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.UPS}
        children={<UPSEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step3.USPS}
        children={<USPSEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.Test}
        children={<TestServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.APC}
        children={<ApcServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.AustraliaPost}
        children={<AustraliaPostServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.CanadaPost}
        children={<CanadaPostServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.DeutschePost}
        children={<DeutschePostServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.DHL}
        children={<DHLServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.DPD}
        children={<DPDServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.DPDLocal}
        children={<DPDLocalServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.FedEx}
        children={<FedExServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.Hermes}
        children={<HermesServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.Parcelforce}
        children={<ParcelforceServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.RoyalMail}
        children={<RoyalMailServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.RoyalMailClickDrop}
        children={<RoyalMailClickDropServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.UPS}
        children={<UPSServiceEditSection onClose={onClose} />}
      />
      <Route
        path={AppRoutes.Settings.ConnectCarriers.Step4.USPS}
        children={<USPSServiceEditSection onClose={onClose} />}
      />
    </Switch>
  );
};
