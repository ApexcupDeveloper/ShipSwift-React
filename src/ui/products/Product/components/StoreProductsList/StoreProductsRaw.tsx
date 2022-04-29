import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { AvatarLetter } from '../../../../@core/modules/Other';

type Props = {
  name       : string;
  sku        : string;
  price      : string;
  iconColour : string;
  shortName  : string;
  url        : string;
};

export const StoreProductsRaw: React.VFC<Props> = ({ name, iconColour, shortName, sku, price, url }) => {
  const onOpen = () => {
    window.open(url, '_blank');
  }

  return (
    <ItemRaw hover onClick={onOpen}>
			<ItemRaw.Merge flex={6}>
				<AvatarLetter name={shortName} size={34} backgroundColor={iconColour} />
      	<ItemRaw.Title bold children={name} />
			</ItemRaw.Merge>
      <ItemRaw.Title children={sku} />
      <ItemRaw.Title children={price} />
    </ItemRaw>
  );
};
