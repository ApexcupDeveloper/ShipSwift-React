import { useMemo } from 'react';

import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { IconButton } from '../../../../@core/modules/Button';

import { EditIcon18, TrashIcon16 } from '../../../../../assets/icons';

import * as styled from './UsersList.styled';
import { User } from '../../../../../proto/user_manager_pb';

type Props = {
  id: string;
  firstName: string;
  lastName: string;
  timeZone: string;
  email: string;
  role?: {
    id: string;
    name: string;
  },
  status: boolean;
  onClick: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

export const UsersRaw: React.VFC<Props> = ({ id, firstName, lastName, email, status, role, onClick, onDelete, onEdit }) => {

  return (
    <ItemRaw>
      <ItemRaw.Merge>
        <ItemRaw.Checkbox />
        <ItemRaw.Title bold children={firstName + ' ' + lastName} />
      </ItemRaw.Merge>
      <ItemRaw.Title children={email} />
      <ItemRaw.Title children={role?.name || ''} />
      <ItemRaw.Switch checked={status} onClick={onClick} />
      <ItemRaw.ActiveStatus label={status ? 'active' : 'inactive'} />
      <styled.IconButtonWrapper>
        <IconButton onClick={onEdit}>
          <EditIcon18 />
        </IconButton>
        <IconButton onClick={onDelete}>
          <TrashIcon16 />
        </IconButton>
      </styled.IconButtonWrapper>
    </ItemRaw>
  );
};
