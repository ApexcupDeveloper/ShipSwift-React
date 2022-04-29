import { DisplayRound } from '../../../../@core/modules/Other';
import { MethodsList } from '../../components/MethodsList';

import { DeliveryMethodsControlView } from '../../views/DeliveryMethodsControlView';
import { NavTabView } from '../../views/NavTabView';

import * as styled from './DeliveryMethodsPage.styled';

type Props = {};

export const DeliveryMethodsPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabView/>
      <DisplayRound>
        <MethodsList />
      </DisplayRound>
      <DeliveryMethodsControlView />
    </styled.BodyWrapper>
  );
};
