import { useLocale } from '../../../../../assets/locale';

import { MultiSelect } from '../../../../@core/modules/MultiSelectBuilder';
import { MainButton } from '../../../../@core/modules/Button';

type Props = {};

const mocks = {
  items: 4,
};

export const MultiSelectLinkProducts: React.FC<Props> = ({ children }) => {
  const { word } = useLocale();

  return (
    <MultiSelect visible={true}>
      <MultiSelect.ItemsSelected items={mocks.items} />
      <MainButton type="text-white" flat children={word('global.link.selected')} />
      <MainButton type="text-white" flat children={word('global.unlink.selected')} />
      <MultiSelect.Devider />
      <MainButton type="text" flat children={word('global.clear.selections')} />
    </MultiSelect>
  );
};
