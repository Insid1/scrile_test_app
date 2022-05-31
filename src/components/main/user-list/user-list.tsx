import { UserCard } from 'components/common/common';
import { useAppSelector } from 'store/hooks/hooks';
import { selectFilteredUsers } from 'store/users/selectors';
import * as S from './user-list.styled';

function UserList() {
  const users = useAppSelector(selectFilteredUsers);
  return (
    <S.List>
      {users.map((user) => (
        <S.ListItem key={user.id}>
          <UserCard {...user} />
        </S.ListItem>
      ))}
    </S.List>
  );
}

export default UserList;
