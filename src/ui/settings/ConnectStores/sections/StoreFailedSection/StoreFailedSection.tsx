import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { Modal } from '../../../../@core/modules/Modal';
import { SmallAlert } from '../../../../@core/modules/Other';
import { AppRoutes } from '../../../../app/api';

import * as styled from './StoreFailedSection.styled';

type Props = {
	onClose: () => void;
};

const productCount = 1027;

export const StoreFailedSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
	const { push } = useHistory();

	const productsMessage = useMemo(() => `${productCount} ${word('setup-store.products-failed')}`, [word])
	const onRaise = useCallback(() => push(AppRoutes.Settings.ConnectStores.SetUpStore.RaiseTicket), [push])

  return (
    <Modal
      visible
      onClose={onClose}
      width={340}
      height={245}
      title={word('global.failed')}
			hideFooterSplitter
      footer={<MainButton children={word('global.raise.ticket')} onClick={onRaise} />}
    >
      <ListSection>
        <SmallAlert type="warning-red" description={productsMessage} />
        <styled.Description children={word('setup-store.products-failed.description')} />
      </ListSection>
    </Modal>
  );
};
