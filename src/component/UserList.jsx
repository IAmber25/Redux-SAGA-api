// UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../actions/action';

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
