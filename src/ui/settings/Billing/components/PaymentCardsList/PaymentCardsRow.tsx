import {useMemo} from 'react';

import {ItemRaw} from '../../../../@core/modules/ListBuilder';
import {Radio} from '../../../../@core/modules/Radio';
import {MainButton} from '../../../../@core/modules/Button';

import {TrashIcon16} from '../../../../../assets/icons/';

type Props = {
  stripeId: string;
	brand: string;
	last4Digit: string;
	expiryMonth: string;
	expiryYear: number;
	isDefault: boolean;
  setDefaultCard: (stripeId: string) => void;
  deleteCard:  (stripeId: string) => void;
};

const hiddenPaymentCard = '**** **** **** ';

export const PaymentCardsRow: React.FC<Props> = ({stripeId, brand, last4Digit, expiryMonth, expiryYear, isDefault, setDefaultCard, deleteCard}) => {
  const hiddenPaymentCardFormat = useMemo(() => `${hiddenPaymentCard}${last4Digit}`, [last4Digit]);
  const defaultFormat = useMemo(() => isDefault ? 'default' : '', [isDefault]);

  return (
    <ItemRaw key={stripeId}>
      <ItemRaw.Space flex={0} minWidth={30}>
        <Radio name={'card'} value={stripeId} checked={isDefault} onClick={() => setDefaultCard(stripeId)}/>
      </ItemRaw.Space>
      <ItemRaw.Title align='left' children={brand} bold/>
      <ItemRaw.Title align='left' children={hiddenPaymentCardFormat}/>
      <ItemRaw.Title align='left' children={`${expiryMonth}/${expiryYear}`}/>
      <ItemRaw.Payments align='left' label={defaultFormat}/>
      <ItemRaw.Space flex={0} minWidth={20}>
        <MainButton flat type={'text'} icon={<TrashIcon16/>} onClick={()=>{deleteCard(stripeId)}}/>
      </ItemRaw.Space>
    </ItemRaw>
  );
};
