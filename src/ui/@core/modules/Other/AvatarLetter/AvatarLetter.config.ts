// const ColorList = [
//   '#384454',
//   '#808998',
//   '#9BC884',
//   '#262739',
//   '#FFB083',
//   '#818BB8',
//   '#E26F6F',
//   '#8FC795',
//   '#D0B398',
//   '#FB9F63',
//   '#B786AE',
//   '#EB75AD',
//   '#97BADD',
// ];

export type Types = 'WooCommerce' | 'Shopify' | string;

type Color = {
  type: Types;
  color: string;
};

const ColorList: Color[] = [
  {
    type: 'WooCommerce',
    color: '#96588A',
  },
  {
    type: 'Shopify',
    color: '#96BF48'
  },
  {
    type: 'Magento2',
    color: '#F46F25'
  },
  {
    type: 'BigCommerce',
    color: '#34323F'
  },
  {
    type: 'Squarespace',
    color: '#000000'
  },
  {
    type: 'Etsy',
    color: '#EB6D20'
  },
  {
    type: 'eBay',
    color: '#F5AF02'
  }
]
/**
 * Returns safety color by index.
 * @param type Color index
 * @default 0
 */
export const getColor = (type: Types) => {
  const color = ColorList.find((item) => item.type === type)?.color;
  return color || '#384454';
};
