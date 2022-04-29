import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { WarehouseRaw } from './WarehouseRaw';

import * as styled from './WarehouseList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(10, (i) => ({
  key      : 'id' + i,
  name     : 'Amazon UK FBA',
  account  : 'Vi3w32',
  service  : '',
  activated: !!(i%2),
}) as const);

export const WarehouseList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('global.warehouse.name')} />
        <TitleRaw.Item children={word('global.account')} />
        <TitleRaw.Item children={word('global.services')} />
        <TitleRaw.Item children={word('global.action')} />
      </TitleRaw>
      {mockList.map((props) => (
        <WarehouseRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
