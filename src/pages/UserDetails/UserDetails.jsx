import { useRef } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchUserById } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";

const UserDetails = () => {
  const { userId } = useParams();
  console.log(userId);

  const [user, loading, isError] = useHttp(fetchUserById, userId);

  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/users");
  console.log(location);

  const navigate = useNavigate();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <div className="container">
      <h3>User details</h3>
      <Link to={goBackRef.current}>Go back</Link>
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <h2>
        {user.lastName} {user.firstName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <nav>
        <ul>
          <li>
            <Link to="info">Info</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDetails;
