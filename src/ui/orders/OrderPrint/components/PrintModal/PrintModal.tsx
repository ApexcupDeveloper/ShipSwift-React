import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';
import { ChildrenContainer } from '../../../Ship/components/ShipModal/ShipModal.styled';

import * as styled from './PrintModal.styled';

type Props = Pick<ModalProps, 'title' | 'height'> & {
  nextRoute?: string;
  footer?: React.ReactNode;
  onNext?: () => void;
  onClose?: () => void;
};

export const PrintModal: React.FC<Props> = ({ title, height, nextRoute, children, footer, onNext, onClose }) => {
	const { word } = useLocale();
  const { goBack, push } = useHistory();

  const onClickNext = useCallback(() => {
    onNext && onNext();
    nextRoute && push(nextRoute);
  }, [nextRoute, onNext, push]);
	
	return (
    <Modal
      title={title}
      visible
      width={400}
      height={height}
      children={<ChildrenContainer children={children}/>}
      footer={
        <>
          <styled.ButtonWrapper>
         		{footer}
            {!footer && <MainButton type="text" children={word('global.back')} onClick={goBack} />}
            <MainButton children={word('global.next')} onClick={onClickNext} />
          </styled.ButtonWrapper>
        </>
      }
    />
  );
};
