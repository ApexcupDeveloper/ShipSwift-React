import { useEffect } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useSelectPage } from '../../../../@core/modules/ListBuilder/hooks';

import { PageControl, PerPage, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { ProductHistoryList } from '../../components/ProductHistoryList';

import * as styled from './ProductHistoryView.styled';

type Props = {};

export const ProductHistoryView: React.VFC<Props> = () => {
  const { setPageCount } = useSelectPage();
  const { word } = useLocale();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPageCount(3), []);

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <PlacementCard.Title children={word('product.history')} />
        </PlacementCard.Header>
        <PlacementCard.Content showSplitter> 
          <ProductHistoryList />
        </PlacementCard.Content>
        <PlacementCard.Footer>
          <PageControl />
          <PerPage />
        </PlacementCard.Footer>
      </PlacementCard>
    </styled.BodyWrapper>
  );
};
