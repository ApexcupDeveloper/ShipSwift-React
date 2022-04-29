import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { MethodsRaw } from './MethodsRaw';

import * as styled from './MethodsList.styled';
import { useEffect, useState } from 'react';
import { useCourierClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { addErrorToast } from '../../../../toast';
import { getCompanyId } from '../../../../../utils';

import { services as APCServices } from '../../../../settings/ConnectCarriers/sections/Step2/ApcServiceSection/ApcServiceSection.config';
import { services as DeutschePostServices } from '../../../../settings/ConnectCarriers/sections/Step2/DeutschePostServiceSection/DeutschePostServiceSection.config';
import { services as DHLServices } from '../../../../settings/ConnectCarriers/sections/Step2/DHLServiceSection/DHLServiceSection.config';
import { services as DPDLocalServices } from '../../../../settings/ConnectCarriers/sections/Step2/DPDLocalServiceSection/DPDLocalServiceSection.config';
import { services as DPDServices } from '../../../../settings/ConnectCarriers/sections/Step2/DPDServiceSection/DPDServiceSection.config';
import { services as FedexServices } from '../../../../settings/ConnectCarriers/sections/Step2/FedExServiceSection/FedExServiceSection.config';
import { services as HermesServices } from '../../../../settings/ConnectCarriers/sections/Step2/HermesServiceSection/HermesServiceSection.config';
import { services as ParcelforceServices } from '../../../../settings/ConnectCarriers/sections/Step2/ParcelforceServiceSection/ParcelforceServiceSection.config';
import { services as RoyalMailServices } from '../../../../settings/ConnectCarriers/sections/Step2/RoyalMailServiceSection/RoyalMailServiceSection.config';
import { services as RoyalMailClickDropServices } from '../../../../settings/ConnectCarriers/sections/Step2/RoyalMailClickDropServiceSection/RoyalMailClickDropServiceSection.config';
import { services as UPSServices } from '../../../../settings/ConnectCarriers/sections/Step2/UPSServiceSection/UPSServiceSection.config';
import { services as TestServices } from '../../../../settings/ConnectCarriers/sections/Step2/TestServiceSection/TestServiceSection.config';
import { adminCarriers } from '../../../ConnectCarriers/components/CarriersList/CarriersList.config';

type Props = {};

export const MethodsList: React.VFC<Props> = () => {
  const { word } = useLocale();
  const getclient = useCourierClient();
  const { user } = useAuth0();
  const [services, setServices] = useState<any[]>([]);
  const companyId = getCompanyId(user);

  useEffect(() => {
    if (user) {
      getclient()
        .then((client) => {
          client
            .listCarriers({ companyId: companyId })
            .then((data: any) => {
              let tempServices: any[] = [];
              let tempArr = data.carriersList.filter((item: any) => item.enabled === true);
              tempArr.sort((a: any, b: any) => a.name.localeCompare(b.name));
              tempArr.map((item: any) => {
                let carrierName = adminCarriers.filter(carrier => carrier.item.account === item.name).length ? adminCarriers.filter(carrier => carrier.item.account === item.name)[0].item.name : '';
                let staticServices =
                  item.name === 'APC' ? APCServices :
                  item.name === 'DeutschePost' ? DeutschePostServices :
                  item.name === 'DHL' ? DHLServices :
                  item.name === 'DPDLocal' ? DPDLocalServices :
                  item.name === 'DPD' ? DPDServices :
                  item.name === 'Fedex' ? FedexServices :
                  item.name === 'Hermes' ? HermesServices :
                  item.name === 'Parcelforce' ? ParcelforceServices :
                  item.name === 'RoyalMail' ? RoyalMailServices :
                  item.name === 'RoyalMailClickAndDrop' ? RoyalMailClickDropServices :
                  item.name === 'UPS' ? UPSServices :
                  item.name === 'Test' ? TestServices : [];
 
                let serviceList: string[] = item.enabledServices.split(',');

                if (serviceList.length) {
                  serviceList.map((service) => {
                    if (service.length) {
                      let serviceName = staticServices.filter(s => s.value === service);
                      if(serviceName && serviceName.length) {
                        tempServices.push({ name: 'Name', courier: carrierName, service: serviceName[0].label, cost: '10' });
                      }
                    }
                  })
                }
              });
              setServices(tempServices);
            })
            .catch((err) => {
              addErrorToast(err);
            })
        })
        .catch((err) => {
          addErrorToast(err);
        })
    }
  }, [user])

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Item children={word('global.name')} />
        <TitleRaw.Item children={word('global.courier')} />
        <TitleRaw.Item children={word('global.service')} />
        <TitleRaw.Item children={word('global.cost')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {services.map((props) => (
        <MethodsRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
