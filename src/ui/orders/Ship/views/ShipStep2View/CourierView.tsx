import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useCourierClient } from '../../../../../client/client-hook';
import { config } from '../../../../../private';
import { CarrierInfo } from '../../../../../proto/courierapi_pb';
import { getCompanyId } from '../../../../../utils';

import { MainButton } from '../../../../@core/modules/Button';
import { SmallAlert } from '../../../../@core/modules/Other';
import { AppRoutes } from '../../../../app/api';
import { carriers, adminCarriers } from '../../../../settings/ConnectCarriers/components/CarriersList/CarriersList.config';
import { addErrorToast } from '../../../../toast';
import { carriersData } from '../../../Orders/views/MultiShipView/MultiShipView.config';
import { CourierToggle } from '../../components/CourierToggle';


import { NoServiceSection } from '../../sections/NoServiceSection';
import { ServiceSection } from '../../sections/ServiceSection';

import * as styled from './ShipStep2View.styled';

type Props = {
  onChangePackage: (carrier: string) => void,
  onChange: (service: string, carrier: string) => void,
  onChangeTrack: (e: string) => void,
  selectedService: string,
  trackNumber: string
};

export const CourierView: React.VFC<Props> = ({ onChangePackage, selectedService, trackNumber, onChange, onChangeTrack }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const { pathname } = useLocation();
  const getclient = useCourierClient();
  const [carriersList, setCarriersList] = useState<CarrierInfo.AsObject[]>([]);
  const [staticCarriers, setStaticCarriers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);

  const onAddCourier = useCallback(() => push(AppRoutes.Settings.ConnectCarriers.Index), [push]);

  useEffect(() => {
    if (user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setStaticCarriers(adminCarriers)
      } else {
        setStaticCarriers(carriers)
      }

      getCarriers()
    }
  }, [user, pathname])

  const getCarriers = () => {
    setIsLoading(true);
    getclient()
      .then((client) => {
        client
          .listCarriers({ companyId: companyId })
          .then((data: any) => {
            setIsLoading(false);
            let tempArr = data.carriersList.filter((item: any) => item.enabled === true);
            tempArr.sort((a: any, b: any) => a.name.localeCompare(b.name));
            setCarriersList(tempArr)
          })
          .catch((err) => {
            setIsLoading(false);
            addErrorToast(err.message);
          })
      })
      .catch((err) => {
        setIsLoading(false);
        addErrorToast(err.message);
      })
  }

  if (isLoading)
    return null

  if (carriersList.length === 0)
    return (
      <styled.CourierContainer>
        <SmallAlert type="warning" description={word('order.ship.step-2.not-added-couriers')} />
        <styled.AddCourier>
          <MainButton children={word('global.add.courier')} onClick={onAddCourier} />
        </styled.AddCourier>
      </styled.CourierContainer>
    );

  return (
    <styled.CourierContainer>
      {
        carriersList.map((carrier) => {
          let selected = staticCarriers.filter(item => item.item.account === carrier.name)[0];
          let services: string[] = carrier.enabledServices.split(',');
          if (carrier.enabledServices.length) {
            return (
              <CourierToggle src={selected.item.image} name={selected.item.name}>
                <ServiceSection carrier={selected.item.account} services={services} selectedService={selectedService} trackNumber={trackNumber} onChange={onChange} onChangeTrack={onChangeTrack} />
              </CourierToggle>
            )
          } else {
            return (
              <CourierToggle src={selected.item.image} name={selected.item.name} >
                <NoServiceSection {...selected} carrier={selected.item.account} selectedService={selectedService} onChange={onChange} />
              </CourierToggle>
            )
          }
        })
      }
    </styled.CourierContainer>
  );
};
