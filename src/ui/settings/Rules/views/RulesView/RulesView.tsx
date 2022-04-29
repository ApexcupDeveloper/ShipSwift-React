import { DisplayRound } from '../../../../@core/modules/Other';
import { RulesList } from '../../components/RulesList';

type Props = {};

export const RulesView: React.VFC<Props> = () => {
  return (
    <DisplayRound>
      <RulesList />
    </DisplayRound>
  );
};
