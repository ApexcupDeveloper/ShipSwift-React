import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductSearchRaw } from './ProductSearchRaw';

import { PlaceholderImage } from '../../views/OrderFormView/images';

import { generateArray } from '../../../../../utils';
import * as styled from './ProductSearchList.styled';

type Props = {};

const mockList = generateArray(3, (i) => ({
  key        : 'id' + i,
  item: {
		name: 'CSO-0001-43435',
		key: 'OPE02-TFC-100006',
		image: PlaceholderImage,
	},
  count   : '2',
  onAdd: () => {}
}) as const);

export const ProductSearchList: React.VFC<Props> = () => {
	const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('products')} />
        <TitleRaw.Item flex={0} children={word('kit.qty')} />
				<TitleRaw.Space flex={0}/>
      </TitleRaw>
      {mockList.map((props) => (
        <ProductSearchRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
