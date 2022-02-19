import React from 'react';
import UserItem from '../UserItem';

function UserList({ users }) {
  return (
    <ol>
      {users.map((u) => {
        return <UserItem key={u.id} user={u} />;
      })}
    </ol>
  );
}

export default UserList;
