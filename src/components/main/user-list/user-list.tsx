import { UserCard } from 'components/common/common';
import { useAppSelector } from 'store/hooks/hooks';
import { selectFilteredUsers } from 'store/users/selectors';

function UserList() {
  const users = useAppSelector(selectFilteredUsers);

  return (
    <>
      {users.map((user) => <UserCard key={user.id} {...user} />)}
    </>
  );
}

export default UserList;
