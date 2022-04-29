import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { WarehousesRaw } from './WarehousesRaw';

import * as styled from './WarehousesList.styled';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';

type Props = {
  warehouses: CompanyInfo.AsObject[],
  handleChangeEvent: () => void
};

export const WarehousesList: React.VFC<Props> = ({ warehouses, handleChangeEvent }) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Item children={word('global.name')} />
        <TitleRaw.Item children={word('global.email')} />
        <TitleRaw.Item children={word('global.phone')} />
        <TitleRaw.Item flex={0} children={word('global.country')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {warehouses.map((props) => (
        <WarehousesRaw {...props} data={props} handleChangeEvent={handleChangeEvent} />
      ))}
    </styled.BodyWrapper>
  );
};
