import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { MethodsRaw } from './MethodsRaw';

import * as styled from './MethodsList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(10, (i) => ({
  name   : 'MyCourier',
  courier: 'DHL',
  service: 'DHL Domestic Express 12:00',
  cost   : '0.14',
}) as const);

export const MethodsList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Item children={word('global.name')} />
        <TitleRaw.Item children={word('global.courier')} />
        <TitleRaw.Item children={word('global.service')} />
        <TitleRaw.Item children={word('global.cost')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {mockList.map((props) => (
        <MethodsRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
