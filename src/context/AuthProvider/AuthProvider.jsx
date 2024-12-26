import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('Pedro');
  const login = newUser => {
    if (newUser !== 'admin') {
      return toast.error('Invalid credentials!');
    }
    setUser(newUser);
  };
  const logout = () => setUser('');

  const contextValue = {
    user,
    login,
    logout,
  };
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};
export default AuthProvider;
