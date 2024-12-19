import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './Forms.module.css';

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
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} type='text' name='username' />
            <ErrorMessage name='username' className={s.error} component='div' />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.input} type='text' name='email' />
            <ErrorMessage name='email' className={s.error} component='div' />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field className={s.input} type='password' name='password' />
            <ErrorMessage name='password' className={s.error} component='div' />
          </label>
          <button className={s.button} type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormRegister;
