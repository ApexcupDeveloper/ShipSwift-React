import { useCallback, useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';

import * as styled from './ShipModal.styled';
import { OrderItem } from '../../../../../client/client';

type Props = {
  orderNumber: string;
  nextRoute?: string;
  closeRoute?: string;
  nextButtonTitle?: string;
  orderData: OrderItem;
  onNext?: () => void;
  onClose?: () => void;
};

export const ShipModal: React.FC<Props> = ({ orderNumber, orderData, nextRoute, closeRoute, children, nextButtonTitle, onNext, onClose }) => {
  const { word } = useLocale();
  const { goBack, push } = useHistory();

  const title = useMemo(() => `${word('global.ship.order')} ${orderNumber}`, [orderNumber, word]);

  const onClickNext = useCallback(() => {
    onNext && onNext();
    nextRoute && push(nextRoute, { orderData, nRoute: nextRoute, cRoute: closeRoute });
  }, [nextRoute, onNext, push]);

  return (
    <Modal
      title={title}
      width={730}
      children={<styled.ChildrenContainer children={children} />}
      onClose={onClose}
      visible
      footer={
        <styled.ButtonWrapper>
          <MainButton type="text" children={word('global.back')} onClick={goBack} />
          <MainButton children={nextButtonTitle ?? word('global.next')} onClick={onClickNext} />
        </styled.ButtonWrapper>
      }
    />
  );
};
