import { Slider as SliderAntd } from 'antd';
import { useEffect, useCallback } from 'react';
import { ChangeEventHandler } from '../../hooks/useInputState';

import * as styled from './Slider.styled';

export type TooltipPosition = 'top' | 'bottom';

type Props = {
  name?: string;
  handleChangeEvent?: ChangeEventHandler;
  value: [number, number];
  min?: number;
  max?: number;
};
type SliderAntdProps = React.ComponentProps<typeof SliderAntd> & Props;

export const Slider: React.FC<SliderAntdProps> = ({
  tooltipPlacement = 'bottom',
  handleChangeEvent,
  name,
  value,
  min,
  max,
}) => {
  const onChanged = useCallback(([min, max]: [number, number]) => {
    if (!handleChangeEvent) return;
    handleChangeEvent({
      target: {
        name,
        value: [min, max],
      },
    });
  }, [handleChangeEvent, name]);

  useEffect(() => {});
  return (
    <styled.BodyWrapper data-tooltip-placement={tooltipPlacement}>
      <SliderAntd
        range
      value={value}
        tooltipVisible
        getTooltipPopupContainer={(triggerNode) => triggerNode}
        min={min}
        max={max}
        onChange={onChanged}
      />
    </styled.BodyWrapper>
  );
};
