import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import User from './components/User/User';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import usersData from './assets/users.json';
const App = () => {
  // const isOnline = false;
  // const isLoggedIn = true;
  // const message = 'Hello react';
  return (
    <>
      <Header />
      {/* <h3>Tag</h3>
      {isOnline && <h2>Hello</h2>}
      {isLoggedIn && <h2>Welcome</h2>}
      <p>adsfadsf {message} sdasfssfasdf</p> */}
      {/* <Message message='Привіт!' />
      <Message author='Olena' message='Як справи?' isOnline={false} />
      <Message author='Petro' message='Файно!' /> */}
      <ul>
        {/* {[1, 2, 3, 4].map(value => (
          <li>{value}</li>
        ))} */}
        <User />
        {usersData.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};

export default App;
