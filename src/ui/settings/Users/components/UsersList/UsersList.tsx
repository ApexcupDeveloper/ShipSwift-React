import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { UsersRaw } from './UsersRaw';

import * as styled from './UsersList.styled';
import { getCompanyId } from '../../../../../utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useUserClient } from '../../../../../client/client-hook';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { PopupWarning } from '../../../../@core/components/popupWarning';
import { useHistory, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

type Props = {};

type UserProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  timeZone: string;
  role?: {
    id: string;
    name: string;
  },
  status: boolean;
}

export const UsersList: React.VFC<Props> = () => {
  const { word } = useLocale();
  const toastId = useRef<any>(null);
  const { user } = useAuth0();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const companyId = getCompanyId(user);
  const getClient = useUserClient();
  const [users, setUsers] = useState<UserProps[]>([]);
  const [showDelWarning, setShowDelWarning] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [updating, setUpdating] = useState('');
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (companyId) {
      getUsers()
        .then((res) => {
          setUsers(res.usersList)
        })
        .catch((err) => {
          addErrorToast(err.message)
        })
    }
  }, [user, changed, pathname])

  const getUsers = () => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          Promise.all([
            client.getUsers({ companyId })
          ])
            .then((data) => {
              resolve(data[0]);
            })
            .catch((err) => {
              reject(err);
            })
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  const onClose = () => {
    setShowDelWarning(false);
    setDeleteId('');
  }

  const showWarning = (id: string) => {
    setShowDelWarning(true);
    setDeleteId(id);
  }

  const editUser = (user: UserProps) => {
    push(AppRoutes.Settings.Users.Edit, user)
  }

  const enableStatus = (id: string, status: boolean) => {
    toastId.current = addInfoToast('Updating status...', false);
    getClient()
      .then((client) => {
        client
          .enableUser({
            companyId: companyId,
            userId: id,
            enabled: !status
          })
          .then((res) => {
            updateToast(toastId.current, 'Successfully updated status', 'success', 5000);
            setChanged(prev => !prev);
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
            setChanged(prev => !prev);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
        setChanged(prev => !prev);
      })
  }

  const deleteUser = (id: string) => {
    toastId.current = addInfoToast('Deleting user...', false);
    getClient()
      .then((client) => {
        client
          .deleteUser({
            companyId,
            userId: id
          })
          .then((res) => {
            updateToast(toastId.current, 'Successfully deleted user', 'success', 5000);
            setChanged(prev => !prev);
            onClose();
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
      })
  }

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Merge>
          <TitleRaw.Checkbox />
          <TitleRaw.Item children={word('global.name')} />
        </TitleRaw.Merge>
        <TitleRaw.Item children={word('global.email')} />
        <TitleRaw.Item children={word('global.role')} />
        <TitleRaw.Item children={word('global.enable.disable')} />
        <TitleRaw.Item children={word('global.status')} />
        <TitleRaw.Space flex={0} />
      </TitleRaw>
      {users.map((props) => (
        <UsersRaw
          {...props}
          onClick={() => enableStatus(props.id, props.status)}
          key={props.id}
          onDelete={() => showWarning(props.id)}
          onEdit={() => editUser(props)}
        />
      ))}
      <PopupWarning.DeleteUser visible={showDelWarning} hideCheckbox onApply={() => deleteUser(deleteId)} onCancel={onClose} onClose={onClose} />
    </styled.BodyWrapper>
  );
};
