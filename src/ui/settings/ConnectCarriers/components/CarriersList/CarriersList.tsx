import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { CarriersRaw } from './CarriersRaw';

import * as styled from './CarriersList.styled';
import { carriers, adminCarriers } from './CarriersList.config';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addErrorToast } from '../../../../toast';
import { useState } from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';
import { useCourierClient } from '../../../../../client/client-hook';
import { ListCarriersRequest } from '../../../../../proto/courierapi_pb';
import { getCompanyId } from '../../../../../utils';

type Props = {};

export const CarriersList: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { pathname } = useLocation();
  const { user } = useAuth0();
  const getclient = useCourierClient();
  const [updating, setUpdating] = useState('');
  const [carriersList, setCarriersList] = useState<any[]>([]);
  const [staticCarriers, setStaticCarriers] = useState<any[]>([]);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);

  useEffect(() => {
    if(user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setStaticCarriers(adminCarriers)
      } else {
        setStaticCarriers(carriers)
      }

      getCarriers()
    }
  }, [user, pathname, updating])

  const getCarriers = () => {
    getclient()
      .then((client) => {
        client
          .listCarriers({ companyId: companyId })
          .then((data: any) => {
            setCarriersList(data.carriersList)
          })
          .catch((err) => {
            addErrorToast(err.message);
          })
      })
      .catch((err) => {
        addErrorToast(err.message);
      })
  }

  const enableStatus = (companyId: string, carrierName: string, enabled: boolean, status: boolean) => {
    getclient()
      .then((client) => {
        if (status) {
          setUpdating('');
          if (enabled) {
            client
              .toggleCarrier({
                companyId: companyId,
                carrierName: carrierName,
                enabled: false
              })
              .then((data) => {
                setUpdating('disable');
              })
              .catch((err) => {
                addErrorToast(err);
              })
          } else {
            client
              .toggleCarrier({
                companyId: companyId,
                carrierName: carrierName,
                enabled: true
              })
              .then((data) => {
                setUpdating('enable');
              })
              .catch((err) => {
                addErrorToast(err);
              })
          }
        }
      })
      .catch((err) => {
        addErrorToast(err);
      })
  }

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Item children={word('global.shipping.carrier')} />
      </TitleRaw>
      {staticCarriers.map((props) => {
        let selectedCarrier: any[] = carriersList.filter((item: any) => item.name === props.item.account)
        let status = carriersList.some((item: any) => item.name === props.item.account);
        return (
          <CarriersRaw
            {...props}
            status={status}
            toggle={selectedCarrier.length ? selectedCarrier[0].enabled : false}
            onToggle={() => enableStatus(companyId, props.item.account, selectedCarrier.length ? selectedCarrier[0].enabled : false, status)}
          />
        )
      })}
    </styled.BodyWrapper>
  );
};
