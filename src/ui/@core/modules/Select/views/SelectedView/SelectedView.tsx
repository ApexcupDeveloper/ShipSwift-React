import { useCallback, useMemo, useState } from 'react';
import { ChangeEventHandler } from '../../../../hooks/useInputState';

import { OptionValue } from '../../components/Option';
import { SelectMode } from '../../components/Select/Select';
import { Tags } from '../../components/Tags';

import * as styled from './SelectedView.styled';

type Props = {
  height        : 36 | 40;
  selectedValues: OptionValue[];
  mode          : SelectMode;
  disabled      : boolean;
  onRemove      : (value: OptionValue) => void;
  onClear       : () => void;
  onChange?      : (value: string) => void;
  query         : string;
  handleChangeEvent?: ChangeEventHandler;
};

export const fontMap = {
  36: 5,
  40: 4,
} as const;

export const SelectedView: React.VFC<Props> = ({ height, selectedValues, mode, disabled, onClear, onRemove, onChange, query, handleChangeEvent }) => {
  const [focused, setFocused] = useState(false)
  const font = useMemo(() => fontMap[height], [height]);
  const first = useMemo(() => {
    if (!selectedValues?.length) return;
    const [value] = selectedValues;
    return value.label;
  }, [selectedValues]);

  const onHandleChangeEvent = useCallback(
    (e) =>
      (onChange && onChange(e?.target?.value)) ||
      (handleChangeEvent &&
        handleChangeEvent({
          target: {
            value: e?.target?.value,
          },
        })),
    []
  );

  return (
    <>
      {mode === 'one' && <styled.SelectedValue font={font} value={focused ? query : first} onChange={onHandleChangeEvent} disabled={disabled} autoFocus onFocus={() => { setFocused(true) }} onBlur={() => { setFocused(false) }} />}
      {mode === 'multi' && <Tags disabled={disabled} values={selectedValues} onRemove={onRemove} onClear={onClear} />}
    </>
  );
};
