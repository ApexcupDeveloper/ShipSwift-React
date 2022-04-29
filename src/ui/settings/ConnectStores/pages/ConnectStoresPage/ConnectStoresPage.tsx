import { StoresContainer } from '../../containers/StoresContainer';

import { ConnectStoresRouteView } from '../../views/ConnectStoresRouteView';
import { NavTabView } from '../../views/NavTabView';
import { StoresView } from '../../views/StoresView';

import * as styled from './ConnectStoresPage.styled';

type Props = {};

export const ConnectStoresPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabView />
      <StoresContainer>
        <StoresView />
      </StoresContainer>
      <ConnectStoresRouteView />
    </styled.BodyWrapper>
  );
};
