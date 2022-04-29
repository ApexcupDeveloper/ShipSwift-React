import { BillingView } from '../../views/BillingView/BillingView';
import { NavTabsView } from '../../views/NavTabsView';

import * as styled from './BillingPage.styled';

type Props = {};

export const BillingPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabsView />
      <BillingView/>
    </styled.BodyWrapper>
  );
};
