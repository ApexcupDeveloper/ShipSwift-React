import { DisplayRound } from '../../../../@core/modules/Other';
import { UsersList } from '../../components/UsersList';

type Props = {};

export const UsersView: React.VFC<Props> = () => {
  return (
    <DisplayRound>
      <UsersList />
    </DisplayRound>
  );
};
