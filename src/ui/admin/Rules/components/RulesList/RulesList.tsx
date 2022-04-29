import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { RulesRaw } from './RulesRaw';

import * as styled from './RulesList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(3, (i) => ({
  key: i,
  ruleName   : 'Rule #546546456',
  trigger: 'Channel equal phone',
  action: 'Apply order tags',
}) as const);

export const RulesList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Item children={word('global.rule.name')} />
        <TitleRaw.Item children={word('global.trigger')} />
        <TitleRaw.Item children={word('global.action')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {mockList.map((props) => (
        <RulesRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
