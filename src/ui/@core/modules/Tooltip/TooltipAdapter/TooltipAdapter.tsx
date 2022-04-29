import { cloneElement, useState, useEffect, useCallback } from 'react';

import { Tooltip, useTooltipsList } from '..';

import { Position } from './../Tooltip/Tooltip.styled';
import { PositionData } from '../TooltipsList/TooltipsList';
import * as styled from './TooltipAdapter.styled';

type Props = {
  tooltip: React.ReactComponentElement<typeof Tooltip>;
};

export const TooltipAdapter: React.FC<Props> = ({ tooltip }) => {
  const [positionData, setPositionData] = useState<PositionData>();
  const [visible, setVisible] = useState(false);
  const { position: parentPositionData } = useTooltipsList();
  const [position, setPosition] = useState<Position>('bottom');

  const getPosition = useCallback((positionData) => {
    if (!positionData) return;
    setPositionData(positionData);
  }, []);

  useEffect(() => setVisible(!!(parentPositionData && positionData)), [parentPositionData, positionData]);

  useEffect(() => {
    if (!parentPositionData || !positionData) return;
    if (position === 'bottom') {
      if (positionData.bottom < parentPositionData.bottom) return;
      else if (positionData.top > parentPositionData.top) setPosition('top');
    } else if (position === 'top') {
      if (positionData.top > parentPositionData.top) return;
      else if (positionData.top < parentPositionData.top) setPosition('bottom');
    }
  }, [parentPositionData, position, positionData]);

  return (
    <styled.BodyWrapper>{cloneElement(tooltip, { position, onSetPosition: getPosition, visible })}</styled.BodyWrapper>
  );
};
