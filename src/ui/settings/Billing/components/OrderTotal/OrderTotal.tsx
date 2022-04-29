import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { OptionValue } from '../../../../@core/modules/Select/components/Option';
import { OrderRow, OrderRowProps} from './OrderRow';

import * as styled from './OrderTotal.styled';

type Props = {
	orderTotal: CalcProps
};

type CalcProps = {
	planPrice: number;
	userPrice: number;
	users: OptionValue<any> | undefined;
	orders: OptionValue<any> | undefined;
	plan: OptionValue<any> | undefined;
	period: OptionValue<any> | undefined;
}

export const OrderTotal: React.FC<Props> = ({orderTotal}) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item align="left" flex={2}children={word('global.item')} />
        <TitleRaw.Item align="right" children={word('global.price')} />
      </TitleRaw>
      <OrderRow {...orderTotal} />
    </styled.BodyWrapper>
  );
};
