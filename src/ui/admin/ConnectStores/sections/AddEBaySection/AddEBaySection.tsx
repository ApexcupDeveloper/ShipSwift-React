import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { Select } from '../../../../@core/modules/Select';
import { AddStoreModal } from '../../components/AddStoreModal';

type Props = {
  onClose: () => void;
};

const store = 'eBay';

export const AddEBaySection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();

	const eBayRegion = useMemo(() => `${store} ${word('global.region')}`, [word]);

  return (
    <AddStoreModal storeName={store} nextPath={'#'} onClose={onClose}>
      <ListSection>
        <FormCaption caption={eBayRegion}>
          <Select />
        </FormCaption>
      </ListSection>
    </AddStoreModal>
  );
};
