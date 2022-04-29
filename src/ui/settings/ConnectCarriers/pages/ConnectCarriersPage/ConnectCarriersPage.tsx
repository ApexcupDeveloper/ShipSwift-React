import { DisplayRound } from '../../../../@core/modules/Other';
import { CarriersList } from '../../components/CarriersList';
import { ConnectStoreView } from '../../views/ConnectStoreView';

import * as styled from './ConnectCarriersPage.styled';

type Props = {};

export const ConnectCarriersPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <DisplayRound>
        <CarriersList />
      </DisplayRound>
      <ConnectStoreView />
    </styled.BodyWrapper>
  );
};
