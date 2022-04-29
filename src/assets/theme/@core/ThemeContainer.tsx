import React from "react";

import { GlobalThemeProvider } from "../providers";
import { theme, darkTheme } from "../default-theme";
import { useSelector } from "react-redux";

type Props = {};

export const ThemeContainer: React.FC<Props> = ({ children }) => {
  const isDark = useSelector((state: any) => state.theme.isDark);

  return <GlobalThemeProvider theme={isDark ? darkTheme : theme}>{children}</GlobalThemeProvider>;
};
