import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ShipmentRaw } from './ShipmentRaw';

import * as styled from './ShipmentList.styled';
import { ShipmentBatchInfo } from '../../../../../proto/courierapi_pb';

type Props = {
  batchShipments: ShipmentBatchInfo.AsObject[];
  handleChangeEvent: () => void;
};

export const ShipmentList: React.VFC<Props> = ({batchShipments, handleChangeEvent}) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw height={64} cleanBackground splitter>
        <TitleRaw.Merge>
          <TitleRaw.Checkbox/>
          <TitleRaw.Item children={word('global.order.number')} />
        </TitleRaw.Merge>
        <TitleRaw.Item children={word('global.status')} />
        <TitleRaw.Item children={word('global.download.pdf')} />
      </TitleRaw>
      {batchShipments.map((props) => (
        <ShipmentRaw key={props.shipment?.orderNumber} {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
