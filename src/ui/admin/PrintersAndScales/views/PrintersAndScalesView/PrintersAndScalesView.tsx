import { PlacementCard } from '../../../../@core/modules/ListBuilder';
import { ScalesList } from '../../components/ScalesList';

type Props = {};

export const PrintersAndScalesView: React.VFC<Props> = () => {
  return (
    <PlacementCard>
      <PlacementCard.Content>
        <ScalesList />
      </PlacementCard.Content>
    </PlacementCard>
  );
};
