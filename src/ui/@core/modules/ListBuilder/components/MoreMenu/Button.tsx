import React, { useCallback } from 'react';

import * as styled from './MoreMenu.styled';

type Props = {
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, onClick }) => {
  const onBubbleFocus = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  }, []);

  return <styled.MoreMenuButton onMouseDown={onBubbleFocus} {...{ children, onClick }} />;
};
