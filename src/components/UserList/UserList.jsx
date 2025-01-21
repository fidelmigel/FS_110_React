import { Link, useLocation, useNavigate } from "react-router-dom";
import s from "./UserList.module.css";
const UserList = ({ users }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.list}>
        {users.map((item) => (
          <li className={s.item} key={item.id}>
            <Link to={item.id.toString()} state={location}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
