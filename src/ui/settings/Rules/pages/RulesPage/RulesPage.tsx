import { NavTabView } from '../../views/NavTabView';
import { RulesView } from '../../views/RulesView';

import * as styled from './RulesPage.styled';

type Props = {};

export const RulesPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <NavTabView />
      <RulesView />
    </styled.BodyWrapper>
  );
};
