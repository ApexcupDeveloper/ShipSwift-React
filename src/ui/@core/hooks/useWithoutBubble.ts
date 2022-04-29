import { useCallback } from "react";

export const useWithoutBubble = (call?: () => void) => useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e?.stopPropagation();
  e?.nativeEvent?.stopImmediatePropagation();
  
  call && call();
}, [call]);
