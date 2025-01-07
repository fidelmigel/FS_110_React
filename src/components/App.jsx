import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Hello router</h1>} />
        <Route path='/about' element={<h2>About page</h2>} />
      </Routes>
    </div>
  );
};
export default App;
