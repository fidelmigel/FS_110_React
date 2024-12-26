import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const langContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('ua');
  const changeLang = () => setLang(lang === 'ua' ? 'us' : 'ua');
  const contextValue = {
    lang,
    changeLang,
  };
  return <langContext.Provider value={contextValue}>{children}</langContext.Provider>;
};
export default LangProvider;
