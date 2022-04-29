import { useCallback, useEffect, useMemo, useState } from 'react';

import { ArrowDownIconSmall16 } from '../../../../../../assets/icons';
import { InputCustom } from '../../../Input';
import { SelectedView } from '../../views/SelectedView';
import { Option, OptionValue } from '../Option';

import * as styled from './Select.styled';

export type SelectMode = 'one' | 'multi';
export type Position = 'top' | 'bottom';

type Props<ValueType extends string | number = any> = {
  height?: 36 | 40;
  icon?: React.ReactNode;
  width?: number;
  placeholder?: string;
  values?: OptionValue<ValueType>[];
  selectedValues?: OptionValue<any>[];
  error?: boolean;
  searchable?: boolean;
  /**
   * @default one
   */
  mode?: SelectMode;

  /**
   * @default bottom
   */
  position?: Position;

  defaultValues?: OptionValue<any>[];
  disabled?: boolean;
  onSelectedChanged?: (values: OptionValue<any>[]) => void;
};

export const Select: React.VFC<Props> = ({
  width,
  onSelectedChanged,
  placeholder,
  position = 'bottom',
  disabled = false,
  mode = 'one',
  values = [],
  selectedValues = [],
  defaultValues = [],
  height = 36,
  error = false,
  searchable = false
}) => {
  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState('');
  const hasValues = useMemo(() => !!values.length, [values]);
  const hasSelected = useMemo(() => !!selectedValues.length, [selectedValues]);
  const [filteredValues, setFilteredValues] = useState(values)

  const close = useCallback(() => setOpened(false), []);
  const open = useCallback(() => setOpened(true), []);

  useEffect(() => {
    if(query) {
      let filter = values.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
      setFilteredValues(filter)
    } else {
      setFilteredValues(values)
    }
  }, [query])

  const onToggle = useCallback(
    () => !disabled && hasValues && (opened ? close() : open()),
    [close, disabled, hasValues, open, opened]
  );

  useEffect(() => {
    if (onSelectedChanged && defaultValues?.length && !selectedValues?.length) {
      if (mode === 'one') return onSelectedChanged([defaultValues[0]]);
      onSelectedChanged(defaultValues);
    }
  }, [defaultValues, mode, onSelectedChanged, selectedValues]);

  useEffect(() => {
    disabled && close();
  }, [close, disabled]);

  const onAddValue = useCallback(
    (value: OptionValue) => {
      if (!onSelectedChanged) return;
      setQuery('');
      if (mode === 'one' && selectedValues.length) {
        close();
        return onSelectedChanged([value]);
      }

      const has = selectedValues.some((each) => each.value === value.value);

      if (!has) {
        close();
        onSelectedChanged([...selectedValues, value]);
      }
    },
    [close, mode, onSelectedChanged, selectedValues]
  );

  const onRemoveValue = useCallback(
    (value: OptionValue) => {
      if (!onSelectedChanged) return;
      setQuery('');
      const filtered = selectedValues.filter((each) => each.value !== value.value);
      if (filtered.length !== selectedValues.length) onSelectedChanged(filtered);
    },
    [onSelectedChanged, selectedValues]
  );

  const onClear = useCallback(() => onSelectedChanged && onSelectedChanged([]), [onSelectedChanged]);

  return (
    <styled.RelativeContainer tabIndex={0} onBlur={close}>
      <styled.InputWrapper
        onClick={onToggle}
        data-opened={opened}
        data-disabled={disabled}
        width={width}
        height={height}
        error={error}
      >
        {!hasSelected && placeholder && <styled.Placeholder children={placeholder} />}
        <SelectedView
          disabled={disabled}
          height={height}
          mode={mode}
          selectedValues={selectedValues}
          onRemove={onRemoveValue}
          onClear={onClear}
          onChange={setQuery}
          query={query}
        />
        <styled.IconWrapper data-position={position} data-disabled={disabled} data-opened={opened}>
          <ArrowDownIconSmall16 />
        </styled.IconWrapper>
      </styled.InputWrapper>
      {hasValues && (
        <styled.SelectContainer data-position={position} data-opened={opened} height={height}>
          <styled.SelectBody data-position={position} data-opened={opened} searchable={searchable}>
            {filteredValues.map((value) => (
              <Option
                key={value.value}
                value={value}
                selectedValues={selectedValues}
                onAddValue={onAddValue}
                onRemoveValue={onRemoveValue}
              />
            ))}
          </styled.SelectBody>
        </styled.SelectContainer>
      )}
    </styled.RelativeContainer>
  );
};
