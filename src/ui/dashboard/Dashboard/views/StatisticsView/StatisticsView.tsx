import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient, useOrderClient } from '../../../../../client/client-hook';
import { getCompanyId } from '../../../../../utils';
import { addErrorToast } from '../../../../toast';
import { Statistics } from '../../components/Statistics';
import * as styled from './StatisticsView.styled';

type Props = {};

export const StatisticsView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const getOrderClient = useOrderClient();
  const getClient = useGrpcClient();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const [loaded, setLoaded] = useState(false);
  const [currency, setCurrency] = useState('');
  const companyData = useSelector((state: any) => state.company.company);
  const [reportData, setReportData] = useState({
    today: {
      totalOrders: 0,
      totalOrdersShipped: 0,
      totalSalesValue: 0
    },
    yesterday: {
      totalOrders: 0,
      totalOrdersShipped: 0,
      totalSalesValue: 0
    }
  })

  const revenueTodayCount = useMemo(() => `${reportData.today.totalSalesValue.toFixed(2)}`, [reportData]);
  const revenueYesterdayCount = useMemo(() => `${reportData.yesterday.totalSalesValue.toFixed(2)}`, [reportData]);

  useEffect(() => {
    if (companyData.defaultCurrency === 'GBP') {
      setCurrency('£')
    } else if (companyData.defaultCurrency === 'EUR') {
      setCurrency('€')
    } else {
      setCurrency('$')
    }
  }, [companyData])

  useEffect(() => {
    if (companyId) {
      setLoaded(false);
      Promise.all([
        getReport(companyId)
      ])
        .then((data) => {
          setReportData(data[0]);
          setLoaded(true);
        })
        .catch((err) => {
          addErrorToast(err.message);
          setLoaded(true);
        })
    }
  }, [companyId])

  const getReport = (companyId: string) => {
    return new Promise<any>((resolve, reject) => {
      getOrderClient()
        .then((client) => {
          client
            .getReport({ companyId })
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            })
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  if (loaded) {
    return (
      <styled.BodyWrapper>
        <Statistics
          orders={reportData.today.totalOrders}
          ordersLabel={word('orders.today')}
          revenue={revenueTodayCount}
          revenueLabel={word('revenue.today')}
          shipped={reportData.today.totalOrdersShipped}
          shippedLabel={word('shipped.today')}
          currency={currency}
        />
        <Statistics
          orders={reportData.yesterday.totalOrders}
          ordersLabel={word('orders.yesterday')}
          revenue={revenueYesterdayCount}
          revenueLabel={word('revenue.yesterday')}
          shipped={reportData.yesterday.totalOrdersShipped}
          shippedLabel={word('shipped.yesterday')}
          currency={currency}
        />
      </styled.BodyWrapper>
    );
  } else {
    return (
      <styled.BodyWrapper>
      </styled.BodyWrapper>
    );
  }
};