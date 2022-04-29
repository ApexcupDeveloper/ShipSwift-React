import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductRaw } from './ProductsRaw';

import * as styled from './ProductsList.styled';
import { generateArray } from '../../../../../utils';

import { PlaceholderImage } from '../../../../products/Product/views/OrderFormView/images';

type Props = {};

type RawType = React.ComponentProps<typeof ProductRaw>;
const mockList = generateArray<RawType>(10, (i) => ({
  key: 'id' + i,
  product: {
    name : 'Playstation 4 Limited Edition (with games)',
    code : 'OPE02-TFC-100006',
    image: PlaceholderImage,
  },
  shipSwiftProduct: !!(i%2) ? {
    name : 'Playstation 4 Limited Edition (with games)',
    code : 'OPE02-TFC-100006',
    image: PlaceholderImage,
  } : undefined,
}));

export const ProductsList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Merge>
          <TitleRaw.Checkbox />
          <TitleRaw.Item children={word('global.product')} />
        </TitleRaw.Merge>
        <TitleRaw.Item align='left' children={word('global.matching.product.in.shipswift')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {mockList.map((props) => (
          <ProductRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
