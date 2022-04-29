import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import { AppRoutes } from '../../../../app/api';

import { PlusIcon16, UploadIcon16 } from '../../../../../assets/icons';
import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';
import { Select } from '../../../../@core/modules/Select';

import * as styled from './NavTabView.styled';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useCourierClient } from '../../../../../client/client-hook';
import { addErrorToast } from '../../../../toast';

type Props = {};


type ServiceProps = {
  value: string,
  label: string
}

export const NavTabView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getclient = useCourierClient();
  const [carriers, setCarriers] = useState<ServiceProps[]>([]);
  const [selectedCarrier, setSelectedCarrier] = useState<ServiceProps[]>([]);

  const onAddOrder = useCallback(() => push(AppRoutes.Orders.Add), [push]);

  useEffect(() => {
    if (companyId) {
      getclient()
        .then((client) => {
          client.listCarriers({
            companyId: companyId
          })
            .then((res: any) => {
              let tempCarriers: any[] = [];
              res.carriersList.map((item: any) => {
                if (item.name === 'RoyalMail' && item.enabled) {
                  tempCarriers = [...tempCarriers, {
                    label: 'Royal Mail',
                    value: item.name
                  }];
                }
                //TODO: Add more conditions for another carries when they are supported.
              })
              setCarriers(tempCarriers);
            })
            .catch((err) => {
              addErrorToast(err);
            })
        })
        .catch((err) => {
          addErrorToast(err);
        })
    }
  }, [companyId])

  return (
    <NavTabContainer>
      <styled.BodyWrapper>
        <MainButton icon={<UploadIcon16 />} type="text" children={word('global.upload.csv')} />
        {carriers.length > 0 && (
          <Select
            width={165}
            placeholder={word('global.end.day')}
            values={carriers}
            selectedValues={selectedCarrier}
            onSelectedChanged={setSelectedCarrier}
          />
        )}
        <MainButton icon={<PlusIcon16 />} children={word('global.add.order')} onClick={onAddOrder} />
      </styled.BodyWrapper>
    </NavTabContainer>
  );
};
