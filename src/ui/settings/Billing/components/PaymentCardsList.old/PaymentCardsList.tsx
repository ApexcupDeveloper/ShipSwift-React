import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { PaymentCardsRow } from './PaymentCardsRow';
import { useAuth0 } from "../../../../../business/auth/hooks";
import { useState } from "react";

type Props = {};

export const PaymentCardsList: React.FC<Props> = () => {
  const { word } = useLocale();
  const [cards, setCards] = useState([
    {
      id: '1',
      brand: 'brand',
      last4: 2332,
      exp_month: '12',
      exp_year: '2021',
      isDefault: true,

    }
  ]);

  return (
    <>
      <TitleRaw>
        <TitleRaw.Space flex={0} minWidth={30} />
        <TitleRaw.Item children={word('global.type')} />
        <TitleRaw.Item children={word('global.number')} />
        <TitleRaw.Item children={word('global.expires')} />
        <TitleRaw.Space />
        <TitleRaw.Space flex={0} minWidth={20} />
      </TitleRaw>
      {cards.map((props) => (
        <PaymentCardsRow {...props} setDefaultCard={() => { }} deleteCard={() => { }} />
      ))}
    </>
  );
};
