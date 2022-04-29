import { useState, useEffect, useCallback } from 'react';

export type Scroll = {
  scrollTop: number;
};

export const useChangedResizeAndScroll = (scrollingElement: ChildNode | Document = document) => {
  const [changed, setChanged] = useState(true);

  const eventHandler = useCallback((e) => {
    setChanged((prev) => !prev);
  }, []);

  useEffect(() => {
    window.visualViewport.addEventListener('resize', eventHandler);
    scrollingElement?.addEventListener('scroll', eventHandler);
    return () => {
      scrollingElement?.removeEventListener('scroll', () => {});
      window.visualViewport.removeEventListener('resize', () => {});
    };
  });
  return { changed, setChanged };
};
