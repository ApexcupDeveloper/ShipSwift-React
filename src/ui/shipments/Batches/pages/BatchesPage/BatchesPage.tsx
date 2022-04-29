import { BatchesContainer } from '../../containers/BatchesContainer';
import { BatchesRouteView } from '../../views/BatchesRouteView';
import { BatchesView } from '../../views/BatchesView';
// import { NavTabsView } from '../../views/NavTabsView';

import * as styled from './BatchesPage.styled';

type Props = {};

export const BatchesPage: React.VFC<Props> = () => {
  // console.log('BatchesPage');
  return (
    <styled.BodyWrapper>
      {/*<NavTabsView/>*/}
      <BatchesContainer>
        <BatchesView />
      </BatchesContainer>
      <BatchesRouteView/>
    </styled.BodyWrapper>
  );
};
