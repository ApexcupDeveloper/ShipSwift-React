import { useLocale } from '../../../../../assets/locale';

import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { MainButton } from '../../../../@core/modules/Button';
import * as styled from './ShipmentList.styled';
import { ShipmentBatchInfo } from '../../../../../proto/courierapi_pb';

export const ShipmentRaw: React.VFC<ShipmentBatchInfo.AsObject> = ({ shipment, success }) => {
  const { word } = useLocale();

  const downloadPdf = (url?: string) => {
    window.open(url);
  };


  return (
    <ItemRaw>
      <ItemRaw.Merge>
        <ItemRaw.Checkbox />
        <ItemRaw.Title children={shipment?.orderNumber} />
      </ItemRaw.Merge>
      <ItemRaw.Title flex={1} children={success ? 'Successful' : 'Unsuccessful'} />
      <styled.ButtonWrapper>
        <MainButton disabled={!success} style={{flex: 0.5}} onClick={() => downloadPdf(shipment?.labelUrl)}>Download</MainButton>
      </styled.ButtonWrapper>
    </ItemRaw>
  );
};
