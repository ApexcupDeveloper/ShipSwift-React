import { ProductInfo } from '../../../../../proto/product_manager_pb';
import { Statistics } from '../../components/Statistics';
import * as styled from './StatisticsView.styled';

type Props = {
  data: ProductInfo.AsObject
};

export const StatisticsView: React.VFC<Props> = ({ data }) => {
  let available = data.stockOnHand - data.stockAllocated;

  return (
    <styled.BodyWrapper>
      <Statistics
        onHand={data.stockOnHand}
        allocated={data.stockAllocated}
        available={available > 0 ? available : 0}
        backorder={available < 0 ? Math.abs(available) : 0}
        expected={0}
      />
    </styled.BodyWrapper>
  );
};
