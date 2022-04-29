import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { WarehouseRaw } from './WarehouseRaw';

import * as styled from './WarehouseList.styled';
import { generateArray } from '../../../../../utils';

type Props = {
  services: string[];
  carrierName: string;
  editPath: string;
  cutofftime?: string;
};

const mockList = generateArray(1, (i) => ({
  key      : 'id' + i,
  name     : 'Amazon UK FBA',
  account  : 'Vi3w32',
  services  : '',
  activated: !!(i%2),
}) as const);

export const WarehouseList: React.VFC<Props> = ({ services, cutofftime, carrierName, editPath }) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('global.warehouse.name')} />
        <TitleRaw.Item children={word('global.account')} />
        <TitleRaw.Item children={word('global.cutofftime')} />
        <TitleRaw.Item children={word('global.services')} />
        <TitleRaw.Item children={word('global.action')} />
      </TitleRaw>
      {mockList.map((props, index) => (
        <WarehouseRaw {...props} services={services} cutofftime={cutofftime} carrierName={carrierName} editPath={editPath} key={'warehouse' + index} />
      ))}
    </styled.BodyWrapper>
  );
};
