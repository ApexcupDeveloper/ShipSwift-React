import { useEffect } from 'react';
import { useCallback, useState, useMemo, createContext, useContext } from 'react';
import { useChangedResizeAndScroll } from '../../../hooks/useChangeResizeAndScroll';

import * as styled from './TooltipsList.styled';

//TODO: refactor code. Functions must be placed in separate files
//TODO: public hook should not return setPosition

export type PositionData = {
  top: number;
  bottom: number;
  height: number;
};

type Props = {
  itemsCount?: number;
};

export const TooltipsList: React.FC<Props> = ({ children, itemsCount }) => {
  return (
    <TooltipsListProvider>
      <TooltipsListContainer itemsCount={itemsCount}>{children}</TooltipsListContainer>
    </TooltipsListProvider>
  );
};

export const TooltipsListContainer: React.FC<Props> = ({ children, itemsCount = -1 }) => {
  const { setPosition } = useTooltipsList();
  const scrollElement = useMemo(() => document.getElementById('root')?.lastChild?.childNodes?.[1]?.childNodes?.[0], []);
  const { changed, setChanged } = useChangedResizeAndScroll(scrollElement);

  useEffect(() => {
    itemsCount && setChanged((prev) => !prev);
  }, [itemsCount, setChanged]);

  const onSetPosition = useCallback(
    (el) => {
      if (!el || !changed) return;
      const { top, bottom, height } = el.getBoundingClientRect();
      setPosition({ top, bottom, height });
      setChanged((prev) => !prev);
    },
    [changed, setChanged, setPosition]
  );

  return (
    <div>
      <styled.BodyWrapper ref={onSetPosition}>{children}</styled.BodyWrapper>
    </div>
  );
};

export const useTooltipsList = () => useContext(TooltipsListContext);

export const TooltipsListProvider: React.FC<Props> = ({ children }) => {
  const context = _useTooltipsList();

  return <TooltipsListContext.Provider value={context}>{children}</TooltipsListContext.Provider>;
};

type Context = ReturnType<typeof _useTooltipsList>;
export const TooltipsListContext = createContext({} as Context);

export const _useTooltipsList = () => {
  const [position, setPosition] = useState<PositionData>();
  return { position, setPosition };
};
