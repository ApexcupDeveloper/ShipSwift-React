import { ProductSearchRaw } from './ProductSearchRaw';

import { PlaceholderImage } from '../../../../products/Product/views/OrderFormView/images';

import { generateArray } from '../../../../../utils';
import * as styled from './ProductSearchList.styled';
import { InputSearch } from '../../../../@core/modules/Input';

type Props = {};

const mockList = generateArray(3, (i) => ({
  key        : 'id' + i,
  item: {
		name: 'CSO-0001-43435',
		key: 'OPE02-TFC-100006',
		image: PlaceholderImage,
	},
  added: !!(i%2),
  onAdd: () => {}
}) as const);

export const ProductSearchList: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <InputSearch/>
      {mockList.map((props) => (
        <ProductSearchRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
