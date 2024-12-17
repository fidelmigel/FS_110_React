import Example from './ExampleUseId/Example';
import ControlledForm from './Forms/ControlledForm';
import Form from './Forms/Form';

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
      <Example />
      <Example />
    </div>
  );
};
export default App;
