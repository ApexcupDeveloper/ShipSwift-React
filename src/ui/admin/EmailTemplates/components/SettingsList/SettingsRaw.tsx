import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { IconButton } from '../../../../@core/modules/Button';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';

import { EditIcon18, TrashIcon16 } from '../../../../../assets/icons';

import * as styled from './SettingsList.styled';

type Props = {
  id: string;
  name: string;
  active: boolean;
};

export const SettingsRaw: React.VFC<Props> = ({ name, active, id }) => {
  const { push } = useHistory();

  const onEdit = useCallback(() => push(AppRoutes.Settings.EmailTemplates.Edit.replace(':id', id)), [id, push]);

  return (
    <ItemRaw>
      <ItemRaw.Title children={name} />
      <ItemRaw.Switch checked={active} />
      <styled.IconButtonWrapper>
        <IconButton onClick={onEdit}>
          <EditIcon18 />
        </IconButton>
        <IconButton>
          <TrashIcon16 />
        </IconButton>
      </styled.IconButtonWrapper>
    </ItemRaw>
  );
};
