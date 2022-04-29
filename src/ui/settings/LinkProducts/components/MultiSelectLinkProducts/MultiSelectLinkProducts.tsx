import { useLocale } from '../../../../../assets/locale';

import { MultiSelect } from '../../../../@core/modules/MultiSelectBuilder';
import { MainButton } from '../../../../@core/modules/Button';
import { useSelectTab } from '../../../../@core/modules/ListBuilder/hooks';

type Props = {
  count: number,
  onAdd: () => void,
  onClear: () => void,
  onLink: () => void,
  onUnlink: () => void,
};

export const MultiSelectLinkProducts: React.FC<Props> = ({ count, onClear, onAdd, onLink, onUnlink }) => {
  const { word } = useLocale();
  const { selectedTab } = useSelectTab();

  return (
    <MultiSelect visible={true}>
      <MultiSelect.ItemsSelected items={count} />
      {selectedTab === 'linked' && (<MainButton type="text-white" flat children={word('global.unlink.selected')} onClick={onUnlink} />)}
      {selectedTab === 'unlinked' && (<MainButton type="text-white" flat children={word('global.link.selected')} onClick={onLink} />)}
      {selectedTab !== 'linked' && (<MainButton type="text-white" flat children={word('global.create.selected')} onClick={onAdd} />)}
      <MainButton type="text-white" flat children={word('global.archive.selected')} />
      <MainButton type="text-white" flat children={word('global.unarchive.selected')} />
      <MultiSelect.Devider />
      <MainButton type="text" flat children={word('global.clear.selections')} onClick={onClear} />
    </MultiSelect>
  );
};
