import { ItemRaw } from '../../../../@core/modules/ListBuilder';

import * as styled from './KitComponentsList.styled';

type Stats = string | number;

type Props = {
  item: {
    name: string;
    key : string;
  };
  
  kitQty   : Stats;
  qty      : Stats;
  onHand   : Stats;
  allocated: Stats;
  backorder: Stats;
  available: Stats;
};

export const KitComponentsRaw: React.VFC<Props> = ({ item, kitQty, qty, onHand, allocated, backorder, available }) => {
  return (
    <ItemRaw>
      <styled.NameContainer>
        <ItemRaw.Title bold children={item.name}/>
        <ItemRaw.Title children={item.key}/>
      </styled.NameContainer>
      <ItemRaw.Title flex={0.2} children={kitQty} />
      <ItemRaw.Title flex={0.2} children={qty} />
      <ItemRaw.Title flex={0.2} children={onHand} />
      <ItemRaw.Title flex={0.2} children={allocated} />
      <ItemRaw.Title flex={0.2} children={backorder} />
      <ItemRaw.Title flex={0.2} children={available} />
    </ItemRaw>
  );
};
