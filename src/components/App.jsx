import ControlledForm from './Forms/ControlledForm';
import FormRegister from './Forms/Form';

const App = () => {
  const onRegister = data => {
    console.log('Data received!');
    console.log(data);
    console.log('User successfully registered!🚀');
  };
  return (
    <div>
      <h1>FORMIK 🚀</h1>
      <FormRegister />
      <ControlledForm onRegister={onRegister} />
    </div>
  );
};
export default App;
