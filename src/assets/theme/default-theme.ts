import { DefaultTheme } from "styled-components";

import { colors, darkColors } from "./colors";
import { fonts } from './fonts';
import { device, media } from "./media";

export const theme: DefaultTheme = {
  media,
  device,

  color: colors,
  font: fonts,

  layer: {
    1: 'z-index: 0',
    2: 'z-index: 10',
    3: 'z-index: 20',
    4: 'z-index: 30',
    5: 'z-index: 40',
    6: 'z-index: 50',
  },

  viewport: {
    height: '100vh',
    width: '100vw',
  },

  transition: {
    fast: 'transition: 100ms',
    default: 'transition: 250ms',
    slow: 'transition: 350ms'
  },

  shadow: {
    light: 'box-shadow: 0px 10px 20px rgba(188, 193, 208, 0.2);',
    medium: 'box-shadow: 0px 0px 20px rgba(148, 153, 169, 0.2);'
  },

  headerHeight: '120px',
};

export const darkTheme: DefaultTheme = {
  media,
  device,

  color: darkColors,
  font: fonts,

  layer: {
    1: 'z-index: 0',
    2: 'z-index: 10',
    3: 'z-index: 20',
    4: 'z-index: 30',
    5: 'z-index: 40',
    6: 'z-index: 50',
  },

  viewport: {
    height: '100vh',
    width: '100vw',
  },

  transition: {
    fast: 'transition: 100ms',
    default: 'transition: 250ms',
    slow: 'transition: 350ms'
  },

  shadow: {
    light: 'box-shadow: 0px 10px 20px rgba(188, 193, 208, 0.2);',
    medium: 'box-shadow: 0px 0px 20px rgba(148, 153, 169, 0.2);'
  },

  headerHeight: '120px',
};