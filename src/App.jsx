import Header from './components/Header/Header';
import User from './components/User/User';

import usersData from './assets/users.json';
const App = () => {
  return (
    <>
      <Header />
      <h2>Lesson 2. Styles</h2>
      <ul>
        <User />
        {usersData.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};

export default App;
