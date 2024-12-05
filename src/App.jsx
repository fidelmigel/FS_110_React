import Header from './components/Header/Header';
import User from './components/User/User';
import styles from './App.module.css';
import usersData from './assets/users.json';
import react from './assets/react.png';
import { FcApproval } from 'react-icons/fc';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Message from './components/Message/Message';
const App = () => {
  return (
    <>
      <Header />
      <Modal title='Test modal'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio. Inventore quidem iste autem fugiat tenetur eos obcaecati ipsam?
        Debitis natus tenetur molestiae vitae dolores dolor quam sed et obcaecati?
      </Modal>

      <Modal title='Logout'>
        <div>
          <button>Yes</button>
          <button>No!</button>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque doloribus mollitia rerum, veritatis cupiditate non iusto aliquid ipsam
            magni, inventore aut sint modi placeat incidunt libero maiores deserunt laudantium.
          </p>
        </div>
      </Modal>

      <Modal>
        <Message />
      </Modal>

      <Button>Click</Button>
      <Button>
        <FcApproval /> Done!
      </Button>

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
      <img src={react} />
      <img src='/react.png' />
    </>
  );
};

export default App;
