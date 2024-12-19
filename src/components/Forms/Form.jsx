import { Field, Form, Formik } from 'formik';
import s from './Forms.module.css';
const FormRegister = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    console.log(actions);
  };
  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} type='text' name='username' />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.input} type='text' name='email' />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field className={s.input} type='password' name='password' />
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
