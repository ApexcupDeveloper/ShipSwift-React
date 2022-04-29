import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { KitComponentsRaw } from './KitComponentsRaw';

import * as styled from './KitComponentsList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(2, (i) => ({
  key: 'id' + i,
  item: {
    name: 'Playstation 4 Limited Edition (with games)',
    key: 'OPE02-TFC-100006',
  },
  kitQty: 1,
  qty: 156,
  onHand: 76,
  allocated: 35,
  backorder: 12,
  available: 16
}));

export const KitComponentsList: React.FC<Props> = ({ children }) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('global.item')}/>
        <TitleRaw.Item flex={0.2} children={word('kit.qty')}/>
        <TitleRaw.Item flex={0.2} children={word('global.qty')}/>
        <TitleRaw.Item flex={0.2} children={word('global.on-hold')}/>
        <TitleRaw.Item flex={0.2} children={word('global.allocated')}/>
        <TitleRaw.Item flex={0.2} children={word('global.backorder')}/>
        <TitleRaw.Item flex={0.2} children={word('global.available')}/>
      </TitleRaw>
      {mockList.map((props) => <KitComponentsRaw {...props} />)}
    </styled.BodyWrapper>
  );
};
