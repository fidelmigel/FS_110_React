import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>Routing</h2>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  );
};
export default Header;
