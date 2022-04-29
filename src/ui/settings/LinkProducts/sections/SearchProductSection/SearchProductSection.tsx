import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { ProductSearchList } from '../../components/ProductSearchList';

type Props = {
  onClose: () => void;
};

export const SearchProductSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();

  return (
    <Modal visible height={440} width={680} onClose={onClose} title={word('global.search.product')}>
      <ProductSearchList />
    </Modal>
  );
};
