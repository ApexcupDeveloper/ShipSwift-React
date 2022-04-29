import {MouseEventHandler, useMemo} from 'react';

import {ItemRaw} from '../../../../@core/modules/ListBuilder';
import {Radio} from '../../../../@core/modules/Radio';
import {MainButton} from '../../../../@core/modules/Button';

import {TrashIcon16} from '../../../../../assets/icons/';
import {ChangeEventHandler} from "../../../../@core/hooks/useInputState";

type Props = {
  id: string;
  brand: string;
  last4: number;
  exp_month: string;
  exp_year: string;
  isDefault: boolean;
  setDefaultCard: MouseEventHandler;
  deleteCard: any
};

const hiddenPaymentCard = '•••• •••• •••• ';

export const PaymentCardsRow: React.FC<Props> = ({id, brand, last4, exp_month, exp_year, isDefault, setDefaultCard, deleteCard}) => {
  const hiddenPaymentCardFormat = useMemo(() => `${hiddenPaymentCard}${last4}`, [last4]);
  const defaultFormat = useMemo(() => isDefault ? 'default' : '', [isDefault]);

  return (
    <ItemRaw key={id}>
      <ItemRaw.Space flex={0} minWidth={30}>
        <Radio name={'card'} value={id} checked={isDefault} onClick={setDefaultCard}/>
      </ItemRaw.Space>
      <ItemRaw.Title children={brand} bold/>
      <ItemRaw.Title children={hiddenPaymentCardFormat}/>
      <ItemRaw.Title children={`${exp_month}/${exp_year}`}/>
      <ItemRaw.Payments label={defaultFormat}/>
      <ItemRaw.Space flex={0} minWidth={20}>
        <MainButton flat type={'text'} icon={<TrashIcon16/>} onClick={()=>{deleteCard(id)}}/>
      </ItemRaw.Space>
    </ItemRaw>
  );
};
