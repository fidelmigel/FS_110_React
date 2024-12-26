import { createContext } from 'react';
import Header from './Header/Header';
import UseContextExample from './UseContextExample/UseContextExample';
import UseMemoExample from './useMemoExample';
import UseRefForwardRefExample from './UseRefForwardRefExample';
import UseRefRenderCountExample from './UseRefRenderCountExample';
import UseRefStoreValueExample from './UseRefStoreValueExample';

export const userContext = createContext();

const contextValue = {
  model: 'RS6',
  engine: '5.5',
};
const App = () => {
  const auto = 'Audi';
  return (
    <userContext.Provider value={contextValue}>
      <div>
        <Header />
        <main>
          {/* <UseMemoExample /> */}
          {/* <UseRefRenderCountExample /> */}
          {/* <UseRefStoreValueExample /> */}
          {/* <UseRefForwardRefExample /> */}
          <UseContextExample auto={auto} model color />
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
        </main>
      </div>
    </userContext.Provider>
  );
};
export default App;
