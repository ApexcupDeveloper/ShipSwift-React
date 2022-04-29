import { Product } from '../../../../../../proto/order_manager_pb';
import * as styled from './ItemRaw.styled';

type Props = {
  flex: number;
  products: Product.AsObject[];
};

export const ProductItem: React.FC<Props> = ({ products, flex = 1 }) => {
  return (
    <styled.ProductItem flex={flex}>
      {products.map((item) => {
        const name = item.shipswiftProductName;
        return (
            <styled.ProductItemRowWrapper key={item.sku}>
              <styled.Bage children={item.quantity} />
              <styled.ProductItemRow id={name}>{name}</styled.ProductItemRow>
            </styled.ProductItemRowWrapper>
          )
      })}
    </styled.ProductItem>
  );
};
