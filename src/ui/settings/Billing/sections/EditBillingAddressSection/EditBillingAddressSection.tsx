import { useLocale } from '../../../../../assets/locale';
import { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { AppRoutes } from '../../../../app/api';

import { Modal } from '../../../../@core/modules/Modal';
import { MainButton } from '../../../../@core/modules/Button';
import { EditBillingAddress } from '../../components/EditBillingAddress';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addErrorToast, addSuccessToast } from '../../../../toast';

type Props = {
  onClose: () => void;
};

type AddressProps = {
  city: string;
  country: string;
  line1: string;
  line2: string;
  postalCode: string;
  state: string;
}

export const EditBillingAddressSection: React.FC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useGrpcClient();
  const { push } = useHistory();
  const { state } = useLocation();
  const [addressData, setAddressData] = useState<AddressProps>({
    city: '',
    country: '',
    line1: '',
    line2: '',
    postalCode: '',
    state: ''
  })

  useEffect(() => {
    if (state) {
      const stateData = state as AddressProps;
      setAddressData(stateData);
    }
  }, [state])

  const onSave = () => {
    getClient()
    .then((client) => {
      client
      .updateBillingAddress({
        companyId,
        ...addressData
      })
      .then((res) => {
        addSuccessToast('Successfully updated!');
        push(AppRoutes.Settings.Billing.BillingSettings.Index)
      })
      .catch((err) => {
        addErrorToast(err.message);
      })
    })
    .catch((err) => {
      addErrorToast(err.message);
    })
  }

  return (
    <Modal
      visible
      title={word('global.edit-billing-address')}
      onClose={onClose}
      height={500}
      width={680}
      footer={<MainButton children={word('global.save')} onClick={onSave} />}
    >
      <EditBillingAddress addressData={addressData} onChange={(key, value) => {
        setAddressData((prevState) => ({
          ...prevState,
          [key]: value,
        }))
      }} />
    </Modal>
  );
};
