import { useEffect } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useSelectPage } from '../../../../@core/modules/ListBuilder/hooks';

import { PageControl, PerPage, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { OrdersList } from '../../components/ProductsList';

import * as styled from './ProductsView.styled';
import { MainButton } from '../../../../@core/modules/Button';
import { PlusIcon16 } from '../../../../../assets/icons';
import { Product } from '../../../../../proto/order_manager_pb';
import { useSelector } from 'react-redux';

type Props = {
  products: Product.AsObject[]
};

export const ProductsView: React.VFC<Props> = ({ products }) => {
  const { setPageCount, pageCount } = useSelectPage();
  const { word } = useLocale();
  const companyData = useSelector((state: any) => state.company.company);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPageCount(Math.ceil(products.length / 5)), [products]);

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <PlacementCard.Title children={word('products')} />
          <MainButton icon={<PlusIcon16 />} type="secondary" children={word('global.add.product')} />
        </PlacementCard.Header>
        <PlacementCard.Content>
          <OrdersList products={products} companyData={companyData} />
        </PlacementCard.Content>
        <PlacementCard.Footer>
          {pageCount > 1 ? (<PageControl />) : (<div></div>)}
          <PerPage />
        </PlacementCard.Footer>
      </PlacementCard>
    </styled.BodyWrapper>
  );
};
