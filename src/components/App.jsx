import ControlledForm from './Forms/ControlledForm';

const App = () => {
  const onRegister = data => {
    console.log('Data received!');
    console.log(data);
    console.log('User successfully registered!🚀');
  };
  return (
    <div>
      <h1>Forms</h1>
      <ControlledForm onRegister={onRegister} />
    </div>
  );
};
export default App;
