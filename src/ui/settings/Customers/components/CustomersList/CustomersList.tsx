import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { CustomersRaw } from './CustomersRaw';

import * as styled from './CustomersList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

type RawType = React.ComponentProps<typeof CustomersRaw>;
const mockList = generateArray<RawType>(10, (i) => ({
  key    : 'id' + i,
  name   : 'Darrell',
  surname: 'Steward',
  email  : 'nevaeh.simmons@example.com',
  phone  : '(229) 555-0109',
  orders : 12
}));

export const CustomersList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Merge>
          <TitleRaw.Checkbox/>
          <TitleRaw.Item children={word('global.name')} />
        </TitleRaw.Merge>
        <TitleRaw.Item children={word('global.email')} />
        <TitleRaw.Item children={word('global.phone')} />
        <TitleRaw.Item flex={0} children={word('orders')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {mockList.map((props) => (
        <CustomersRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
