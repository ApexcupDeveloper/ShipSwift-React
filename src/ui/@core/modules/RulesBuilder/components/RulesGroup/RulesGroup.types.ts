import { SelectOption } from "../../../Select";

export type Equal = 'equal';
export type Condition = 'and' | 'or';

export type IRule = {
	value1: SelectOption;
	value2: SelectOption;
	equal: SelectOption<Equal>;
};

export type IRulesObject = {
	id: string;
	rules: IRule[];
	condition: Condition;
};
