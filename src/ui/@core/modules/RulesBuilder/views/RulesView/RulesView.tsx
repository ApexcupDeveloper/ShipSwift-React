import { useCallback, useEffect } from 'react';
import { SelectOption } from '../../../Select';

import { IRulesObject, RulesGroup } from '../../components';

import * as styled from './RulesView.styled';

type Props = {
	values: SelectOption[];
	rules: IRulesObject[];
	onChange: (rules: IRulesObject[]) => void;
};

const defaultState: IRulesObject[] = [
	{
		id       : 'basic',
		condition: 'and',
		rules    : []
	}
]

export const RulesView: React.VFC<Props> = ({ rules = [], values, onChange }) => {
	useEffect(() => {
		!rules?.length && onChange(defaultState)
	}, [onChange, rules])

	const onChangeGroup = useCallback((index: number, rule: IRulesObject) => {
		 const newRules = [...rules];
		 newRules[index] = rule;
		 onChange && onChange(newRules);		 
	}, [onChange, rules]);

	return (
    <styled.BodyWrapper>
      {rules.map((rule, index) => (
        <RulesGroup key={rule.id} onChange={onChangeGroup} {...{ values, index, ...rule }} />
      ))}
    </styled.BodyWrapper>
  );
};
