import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import { MainButton } from '../../../../@core/modules/Button';
import { Checkbox } from '../../../../@core/modules/Checkbox';
import { Modal } from '../../../../@core/modules/Modal';

import { AppRoutes } from '../../../../app/api';

import * as styled from './ConnectStoreStep2Section.styled';
import { generateArray } from '../../../../../utils';

type Props = {
	onClose?: () => void;
};

const checkboxes = generateArray(5, (i) => ({
  key: i,
  label: 'DHL Domestic Express',
}));

export const ConnectStoreStep2Section: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
	const { push } = useHistory();

	const onNext = useCallback(() => push(AppRoutes.Settings.ConnectCarriers.Step3.Index), [push]);

  return (
    <Modal
      height={460}
      width={340}
			onClose={onClose}
      visible
      title={'Parcelforce account'}
      footer={<MainButton children={word('global.next')} onClick={onNext} />}
    >
      <styled.BodyWrapper>
        {checkboxes.map((props) => <Checkbox {...props} />)}
      </styled.BodyWrapper>
    </Modal>
  );
};
