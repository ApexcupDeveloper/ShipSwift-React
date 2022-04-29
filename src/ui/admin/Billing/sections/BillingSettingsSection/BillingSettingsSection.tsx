import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { Modal } from '../../../../@core/modules/Modal';
import { PaymentCardsList } from '../../components/PaymentCardsList';
import { MainButton } from '../../../../@core/modules/Button';

import { PlusIcon16, EditIcon18 } from '../../../../../assets/icons';

import * as styled from './BillingSettingsSection.styled';

const mocks = {
  address: 'Brooklyn Simmons, +3(989) 7312879   294 queenstown road, London, London, sw8 4lt, United Kingdom',
};

type Props = {
  onClose: () => void;
};

export const BillingSettingsSection: React.FC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onAdd = useCallback(() => push(AppRoutes.Settings.Billing.BillingSettings.NewPaymentMethod), [push]);
  const onEdit = useCallback(() => push(AppRoutes.Settings.Billing.BillingSettings.EditBillingAddress), [push]);

  return (
    <Modal visible width={680} onClose={onClose} title={'Billing settings'}>
      <styled.BodyWrapper>
        <PaymentCardsList />
        <styled.AddButtonWrapper>
          <MainButton
            type={'text-green'}
            icon={<PlusIcon16 />}
            children={word('global.add.new')}
            flat
            onClick={onAdd}
          />
        </styled.AddButtonWrapper>
        <styled.BillingWrapper>
          <span>{word('global.billing-address')}</span>
          <MainButton type={'text'} icon={<EditIcon18 />} flat onClick={onEdit} />
        </styled.BillingWrapper>
        <styled.BillingAddress children={mocks.address} />
      </styled.BodyWrapper>
    </Modal>
  );
};
