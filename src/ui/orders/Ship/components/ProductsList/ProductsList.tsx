import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductsRaw } from './ProductsRaw';

import { PlaceholderImage } from '../../../../products/Product/views/OrderFormView/images';

import * as styled from './ProductsList.styled';
import { generateArray } from '../../../../../utils';
import { Product } from '../../../../../proto/order_manager_pb';

type Props = {
  products: Product.AsObject[]
};

export const ProductsList: React.VFC<Props> = ({ products }) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('product.name')} />
        <TitleRaw.Item flex={0.2} children={word('global.qty')} />
      </TitleRaw>
      {products.map((props) => (
        <ProductsRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
