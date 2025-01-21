import UserList from "../../components/UserList/UserList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { fetchAllUsers } from "../../services/api";

const Users = () => {
  const [users] = useHttp(fetchAllUsers);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      setSearchParams({});
    } else {
      setSearchParams({ query: newQuery });
    }
  };
  const filteredUsers = users?.filter(
    (user) =>
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Users</h2>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default Users;
