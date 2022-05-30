import React from 'react';
import { useAppSelector } from 'store/hooks/hooks';
import { selectUsers } from 'store/users/selectors';

function UserList() {
  const users = useAppSelector(selectUsers);
  const {
    id, username, email, phone,
  } = users[0];
  return (
    <div style={{
      backgroundColor: 'grey',
      width: '100%',
      padding: '1rem',
    }}
    >
      id:
      { id }
      username:
      { username }
      email:
      { email }
      phone:
      { phone }
    </div>
  );
}

export default UserList;
