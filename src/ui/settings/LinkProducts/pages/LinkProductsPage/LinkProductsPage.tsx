import { LinkProductsContainer } from '../../containers/LinkProductsContainer';
import { LinkProductsRouteView } from '../../views/LinkProductsRouteView';
import { LinkProductsView } from '../../views/LinkProductsView';

import * as styled from './LinkProductsPage.styled';

type Props = {};

export const LinkProductsPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <LinkProductsContainer>
        <LinkProductsView />
      </LinkProductsContainer>
      <LinkProductsRouteView />
    </styled.BodyWrapper>
  );
};
