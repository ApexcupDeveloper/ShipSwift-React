import { useCallback, useMemo } from 'react';

import * as styled from './SquareRadio.styled';

type Props = {
  value?        : string | number;
  selectedValue?: string | number;
  onSelect?     : (value: string | number) => void;
};

export const SquareRadio: React.FC<Props> = ({ value, selectedValue, children, onSelect }) => {
  const checked = useMemo(() => value !== undefined && value === selectedValue, [selectedValue, value]);

  const onSelectAction = useCallback(() => {
    onSelect && value && onSelect(value);
  }, [onSelect, value]);

  return (
    <styled.BodyWrapper data-active={checked} onClick={onSelectAction}>
      <p children={children} />
    </styled.BodyWrapper>
  );
};
