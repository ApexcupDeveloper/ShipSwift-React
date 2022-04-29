import { IRule } from ".";

export const buildRuleKey = (rule: IRule) => `${rule.value1.value}${rule.value1.value}${rule.value2.value}`;
