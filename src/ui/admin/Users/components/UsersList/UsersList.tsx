import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { UsersRaw } from './UsersRaw';

import * as styled from './UsersList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(
  10,
  (i) =>
    ({
      name   : 'Ronald',
      surname: 'Richards',
      email  : 'georgia.young@example.com',
      role   : 'Warehouse manager',
    } as const)
);

export const UsersList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Merge>
          <TitleRaw.Checkbox />
          <TitleRaw.Item children={word('global.name')} />
        </TitleRaw.Merge>
        <TitleRaw.Item children={word('global.email')} />
        <TitleRaw.Item children={word('global.role')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {mockList.map((props) => (
        <UsersRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
