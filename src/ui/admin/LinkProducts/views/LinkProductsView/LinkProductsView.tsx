import { useLocale } from '../../../../../assets/locale';

import { PageControl, PerPage, PlacementCard, Tab } from '../../../../@core/modules/ListBuilder';
import { InputSearch } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';
import { MainButton } from '../../../../@core/modules/Button';
import { ProductsList } from '../../components/ProductsList';
import { MultiSelectLinkProducts } from '../../components/MultiSelectLinkProducts';

import { ProductTabConfig } from './LinkProductsView.config';

import * as styled from './LinkProductsView.styled';

type Props = {};

export const LinkProductsView: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <Tab.Group>
            <Tab label={word('global.linked')} id={ProductTabConfig.Linked} default />
            <Tab label={word('global.unlinked')} id={ProductTabConfig.Unlinked} />
          </Tab.Group>
          <styled.RightHeaderSection>
            <InputSearch width={300} />
            <Select width={198} />
            <MainButton children={word('global.link.matched')} />
          </styled.RightHeaderSection>
        </PlacementCard.Header>
        <PlacementCard.Content>
          <Tab.Content id={ProductTabConfig.Linked}>
            <ProductsList />
          </Tab.Content>
          <Tab.Content id={ProductTabConfig.Unlinked}>
            <ProductsList />
          </Tab.Content>
        </PlacementCard.Content>
        <PlacementCard.Footer>
          <PageControl showEntries />
          <PerPage />
        </PlacementCard.Footer>
      </PlacementCard>
      <MultiSelectLinkProducts />
    </styled.BodyWrapper>
  );
};
