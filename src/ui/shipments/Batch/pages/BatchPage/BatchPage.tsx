import { BatchContainer } from '../../containers/BatchContainer';
import { BatchRouteView } from '../../views/BatchRouteView';
import { BatchView } from '../../views/BatchView';
// import { NavTabsView } from '../../views/NavTabsView';

import * as styled from './BatchPage.styled';

type Props = {};

export const BatchPage: React.VFC<Props> = () => {
  // console.log('BatchesPage');
  return (
    <styled.BodyWrapper>
      {/*<NavTabsView/>*/}
      <BatchContainer>
        <BatchView />
      </BatchContainer>
      <BatchRouteView/>
    </styled.BodyWrapper>
  );
};
