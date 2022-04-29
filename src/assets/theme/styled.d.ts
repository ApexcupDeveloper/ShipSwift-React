import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    font: Font;
    media: Media;
    device: Device;
    shadow: Shadow;
    layer: GradationVariant<Variant6>;
    transition: Transition;
    viewport: Viewport;
    headerHeight: string;
  }

  export interface Color {
    // black: HueColor;
    // white: string;
    // green: string;

    main: GradationVariant<Variant8>;
    greyscale: GradationVariant<Variant20>;
    background: GradationVariant<Variant10>;
    additional: GradationVariant<Variant3>;
    custom: GradationVariant<Variant1>;

    // alert: HueColor5;
    // product_tag: HueColor6;
    // order_number: HueColor6;
    // order_status: HueColor4;
  }


  export interface Font {
    h: GradationVariant<Variant12>;
    p: GradationVariant<Variant7>
    c_medium: CaptionFont;
    c_regular: CaptionFont;
  }

  export interface Device {
    mobile_small: number;
    mobile_medium: number;
    mobile_large: number;
    tablet: number;
    laptop_small: number;
    laptop_medium: number;
    laptop_large: number;
    desktop: number;
  }

  export interface Shadow {
    light: string;
    medium: string;
  }

  export interface Media {
    mobile_small: string;
    mobile_medium: string;
    mobile_large: string;
    tablet: string;
    laptop_small: string;
    laptop_medium: string;
    laptop_large: string;
    custom: (breakpoint: number) => string;
  }

  export interface Viewport {
    height: string;
    width: string;
  }

  export interface Transition {
    default: string;
    fast   : string;
    slow   : string;
  }
}

export type CaptionFont = GradationVariant<Variant6> & {
  hover_4: string;
  hover_5: string;
}

export type GradationVariant<T> = { [x in T]: string }
export type Variant1  = 1;
export type Variant2  = Variant1 | 2;
export type Variant3  = Variant2 | 3;
export type Variant4  = Variant3 | 4;
export type Variant5  = Variant4 | 5;
export type Variant6  = Variant5 | 6;
export type Variant7  = Variant6 | 7;
export type Variant8  = Variant7 | 8;
export type Variant9  = Variant8 | 9;
export type Variant10 = Variant9 | 10;
export type Variant11 = Variant10 | 11;
export type Variant12 = Variant11 | 12;
export type Variant13 = Variant12 | 13;
export type Variant14 = Variant13 | 14;
export type Variant15 = Variant14 | 15;
export type Variant16 = Variant15 | 16;
export type Variant17 = Variant16 | 17;
export type Variant18 = Variant17 | 18;
export type Variant19 = Variant18 | 19;
export type Variant20 = Variant19 | 20;
