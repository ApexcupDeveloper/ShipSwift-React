import { AddRuleView } from '../../views/AddRuleView';
import * as styled from './AddRulePage.styled';

type Props = {};

export const AddRulePage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <AddRuleView />
    </styled.BodyWrapper>
  );
};
