import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { MainButton } from '../../../../@core/modules/Button';
import * as styled from './BatchShipmentList.styled';
import { BatchInfo } from '../../../../../proto/courierapi_pb';
import { AppRoutes } from '../../../../app/api';
import { useHistory } from 'react-router-dom';
import { useWithoutBubble } from '../../../../@core/hooks/useWithoutBubble';
import parse from 'html-react-parser';
import { convertTime1 } from '../../../../../utils/convert-time';

export const BatchShipmentRaw: React.VFC<BatchInfo.AsObject> = ({ id, shipmentCount, pdfUrl, status, createdAt }) => {
  const onClickWithoutBubble = useWithoutBubble();
  const { push } = useHistory();
  const redirectToDetails = () => {
    const productLink = AppRoutes.Shipments.Batch.Index.replace(':id', id)
    push(productLink, id)
  };
  const downloadPdf = () => {
    window.open(pdfUrl);
  }

  let createdDate = convertTime1(new Date(Number((createdAt ? createdAt.seconds as any : 0) * 1000)));

  return (
    <ItemRaw hover onClick={redirectToDetails}>
      <ItemRaw.Merge flex={1.5}>
        <ItemRaw.Checkbox
          onClickWrapper={onClickWithoutBubble}
        />
        <ItemRaw.Title hover={true} children={id} />
      </ItemRaw.Merge>
      <ItemRaw.Title flex={0.5} children={shipmentCount} />
      <ItemRaw.Title flex={0.8} children={parse(createdDate)} />
      <ItemRaw.Title flex={0.7} children={status} />
      <styled.ButtonWrapper>
        <ItemRaw.Merge onClick={onClickWithoutBubble}>
          <MainButton disabled={status === 'Processing'} onClick={() => downloadPdf()} style={{flex: 0.5}}>
            Download
          </MainButton>
        </ItemRaw.Merge>
      </styled.ButtonWrapper>
    </ItemRaw>
  );
};
