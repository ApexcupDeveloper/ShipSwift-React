import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { SettingsRaw } from './SettingsRaw';

import { v4 as createUid } from 'uuid';

import * as styled from './SettingsList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

type RawType = React.ComponentProps<typeof SettingsRaw>;
const mockList = generateArray<RawType>(10, (i) => ({
  key: 'id' + i,
  id: createUid(),
  name: 'Shipping confirmation template',
  active: !!(i%2)
}));

export const SettingsList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Item children={word('global.template')} />
        <TitleRaw.Item children={word('global.active')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {mockList.map((props) => (
        <SettingsRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
