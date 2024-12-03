import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';

const App = () => {
  const isOnline = false;
  const isLoggedIn = true;
  const message = 'Hello react';
  return (
    <>
      <Header />
      <h3>Tag</h3>
      {isOnline && <h2>Hello</h2>}
      {isLoggedIn && <h2>Welcome</h2>}
      <p>adsfadsf {message} sdasfssfasdf</p>
      <WelcomeSection />
      <Footer />
    </>
  );
};

export default App;
