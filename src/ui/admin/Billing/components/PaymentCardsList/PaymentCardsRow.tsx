import { useMemo } from 'react';

import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { Radio } from '../../../../@core/modules/Radio';
import { MainButton } from '../../../../@core/modules/Button';

import { TrashIcon16 } from '../../../../../assets/icons';

type Props = {
  key      : string;
  type     : string;
  number   : number;
  expires  : string;
  isDefault: boolean;
};

const hiddenPaymentCard = '•••• •••• •••• ';

export const PaymentCardsRow: React.FC<Props> = ({ key, type, number, expires, isDefault }) => {
  const hiddenPaymentCardFormat = useMemo(() => `${hiddenPaymentCard}${number}`, [number]);
  const defaultFormat = useMemo(() => isDefault ? 'default' : '', [isDefault]);

  return (
    <ItemRaw key={key}>
      <ItemRaw.Space flex={0} minWidth={30}>
        <Radio checked={isDefault} />
      </ItemRaw.Space>
      <ItemRaw.Title children={type} bold />
      <ItemRaw.Title children={hiddenPaymentCardFormat} />
      <ItemRaw.Title children={expires} />
      <ItemRaw.Payments label={defaultFormat} />
      <ItemRaw.Space flex={0} minWidth={20} >
        <MainButton flat type={'text'} icon={<TrashIcon16 />} />
      </ItemRaw.Space>
    </ItemRaw>
  );
};
