import { useMemo } from 'react';

import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { IconButton } from '../../../../@core/modules/Button';

import { EditIcon18, TrashIcon16 } from '../../../../../assets/icons';

import * as styled from './UsersList.styled';

type Props = {
  name   : string;
  surname: string;
  email  : string;
  role   : string;
};

export const UsersRaw: React.VFC<Props> = ({ name, surname, email, role }) => {
  const fullName = useMemo(() => `${name} ${surname}`, [name, surname]);

  return (
    <ItemRaw>
      <ItemRaw.Merge>
        <ItemRaw.Checkbox />
        <ItemRaw.Title bold children={fullName} />
      </ItemRaw.Merge>
      <ItemRaw.Title children={email} />
      <ItemRaw.Title children={role} />
      <styled.IconButtonWrapper>
        <IconButton>
          <EditIcon18 />
        </IconButton>
        <IconButton>
          <TrashIcon16 />
        </IconButton>
      </styled.IconButtonWrapper>
    </ItemRaw>
  );
};
