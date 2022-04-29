import { useLocale } from '../../../../../assets/locale';

import { Checkbox } from '../../../../@core/modules/Checkbox';
import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { PriceRadio } from '../../components/PriceRadio';
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

import * as styled from './ServiceSection.styled';

type Props = {
  services: string[],
  onChange: (service: string, carrier: string) => void;
  onChangeTrack: (e: string) => void;
  selectedService: string,
  carrier: string;
  trackNumber: string;
};

const currencySymbol = '£';

export const ServiceSection: React.VFC<Props> = ({ services, carrier, selectedService, trackNumber, onChange, onChangeTrack }) => {
  const { word } = useLocale();
  const serviceList = services || [];

  return (
    <styled.BodyWrapper>
      {selectedService === carrier + 'ship_without_label' && (
        <FormCaption caption={word('global.track.number')}>
          <InputCustom value={trackNumber} onChange={onChangeTrack} />
        </FormCaption>
      )}
      <Checkbox label={word('global.ship.without.label')} checked={selectedService === carrier + 'ship_without_label'} onChange={() => {
        if (selectedService === carrier + 'ship_without_label') {
          onChange('', carrier)
        } else {
          onChange(carrier + 'ship_without_label', carrier)
        }
      }} />
      {
        serviceList.map((service, index) => {
          let staticServices =
            carrier === 'APC' ? APCServices :
              carrier === 'DeutschePost' ? DeutschePostServices :
                carrier === 'DHL' ? DHLServices :
                  carrier === 'DPDLocal' ? DPDLocalServices :
                    carrier === 'DPD' ? DPDServices :
                      carrier === 'Fedex' ? FedexServices :
                        carrier === 'Hermes' ? HermesServices :
                          carrier === 'Parcelforce' ? ParcelforceServices :
                            carrier === 'RoyalMail' ? RoyalMailServices :
                              carrier === 'RoyalMailClickAndDrop' ? RoyalMailClickDropServices :
                                carrier === 'UPS' ? UPSServices :
                                  carrier === 'Test' ? TestServices : [];

          let serviceName = staticServices.filter(s => s.value === service);

          if (service.length) {
            return (
              <PriceRadio
                label={serviceName.length > 0 ? serviceName[0].label : ''}
                value={serviceName.length > 0 ? serviceName[0].value : ''}
                currencySymbol={currencySymbol}
                price={'16.10'}
                key={'service' + index}
                selected={selectedService}
                onChange={(e: string) => {
                  let sService = staticServices.filter(s => s.label === e);
                  onChange(sService.length > 0 ? sService[0].value : '', carrier);
                }}
              />
            )
          }
        })
      }
    </styled.BodyWrapper>
  );
};
