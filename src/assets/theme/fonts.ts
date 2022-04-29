import { Font } from 'styled-components';

const createFontProps =
  (name: string, weight: number) =>
  (size: number, height: number, hover: boolean = false) =>
`
  font-family: ${name};
  font-style: normal;
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${height}px;
  ${hover ? 'text-decoration-line: underline;' : ''}
`;

const lexend600 = createFontProps('Lexend', 600);
const roboto400 = createFontProps('Roboto', 400);
const roboto500 = createFontProps('Roboto', 500);

export const fonts: Font = {
  h: {
    1: lexend600(60, 64),
    2: lexend600(55, 64),
    3: lexend600(50, 64),
    4: lexend600(45, 54),
    5: lexend600(40, 50),
    6: lexend600(35, 50),
    7: lexend600(30, 40),
    8: lexend600(25, 36),
    9: lexend600(20, 30),
    10: lexend600(18, 30),
    11: lexend600(16, 24),
    12: lexend600(14, 24)
  },

  p: {
    1: roboto400(20, 32),
    2: roboto400(18, 30),
    3: roboto400(16, 28),
    4: roboto400(15, 26),
    5: roboto400(14, 24),
    6: roboto400(13, 22),
    7: roboto400(12, 22)
  },

  c_regular: {
    1: roboto400(18, 24),
    2: roboto400(16, 24),
    3: roboto400(15, 24),
    4: roboto400(14, 20),
    5: roboto400(13, 20),
    6: roboto400(12, 20),

    hover_4: roboto400(14, 20, true),
    hover_5: roboto400(13, 20, true)
  },

  c_medium: {
    1: roboto500(18, 24),
    2: roboto500(16, 24),
    3: roboto500(15, 24),
    4: roboto500(14, 22),
    5: roboto500(13, 20),
    6: roboto500(12, 20),
    
    hover_4: roboto500(14, 20, true),
    hover_5: roboto500(13, 20, true)
  }
};
