import { useCallback, useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';

import * as styled from './ShipmentViewModal.styled';
import { OrderItem } from '../../../../../client/client';

type Props = {
  orderNumber: string;
  nextRoute?: string;
  nextButtonTitle?: string;
  orderData: OrderItem;
  onNext?: () => void;
  onClose?: () => void;
};

const orderKey = '{{ORDER_NUMBER}}';

export const ShipmentViewModal: React.FC<Props> = ({ orderNumber, orderData, nextRoute, children, nextButtonTitle, onNext, onClose }) => {
  const { word } = useLocale();
  const { goBack, push } = useHistory();

  const title = useMemo(() => `${word('global.shipment.for').replace(orderKey, orderNumber)}`, [orderNumber, word]);

  const onClickNext = useCallback(() => {
    onNext && onNext();
    nextRoute && push(nextRoute, orderData);
  }, [nextRoute, onNext, push]);

  return (
    <Modal
      title={title}
      width={730}
      height={500}
      children={<styled.ChildrenContainer children={children} />}
      onClose={onClose}
      visible
    />
  );
};
