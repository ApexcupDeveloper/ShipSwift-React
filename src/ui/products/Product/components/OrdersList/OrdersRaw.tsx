import { ItemRaw, StatusLabel } from '../../../../@core/modules/ListBuilder';
import { AvatarLetter } from '../../../../@core/modules/Other';
import parse from 'html-react-parser';
import { useHistory } from 'react-router';
import { useCallback, useMemo } from 'react';
import { AppRoutes } from '../../../../app/api';

type Props = {
  name       : string;
  orderDate  : string;
  quantity   : string;
  orderStatus: StatusLabel;
  iconColour : string;
  shortName  : string;
  storeId    : string;
};

export const ProductRaw: React.VFC<Props> = ({ name, orderDate, quantity, orderStatus, iconColour, shortName, storeId }) => {
  const { push } = useHistory();
  const orderLink = useMemo(() => AppRoutes.Orders.Order.Index.replace(':storeId', storeId).replace(':id', name), [storeId, name]);
  const onOpenOrder = useCallback(() => push(orderLink, {}), [orderLink, push]); //props for Product. Looks like in OrderRaw

  return (
    <ItemRaw hover onClick={onOpenOrder}>
			<ItemRaw.Merge>
				<AvatarLetter name={shortName} size={34} backgroundColor={iconColour} />
      	<ItemRaw.Title bold children={name} />
			</ItemRaw.Merge>
      <ItemRaw.Title children={parse(orderDate)} />
      <ItemRaw.Title children={quantity} />
      <ItemRaw.OrderStatus label={orderStatus} />
    </ItemRaw>
  );
};
