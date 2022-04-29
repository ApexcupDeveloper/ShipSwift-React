import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { ProgressBar } from '../ProgressBar';

import * as styled from './BillingStatistics.styled';
import { AppRoutes } from "../../../../app/api";
import { useHistory, useLocation } from "react-router";
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';
import { getCompanyId } from '../../../../../utils';
import { addErrorToast } from '../../../../toast';
import { useDispatch, useSelector } from 'react-redux';
import { convertDate } from '../../../../../utils/convert-time';
import { setCompanyData, setCompanyLogo } from '../../../../redux/action';
import { config } from '../../../../../private';

const mock = {
  costs: 120,
  date: '22/05/2021',
  users: {
    subscribed: 2,
    all: 4,
  },
  orders: {
    subscribed: 280,
    all: 300,
  },
};

type Props = {
  cancelSubscription: any
  subscription: any
};

type ProductProps = {
  productId: string;
  name: string;
  quantity: number;
}

type SubscriptionProps = {
  amount: number;
  created: any;
  status: string;
  interval: string;
  currency: string;
  productsList: ProductProps[]
}

export const BillingStatistics: React.VFC<Props> = ({ cancelSubscription, subscription }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const location = useLocation();
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState('$');
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [isTrial, setIsTrial] = useState(false);
  const [trialEndDate, setTrialEndDate] = useState<any>(0);
  const companyData = useSelector((state: any) => state.company.company);

  const getclient = useGrpcClient();
  const companyId = getCompanyId(user);
  const [currentSubscription, setCurrentSubscription] = useState<SubscriptionProps>();
  const onSelectPlan = useCallback(() => push(AppRoutes.Settings.Billing.BillingSettings.selectPlan), [push]);

  const onUpgrade = () => {
    if (currentSubscription && currentSubscription.status === 'active') {
    } else {
      push(AppRoutes.Settings.Billing.BillingSettings.Index)
    }
  }

  useEffect(() => {
    if (companyData) {
      if (companyData.defaultCurrency === 'GBP') {
        setCurrency('£');
      } else if (companyData.defaultCurrency === 'EUR') {
        setCurrency('€');
      } else {
        setCurrency('$');
      }
      setUserCount(companyData.userCount)
      setOrderCount(companyData.importedOrderCount);
    }
  }, [companyData])

  useEffect(() => {
    if (user) {
      let roleKey = config.auth0.namespace + '/roles';
      let trialKey = config.auth0.namespace + '/user_metadata';
      let role: string[] = (user as any)[roleKey];
      let trialEnd: any = (user as any)[trialKey].freeTrial;
      setTrialEndDate(new Date(trialEnd).getTime());

      if (role && role.length > 0 && role.some(item => item === 'Free Trial')) {
        setIsTrial(true);
      } else {
        setIsTrial(false);
      }
    }
  }, [user])

  useEffect(() => {
    if (companyId) {
      getclient()
        .then((client) => {
          client
            .getBillingInfo({ companyId })
            .then((res: any) => {
              if (res && res.currentSubscription) {
                setCurrentSubscription(res.currentSubscription);
              } else {
                setCurrentSubscription({
                  amount: 0,
                  created: null,
                  status: '',
                  interval: '',
                  currency: '',
                  productsList: []
                });
              }
            })
            .catch((err) => {
              addErrorToast(err.message);
            })

          client
            .getCompany({ companyId })
            .then(async (res: any) => {
              dispatch(setCompanyData(res.companyInfo));
              const rawResponse: Response = await fetch(res.companyInfo.logoUrl);
              const blob: Blob = await rawResponse.blob();
              dispatch(setCompanyLogo(URL.createObjectURL(blob)));
            })
            .catch((err) => {
              addErrorToast(err);
            })
        })
        .catch((err) => {
          addErrorToast(err.message);
        })
    }
  }, [user, companyId, location])

  const getPlan = (products: ProductProps[]) => {
    if (products && products.length) {
      if (products.length === 1) {
        return products[0].name + ' plan';
      } else {
        if (products[0].name === 'Growth') {
          return products[0].name + ' plan + ' + (products[1].quantity + 2) + ' Extra users';
        } else if (products[0].name === 'Professional') {
          return products[0].name + ' plan + ' + (products[1].quantity + 4) + ' Extra users';
        } else {
          return products[0].name + ' plan + ' + (products[1].quantity + 5) + ' Extra users';
        }
      }
    } else {
      return '';
    }
  }

  const getMaxOrders = (products: ProductProps[]) => {
    if (products && products.length) {
      if (products.length === 1) {
        return products[0].quantity;
      } else {
        return products[0].quantity;
      }
    } else {
      return 0;
    }
  }

  const getMaxUsers = (products: ProductProps[]) => {
    if (products && products.length) {
      if (products.length === 1) {
        if (products[0].name === 'Growth') {
          return 2;
        } else if (products[0].name === 'Professional') {
          return 4;
        } else {
          return 5;
        }
      } else {
        if (products[0].name === 'Growth') {
          return 2 + products[1].quantity;
        } else if (products[0].name === 'Professional') {
          return 4 + products[1].quantity;
        } else {
          return 5 + products[1].quantity;
        }
      }
    } else {
      return 0;
    }
  }

  return (
    <styled.BodyWrapper>
      {isTrial ? (
        <styled.Container>
          <styled.AcceleratorCard active={true}>
            <span>
              {'Active'}
              <span>{` - Free Trial`}</span>
            </span>
          </styled.AcceleratorCard>
          <styled.UntilCard>{'Trial Expires: ' + convertDate(trialEndDate)}</styled.UntilCard>
        </styled.Container>
      ) : currentSubscription ? (
        <styled.Container>
          <styled.AcceleratorCard active={currentSubscription.status === 'active'}>
            <span>
              {currentSubscription.status === 'active' ? 'Active' : 'No subscription'}
              {currentSubscription.status === 'active' && (
                <span>{` - ${getPlan(currentSubscription.productsList)}`}</span>
              )}
            </span>
            {currentSubscription.status === 'active' && (
              <span>
                Latest invoice - {currency + (currentSubscription.amount ? currentSubscription.amount : 0)}
              </span>
            )}
          </styled.AcceleratorCard>
          {currentSubscription.status === 'active' ? (
            <styled.UntilCard>{'Start date: ' + (currentSubscription.created ? convertDate(currentSubscription.created.seconds * 1000) : 'N/A')}</styled.UntilCard>
          ) : (<styled.UntilCard></styled.UntilCard>)}
        </styled.Container>
      ) : null}
      {currentSubscription && (
        <styled.Container style={{ justifyContent: currentSubscription.status === 'active' && !isTrial ? 'space-between' : 'flex-end' }}>
          {currentSubscription.status === 'active' && !isTrial ? (
            <ProgressBar name={word('global.users')} num={userCount} range={getMaxUsers(currentSubscription.productsList)} />
          ) : (<></>)}
          {currentSubscription.status === 'active' && !isTrial ? (
            <ProgressBar name={word('global.orders')} num={orderCount} range={getMaxOrders(currentSubscription.productsList)} />
          ) : (<></>)}
          {subscription && !subscription.cancel_at_period_end ?
            <MainButton type="text" children={word('global.cancel-subscription')} onClick={cancelSubscription} style={{}} /> : null}
          <MainButton children={word('global.upgrade')} onClick={onUpgrade} />
        </styled.Container>
      )}
    </styled.BodyWrapper>
  );
};
