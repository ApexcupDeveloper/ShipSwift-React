import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { Modal } from '../../../../@core/modules/Modal';
import { SmallAlert } from '../../../../@core/modules/Other';

import * as styled from './StoreAddedSection.styled';

type Props = {
	onClose: () => void;
};

const productCount = 1027;

export const StoreAddedSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();

	const productsMessage = useMemo(() => `${productCount} ${word('setup-store.products-added')}`, [word])

  return (
    <Modal
      visible
      onClose={onClose}
      width={340}
      height={245}
      title={word('global.store.added')}
			hideFooterSplitter
      footer={<MainButton children={word('global.okay')} onClick={onClose} />}
    >
      <ListSection>
        <SmallAlert type="success" description={productsMessage} />
        <styled.Description children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices fusce fames '} />
      </ListSection>
    </Modal>
  );
};
