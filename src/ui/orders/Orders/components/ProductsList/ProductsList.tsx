import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductRaw } from './ProductsRaw';

import * as styled from './ProductsList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

type RawType = React.ComponentProps<typeof ProductRaw>;
const mockList = generateArray<RawType>(10, (i) => ({
  key: 'id' + i,
  name: 'Gaming Chair, local pickup only',
  sku: 'OPE02-TFC-100006',
  barcode: 'CJJMO9083',
  onHand: '8',
  available: '8',
  backorder: '1',
  allocated: '12',
}));

export const ProductsList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Merge flex={1.5}>
          <TitleRaw.Checkbox />
          <TitleRaw.Item children={word('product.name')} />
        </TitleRaw.Merge>
        <TitleRaw.Item children={word('global.sku')} />
        <TitleRaw.Item children={word('global.barcode')} />
        <TitleRaw.Item flex={0.5} children={word('global.on-hold')} />
        <TitleRaw.Item flex={0.5} children={word('global.available')} />
        <TitleRaw.Item flex={0.5} children={word('global.backorder')} />
        <TitleRaw.Item flex={0.5} children={word('global.allocated')} />
      </TitleRaw>
      {mockList.map((props) => (
          <ProductRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
