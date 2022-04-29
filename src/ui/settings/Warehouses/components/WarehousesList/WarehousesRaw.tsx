import { useCallback, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { ItemRaw, MoreMenu } from '../../../../@core/modules/ListBuilder';
import { AppRoutes } from '../../../../app/api';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { useWithoutBubble } from '../../../../@core/hooks/useWithoutBubble';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';
import { getCompanyId } from '../../../../../utils';
import { addInfoToast, updateToast } from '../../../../toast';
import { countries } from '../../../General/pages/GeneralPage/GeneralPage.config';

type Props = {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  data: CompanyInfo.AsObject;
  handleChangeEvent: () => void;
};

export const WarehousesRaw: React.VFC<Props> = ({ id, name, email, phone, country, data, handleChangeEvent }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const getClient = useGrpcClient();
  const companyId = getCompanyId(user);
  const toastId = useRef<any>(null);

  const onClickWithoutBubble = useWithoutBubble();

  const customerPath = useCallback(() => push(AppRoutes.Settings.Warehouses.Selected.Index.replace(':id', id), { data }), [id, push]);

  const onDelete = () => {
    toastId.current = addInfoToast('Deleting wareshouse information', false);
    getClient()
      .then((client) => {
        client
          .deleteWarehouse({
            companyId: companyId,
            warehouseId: id
          })
          .then((res) => {
            updateToast(toastId.current, 'Successfully deleted', 'success', 5000);
            handleChangeEvent();
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
      })
  }

  return (
    <ItemRaw hover onClick={customerPath}>
      <ItemRaw.Title bold children={name} />
      <ItemRaw.Title children={email} />
      <ItemRaw.Title children={phone} />
      <ItemRaw.Title flex={0} children={countries.filter(item => item.value === country)[0].label} />
      <MoreMenu onClickWrapper={onClickWithoutBubble}>
        {/* <MoreMenu.Button children={word('global.edit')} /> */}
        <MoreMenu.Button children={word('global.delete')} onClick={onDelete} />
      </MoreMenu>
    </ItemRaw>
  );
};
