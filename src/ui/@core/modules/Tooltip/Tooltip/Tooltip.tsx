import { useMemo, useCallback } from 'react';
import * as styled from './Tooltip.styled';

type Props = {
  content: string | React.ReactNode | React.ReactNode[];
  align?: styled.Align;
  position?: styled.Position;
  visible?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onSetPosition?: (position: object) => void;
  flex?: number
};

export const Tooltip: React.FC<Props> = ({
  content,
  visible,
  children,
  disabled = false,
  align = 'left',
  position = 'top',
  onSetPosition,
  fullWidth = false,
  flex
}) => {
  const isTextTooltip = useMemo(() => typeof content === 'string', [content]);
  const getPosition = useCallback(
    (el) => {
      if (!el) return;
      const { top, bottom, height } = el.getBoundingClientRect();
      onSetPosition && onSetPosition({top, bottom, height});
    },
    [onSetPosition]
  );

  if (disabled) return <>{children}</>;

  return (
    <styled.BodyWrapper data-align={align} data-visible={visible} flex={flex} style={fullWidth ? { width: '100%' } : {}}>
      {children}
      <styled.TooltipContainer ref={getPosition} data-align={align} data-position={position}>
        {isTextTooltip && <styled.TextTooltip children={content} />}
        {!isTextTooltip && content}
      </styled.TooltipContainer>
    </styled.BodyWrapper>
  );
};
