import { useLocale } from '../../../../../../assets/locale';
import { useCallback } from 'react';

import { MainButton } from '../../../Button';
import { SquareRadio } from '../../../Radio';
import { SelectOption } from '../../../Select';
import { Rule } from '../Rule';

import { PlusIcon16, FolderIcon18, CloseIconSquare16 } from '../../../../../../assets/icons';

import { IRule, IRulesObject } from './RulesGroup.types';

import * as styled from './RulesGroup.styled';
import * as config from './RulesGroup.config';

export type RulesProps = IRulesObject & {
  index: number;
  values: SelectOption[];
  onChange: (index: number, props: IRulesObject) => void;
};

export const RulesGroup: React.VFC<RulesProps> = ({ values, condition, rules, index, id, onChange }) => {
  const { word } = useLocale();

  const onAddRule = useCallback(() => {
    const newRules: IRule[] = [
      ...(rules || []),
      {
        equal: { label: 'Empty', value: 'equal' },
        value1: { label: 'Empty', value: '0' },
        value2: { label: 'Empty', value: '0' },
      },
    ];
    onChange(index, { id, condition, rules: [...newRules] });
  }, [condition, id, index, onChange, rules]);

  return (
    <styled.BodyWrapper>
      <styled.ConditionContainer>
        <styled.ConditionSection>
          <SquareRadio value={'and' as const} selectedValue={condition} children={word('global.and')} />
          <SquareRadio value={'or' as const} selectedValue={condition} children={word('global.or')} />
        </styled.ConditionSection>
        <styled.ButtonSection>
          <MainButton
            iconSize={18}
            icon={<PlusIcon16 />}
            type={'text'}
            children={word('global.add.rule')}
            onClick={onAddRule}
          />
          <MainButton iconSize={18} icon={<FolderIcon18 />} type={'text'} children={word('global.add.group')} />
          <MainButton iconSize={18} icon={<CloseIconSquare16 />} type={'text-red'} children={word('global.delete')} />
        </styled.ButtonSection>
      </styled.ConditionContainer>
      <styled.RulesContainer>
        {rules?.map((rule) => (
          <Rule key={config.buildRuleKey(rule)} {...{ values, ...rule }} />
        ))}
      </styled.RulesContainer>
    </styled.BodyWrapper>
  );
};
