import { useContext, useState } from 'react';
import { authContext } from '../context/AuthProvider/AuthProvider';

const FormLogin = () => {
  const { login } = useContext(authContext);
  const [username, setUsername] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    login(username);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setUsername(e.target.value)} type='text' />
        <button>Login</button>
      </form>
    </div>
  );
};
export default FormLogin;
