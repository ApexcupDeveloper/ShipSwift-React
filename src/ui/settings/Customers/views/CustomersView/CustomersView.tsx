import { InputSearch } from '../../../../@core/modules/Input';
import { PageControl, PerPage, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { CustomersList } from '../../components/CustomersList';
import { TooltipsList } from '../../../../@core/modules/Tooltip';

import * as styled from './CustomersView.styled';

type Props = {};

export const CustomersView: React.VFC<Props> = () => {
  return (
    <PlacementCard>
      <PlacementCard.Header>
        <styled.HeaderWrapper>
          <InputSearch />
        </styled.HeaderWrapper>
      </PlacementCard.Header>
      <PlacementCard.Content>
        <TooltipsList>
          <CustomersList />
        </TooltipsList>
      </PlacementCard.Content>
      <PlacementCard.Footer>
        <PageControl showEntries />
        <PerPage />
      </PlacementCard.Footer>
    </PlacementCard>
  );
};
