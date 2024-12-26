import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import { langContext } from '../../context/LangProvider/LangProvider';

const Header = () => {
  const { user, logout } = useContext(authContext);
  const { lang, changeLang } = useContext(langContext);
  return (
    <header>
      <h2>Hooks</h2>
      <h3>Welcome,{user} </h3>
      <h3>Lang:{lang}</h3>
      <button onClick={changeLang}>Switch lang</button>
      <button onClick={logout}>Logout</button>
    </header>
  );
};
export default Header;
