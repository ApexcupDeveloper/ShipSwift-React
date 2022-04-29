import { Select, SelectOption } from '../../../Select';

import { useCallback, useMemo } from 'react';
import { useLocale } from '../../../../../../assets/locale';

import { Equal, IRule } from '../RulesGroup';

import * as styled from './Rule.styled';
import * as config from './Rule.config';

type Props = IRule & {
  values: SelectOption[];
  value1: SelectOption;
  value2: SelectOption;
  equal: SelectOption;
  onValue1Select?: (value: SelectOption) => void;
  onValue2Select?: (value: SelectOption) => void;
  onEqualSelect?: (value: Equal) => void;
};

export const Rule: React.VFC<Props> = ({
  values,
  value1,
  value2,
  equal,
  onValue1Select,
  onValue2Select,
  onEqualSelect,
}) => {
  const { word } = useLocale();
  const equals = useMemo(() => config.equalList(word), [word]);

  const _onValue1Select = useCallback(
    (values: SelectOption[]) => {
      const [value] = values;
      value && onValue1Select && onValue1Select(value);
    },
    [onValue1Select]
  );

	const _onValue2Select = useCallback(
    (values: SelectOption[]) => {
      const [value] = values;
      value && onValue2Select && onValue2Select(value);
    },
    [onValue2Select]
  );

	const _onEqualSelect = useCallback(
    (values: SelectOption<Equal>[]) => {
      const [{ value }] = values;
      value && onEqualSelect && onEqualSelect(value);
    },
    [onEqualSelect]
  );

  return (
    <styled.BodyWrapper>
      <Select values={values} selectedValues={[value1]} onSelectedChanged={_onValue1Select} />
      <Select values={equals} selectedValues={[equal]} onSelectedChanged={_onEqualSelect} />
      <Select values={values} selectedValues={[value2]} onSelectedChanged={_onValue2Select} />
    </styled.BodyWrapper>
  );
};
