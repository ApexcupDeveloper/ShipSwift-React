import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { BatchShipmentRaw } from './BatchShipmentRaw';

import * as styled from './BatchShipmentList.styled';
import { BatchInfo } from '../../../../../proto/courierapi_pb';

type Props = {
  batchShipments: BatchInfo.AsObject[];
  handleChangeEvent: () => void;
};

export const BatchShipmentList: React.VFC<Props> = ({batchShipments, handleChangeEvent}) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw height={64} cleanBackground splitter>
        <TitleRaw.Merge flex={1.5}>
          <TitleRaw.Checkbox/>
          <TitleRaw.Item children={word('global.batch.id')} />
        </TitleRaw.Merge>
        <TitleRaw.Item flex={0.5} children={word('global.shipment.count')} />
        <TitleRaw.Item flex={0.8} children={word('global.timestamp')} />
        <TitleRaw.Item flex={0.7} children={word('global.status')} />
        <TitleRaw.Item children={word('global.download.pdf')} />
      </TitleRaw>
      {batchShipments.map((props) => (
        <BatchShipmentRaw key={props.id} {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
