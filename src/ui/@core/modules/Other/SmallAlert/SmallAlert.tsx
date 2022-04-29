import { useMemo } from 'react';
import * as styled from './SmallAlert.styled';

import { getStyle, AlertType } from './SmallAlert.config';
import React from 'react';
import { useSelector } from 'react-redux';

type Props = {
  /**
   * @default info
   */
  type?: AlertType;
  description?: string;
  customStyle?: any;
};

export const SmallAlert: React.FC<Props> = ({ type = 'info', description, children, customStyle }) => {
  const isDark = useSelector((state: any) => state.theme.isDark);
  const { icon, ...style } = useMemo(() => getStyle(type, isDark), [type, isDark]);
  return (
    <styled.BodyWrapper {...style} style={customStyle}>
      {icon}
      <styled.TextWrapper>{children || <p>{description}</p>}</styled.TextWrapper>
    </styled.BodyWrapper>
  );
};
