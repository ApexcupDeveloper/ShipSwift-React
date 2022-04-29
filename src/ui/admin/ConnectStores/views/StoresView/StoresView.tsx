import { PlacementCard } from '../../../../@core/modules/ListBuilder';
import { DisplayRound } from '../../../../@core/modules/Other';
import { StoresList } from '../../components/StoresList';

import * as styled from './StoresView.styled';

type Props = {};

export const StoresView: React.VFC<Props> = () => {
  return (
    <DisplayRound overflow>
      <styled.BodyWrapper>
        <PlacementCard>
          <PlacementCard.Content>
            <StoresList />
          </PlacementCard.Content>
        </PlacementCard>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
