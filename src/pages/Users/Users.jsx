import { useEffect, useState } from 'react';
import { fetchAllUsers } from '../../services/api';
import UserList from '../../components/UserList/UserList';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAllUsers();
      setUsers(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h2>Users</h2>
      <UserList users={users} />
    </div>
  );
};
export default Users;
