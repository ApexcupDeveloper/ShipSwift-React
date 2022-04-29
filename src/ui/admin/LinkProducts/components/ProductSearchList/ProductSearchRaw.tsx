import { MainButton } from '../../../../@core/modules/Button';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';

import { CheckIcon16, PlusIcon16 } from '../../../../../assets/icons';

type Props = {
  item: {
    name: string;
    key: string;
    image: string;
  };
  added: boolean;
  onAdd: () => void;
};

export const ProductSearchRaw: React.VFC<Props> = ({ item, added, onAdd }) => {
  return (
    <ItemRaw>
      <ItemRaw.Merge>
        <ItemRaw.ProductImage src={item.image} />
        <ItemRaw.NameContainer>
          <ItemRaw.Title bold children={item.name} />
          <ItemRaw.Title children={item.key} />
        </ItemRaw.NameContainer>
      </ItemRaw.Merge>
      <ItemRaw.Space flex={0}>
        {added && <MainButton icon={<CheckIcon16 />} type="secondary" onClick={onAdd} />}
        {!added && <MainButton icon={<PlusIcon16 />} type="secondary" onClick={onAdd} />}
      </ItemRaw.Space>
    </ItemRaw>
  );
};
