import { useLocale } from '../../../../../assets/locale';

import { IconButton } from '../../../../@core/modules/Button';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';

import { EditIcon18, TrashIcon16 } from '../../../../../assets/icons';

import * as styled from './WarehouseList.styled';
import { useRef } from 'react';
import { addInfoToast, updateToast } from '../../../../toast';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';
import { services as APCServices } from '../../sections/Step2/ApcServiceSection/ApcServiceSection.config';
import { services as DeutschePostServices } from '../../sections/Step2/DeutschePostServiceSection/DeutschePostServiceSection.config';
import { services as DHLServices } from '../../sections/Step2/DHLServiceSection/DHLServiceSection.config';
import { services as DPDLocalServices } from '../../sections/Step2/DPDLocalServiceSection/DPDLocalServiceSection.config';
import { services as DPDServices } from '../../sections/Step2/DPDServiceSection/DPDServiceSection.config';
import { services as FedexServices } from '../../sections/Step2/FedExServiceSection/FedExServiceSection.config';
import { services as HermesServices } from '../../sections/Step2/HermesServiceSection/HermesServiceSection.config';
import { services as ParcelforceServices } from '../../sections/Step2/ParcelforceServiceSection/ParcelforceServiceSection.config';
import { services as RoyalMailServices } from '../../sections/Step2/RoyalMailServiceSection/RoyalMailServiceSection.config';
import { services as RoyalMailClickDropServices } from '../../sections/Step2/RoyalMailClickDropServiceSection/RoyalMailClickDropServiceSection.config';
import { services as UPSServices } from '../../sections/Step2/UPSServiceSection/UPSServiceSection.config';
import { services as TestServices } from '../../sections/Step2/TestServiceSection/TestServiceSection.config';

import { useCourierClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';

type Props = {
  name: string;
  account: string;
  services: string[];
  // activated: boolean;
  carrierName: string;
  editPath: string;
  cutofftime?: string;
};

export const WarehouseRaw: React.VFC<Props> = ({ name, account, services, carrierName, editPath, cutofftime }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const getclient = useCourierClient();
  const toastId = useRef<any>(null);
  const companyId = getCompanyId(user);

  const onDelete = () => {
    toastId.current = addInfoToast('Deleting carrier...', false);
    getclient()
      .then((client) => {
        client.deleteCarrier({
          companyId: companyId,
          carrierName: carrierName
        })
          .then((data) => {
            updateToast(toastId.current, 'Successfully deleted carrier', 'success', 5000);
            push(AppRoutes.Settings.ConnectCarriers.Index);
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
      })
  }

  const onEdit = () => push(editPath, { services, cutofftime });

  return (
    <ItemRaw>
      <ItemRaw.Title bold children={name} />
      <ItemRaw.Title children={account || '-'} />
      <ItemRaw.Title children={cutofftime || '-'} />
      <styled.ListWrapper>
        {
          services.map((item, index) => {
            let staticServices =
              carrierName === 'APC' ? APCServices :
              carrierName === 'DeutschePost' ? DeutschePostServices :
              carrierName === 'DHL' ? DHLServices : 
              carrierName === 'DPDLocal' ? DPDLocalServices : 
              carrierName === 'DPD' ? DPDServices : 
              carrierName === 'Fedex' ? FedexServices :
              carrierName === 'Hermes' ? HermesServices : 
              carrierName === 'Parcelforce' ? ParcelforceServices : 
              carrierName === 'RoyalMail' ? RoyalMailServices : 
              carrierName === 'RoyalMailClickAndDrop' ? RoyalMailClickDropServices : 
              carrierName ==='UPS' ? UPSServices :
              carrierName === 'Test' ? TestServices : [];

            let service = staticServices.filter(s => s.value === item);
            if (services.length === 1 && item === "") {
              return (
                <ItemRaw.Title children={word('global.none')} key={'title' + index} />
              )
            }
            if (item !== "") {
              return (
                <ItemRaw.Title children={service.length > 0 ? service[0].label : ''} key={'title' + index} />
              )
            }
          })
        }
      </styled.ListWrapper>
      {/* {!activated && <MainButton type="text-green" flat children={word('global.activate')} />}
      {activated && ( */}
      <styled.IconButtonWrapper>
        <IconButton onClick={onEdit}>
          <EditIcon18 />
        </IconButton>
        <IconButton onClick={onDelete}>
          <TrashIcon16 />
        </IconButton>
      </styled.IconButtonWrapper>
      {/* )} */}
    </ItemRaw>
  );
};
