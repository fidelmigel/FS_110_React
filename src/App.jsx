import Header from './components/Header/Header';
import User from './components/User/User';
import styles from './App.module.css';
import usersData from './assets/users.json';
const App = () => {
  return (
    <>
      <Header />
      <h2 className='title'>Lesson 2. Styles</h2>
      <ul className='wrapper'>
        {usersData.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <div className={styles.wrapper}>
        <div className={styles.box}> box1</div>
        <div className={styles.box2}> box2</div>
      </div>
    </>
  );
};

export default App;
