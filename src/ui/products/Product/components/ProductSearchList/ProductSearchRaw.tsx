import { PlusIcon16 } from '../../../../../assets/icons';
import { MainButton } from '../../../../@core/modules/Button';
import { InputCustom } from '../../../../@core/modules/Input';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';

type Props = {
  item: {
    name: string;
    key: string;
    image: string;
  };
  count: number | string;
  onAdd: () => void;
};

export const ProductSearchRaw: React.VFC<Props> = ({ item, count, onAdd }) => {
  return (
    <ItemRaw>
      <ItemRaw.Merge>
        <ItemRaw.ProductImage src={item.image} />
        <ItemRaw.NameContainer>
          <ItemRaw.Title bold children={item.name} />
          <ItemRaw.Title children={item.key} />
        </ItemRaw.NameContainer>
      </ItemRaw.Merge>
      <InputCustom flex={0} />
      <ItemRaw.Space flex={0}>
        <MainButton icon={<PlusIcon16 />} type="secondary" onClick={onAdd} />
      </ItemRaw.Space>
    </ItemRaw>
  );
};
