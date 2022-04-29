import {useLocale} from '../../../../../assets/locale';

import {TitleRaw} from '../../../../@core/modules/ListBuilder';
import {PaymentPlanRow} from './PaymentPlanRow';
import axios from "axios";
import {useAuth0} from "../../../../../business/auth/hooks";
import {useCallback, useEffect, useState} from "react";
import {addErrorToast} from "../../../../toast";
import {useHistory} from "react-router";
import {AppRoutes} from "../../../../app/api";

type Props = {};

export const PaymentPlanList: React.FC<Props> = () => {
  const {word} = useLocale();
  const [plans, setPlans] = useState([
    {
      id: '1',
      nickName: 'apex',
      isSelected: true,
    }
  ]);
  const {push} = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Settings.Billing.Index), [push]);

  return (
    <>
      <TitleRaw>
        <TitleRaw.Item children={word('global.package')}/>
        <TitleRaw.Space/>
        <TitleRaw.Space flex={0} minWidth={20}/>
      </TitleRaw>
      {plans.map((props) => (
        <PaymentPlanRow {...props} selectPlan={() => {}}/>
      ))}
    </>
  );
};
