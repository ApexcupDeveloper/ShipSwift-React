import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { Modal } from '../../../../@core/modules/Modal';
import { Select } from '../../../../@core/modules/Select';

import * as styled from './ConnectStoreStep1Section.styled';

type Props = {
	onClose?: () => void;
};

export const ConnectStoreStep1Section: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
	const { push } = useHistory();

	const onNext = useCallback(() => push(AppRoutes.Settings.ConnectCarriers.Step2.Index), [push]);

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
        <FormCaption caption={word('global.contract.no')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.username')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.password')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.label.size')}>
          <Select />
        </FormCaption>
      </styled.BodyWrapper>
    </Modal>
  );
};
