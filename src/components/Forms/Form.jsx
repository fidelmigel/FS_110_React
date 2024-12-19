import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './Forms.module.css';
import CustomField from './CustomField';
import CustomPassField from './CustomPassField';
import InputFabric from './InputFabric';

const FormRegister = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    console.log(actions);
  };

  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ]+$/;
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(20, 'Максимум 20 символів')
      .matches(onlyLetters, 'Це поле може містити тільки літери')
      .required("Це поле обов'язкове!"),
    email: Yup.string().matches(re, 'Це не емейл!').required("Це поле обов'язкове!"),
    password: Yup.string().min(6, 'Мінімум 6 символи').max(12, 'Максимум 12 символів').required("Це поле обов'язкове!"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <InputFabric label='Name:' name='username' />
          <InputFabric label='Email:' name='email' />
          <InputFabric label='Age:' name='age' type='number' />
          <InputFabric label='Password:' type='password' name='password' />
          <InputFabric label='Password:' type='password' name='confirmPassword' />
          <button className={s.button} type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormRegister;
