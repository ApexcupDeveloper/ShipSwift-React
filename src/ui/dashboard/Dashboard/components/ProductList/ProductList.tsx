import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductRaw } from './ProductRaw';

import * as styled from './ProductList.styled';
import { ProductInfo } from '../../../../../proto/product_manager_pb';

type Props = {
  products: ProductInfo.AsObject[]
};

const mockList = [
  {
    key: 'id1',
    name: 'CSO-0001-43435',
    onHand: 2,
    salesVelocity: 2,
    inbound: 2,
  },
  {
    key: 'id2',
    name: 'CSO-0001-43435',
    onHand: 2,
    salesVelocity: 2,
    inbound: 2,
  },
  {
    key: 'id3',
    name: 'CSO-0001-43435',
    onHand: 2,
    salesVelocity: 2,
    inbound: 2,
  },
];

export const ProductList: React.FC<Props> = ({ products }) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('product.name')} />
        <TitleRaw.Item children={word('global.sku')} />
        <TitleRaw.Item children={word('global.barcode')} />
        <TitleRaw.Item flex={0.5} children={word('global.on-hand')} />
        <TitleRaw.Item flex={0.5} children={word('global.allocated')} />
        <TitleRaw.Item flex={0.5} children={word('global.available')} />
        <TitleRaw.Item flex={0.5} children={word('global.backorder')} />
      </TitleRaw>
      {products.map((props) => {
        let available = props.stockOnHand - props.stockAllocated;

        return (
          <ProductRaw
            key={props.sku}
            name={props.name}
            sku={props.sku}
            barcode={props.barcode}
            onHand={props.stockOnHand.toString()}
            available={available > 0 ? available.toString() : '0'}
            backorder={available < 0 ? (Math.abs(available)).toString() : '0'}
            allocated={props.stockAllocated.toString()}
          />
        )
      })}
    </styled.BodyWrapper>
  );
};
