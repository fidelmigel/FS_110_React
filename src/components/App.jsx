import { useContext } from 'react';
import Header from './Header/Header';
import UseContextExample from './UseContextExample/UseContextExample';
import UseMemoExample from './useMemoExample';
import UseRefForwardRefExample from './UseRefForwardRefExample';
import UseRefRenderCountExample from './UseRefRenderCountExample';
import UseRefStoreValueExample from './UseRefStoreValueExample';
import { authContext } from '../context/AuthProvider/AuthProvider';
import FormLogin from './FormLogin';

const App = () => {
  const { user, logout } = useContext(authContext);

  if (!user) {
    return <FormLogin />;
  }

  return (
    <div>
      <Header />
      <main>
        {/* <UseMemoExample /> */}
        {/* <UseRefRenderCountExample /> */}
        {/* <UseRefStoreValueExample /> */}
        {/* <UseRefForwardRefExample /> */}
        <div>
          {/* <div className='gallery'>
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />{' '}
            <img src='https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg' alt='' />
          </div> */}
        </div>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione impedit nam aperiam quibusdam explicabo consequuntur eius ullam sunt!
          Odio optio corporis quidem eius voluptatem velit numquam quo odit similique.
        </h2>
        <button onClick={logout}>Logout</button>
      </main>
    </div>
  );
};
export default App;
