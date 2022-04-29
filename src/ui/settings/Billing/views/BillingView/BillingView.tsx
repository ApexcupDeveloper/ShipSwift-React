import { PlacementCard } from '../../../../@core/modules/ListBuilder';
import { BillingStatistics } from '../../components/BillingStatistics';
import { BillingList } from '../../components/BillingList';
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addErrorToast } from '../../../../toast';
import { getCompanyId } from '../../../../../utils';

type Props = {};

type InvoiceProps = {
  invoiceNumber: string;
  total: number;
  status: string;
  pdfUrl: string;
  created: any;
  paymentType: string;
}

export const BillingView: React.VFC<Props> = () => {
  const location = useLocation();
  const { user } = useAuth0();
  const getClient = useGrpcClient();
  const companyId = getCompanyId(user);
  const [billingData, setBillingData] = useState<InvoiceProps[]>([]);

  useEffect(() => {
    if (companyId) {
      getClient()
        .then((client) => {
          client
            .getBillingInvoices({ companyId })
            .then((res: any) => {
              let sortedData = res.invoicesList.sort((a: any, b: any) => Number(b && b.created ? b.created.seconds : 0) - Number(a && a.created ? a.created.seconds : 0))
              setBillingData(sortedData);
            })
            .catch((err) => {
              addErrorToast(err.message);
            })
        })
        .catch((err) => {
          addErrorToast(err.message);
        })
    }
  }, [user, companyId, location])

  return (
    <PlacementCard>
      <PlacementCard.Header>
        <BillingStatistics subscription={null} cancelSubscription={() => { }} />
      </PlacementCard.Header>
      <PlacementCard.Content>
        <BillingList data={billingData} />
      </PlacementCard.Content>
    </PlacementCard>
  );
};
