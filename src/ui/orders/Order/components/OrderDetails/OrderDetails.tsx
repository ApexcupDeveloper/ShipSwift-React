import { useLocation } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';
import { OrderValue } from '../../../../../proto/order_manager_pb';

import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { SummaryRaw } from '../../../Orders/components/SummaryRaw';

import * as styled from './OrderDetails.styled';

type Props = {
  orderValue: OrderValue.AsObject
};

const currencySymbol = '£';

export const OrderDetails: React.VFC<Props> = ({ orderValue }) => {
  const { word } = useLocale();
  return (
    <styled.BodyWrapper>
      <styled.LeftWrapper>
        <FormCaption caption={word('global.shipping.discount')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.discount.order-additional')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.payment.type')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.payment.reference')}>
          <InputCustom />
        </FormCaption>
      </styled.LeftWrapper>
      <styled.SummaryBlock>
        <FormSection title={word('global.order.summary')}>
          <SummaryRaw title={word('global.subtotal')} count={orderValue ? orderValue.subtotal.toFixed(2) : 0} prefix={currencySymbol} />
          <SummaryRaw title={word('global.shipping-cost')} count={orderValue ? orderValue.shipping.toFixed(2) : 0} prefix={currencySymbol} />
          <SummaryRaw title={word('global.discount')} count={orderValue ? orderValue.discount.toFixed(2) :0} prefix={currencySymbol} />
          <SummaryRaw title={word('global.total.tax')} count={orderValue ? orderValue.tax.toFixed(2) : 0} prefix={currencySymbol} />
          <SummaryRaw title={word('global.order.total')} bold count={orderValue ? orderValue.total.toFixed(2) : 0} prefix={currencySymbol} />
        </FormSection>
      </styled.SummaryBlock>
    </styled.BodyWrapper>
  );
};
