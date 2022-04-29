import { useCallback, useMemo } from 'react';
import { CheckIcon16 } from '../../../../../../assets/icons';
import * as styled from './Option.styled';

export type OptionValue<ValueType extends string | number = string> = {
  label: string;
  value: ValueType;
};

type Props = {
  value: OptionValue;
  selectedValues: OptionValue[];
  onAddValue: (value: OptionValue) => void;
  onRemoveValue: (value: OptionValue) => void;
};

export const Option: React.VFC<Props> = ({ value, selectedValues, onAddValue, onRemoveValue }) => {
	const selected = useMemo(() => selectedValues.some((each) => {
		return each.value === value.value;
	}), [selectedValues, value]);

	const onToggle = useCallback(
    () => (selected ? onRemoveValue(value) : onAddValue(value)),
    [onAddValue, onRemoveValue, selected, value]
  ); 

  return (
    <styled.BodyWrapper onClick={onToggle} data-selected={selected}>
      <styled.Label children={value.label} />
      {selected && <styled.IconWrapper children={<CheckIcon16/> } />}
    </styled.BodyWrapper>
  );
};
