import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { PaymentCardsRow } from './PaymentCardsRow';

import { generateArray } from '../../../../../utils';

const mockList = generateArray(4, (i) => ({
  key: `id` + i,
  type: 'Visa',
  number: 2458,
  expires: '22/02',
  isDefault: i === 1,
}));

type Props = {};

export const PaymentCardsList: React.FC<Props> = () => {
  const { word } = useLocale();

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
      {mockList.map((props) => (
        <PaymentCardsRow {...props} />
      ))}
    </>
  );
};
