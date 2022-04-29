import { PlacementCard } from '../../../../@core/modules/ListBuilder';
import { BillingStatistics } from '../../components/BillingStatistics';
import { BillingList } from '../../components/BillingList';

type Props = {};

export const BillingView: React.VFC<Props> = () => {

  return (
    <PlacementCard>
      <PlacementCard.Header>
        <BillingStatistics />
      </PlacementCard.Header>
      <PlacementCard.Content>
        <BillingList />
      </PlacementCard.Content>
    </PlacementCard>
  );
};
