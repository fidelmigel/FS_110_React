import { Field, Form, Formik } from 'formik';
import s from './Forms.module.css';
import * as Yup from 'yup';
const ControlledForm = ({ onRegister }) => {
  const handleSubmit = (values, actions) => {
    onRegister(values);
    actions.resetForm();
  };

  const orderSchema = Yup.object().shape({
    username: Yup.string().min(3),
    age: Yup.number().positive().max(99),
    course: Yup.string().oneOf(['frontend', 'backend', 'fullstack']),
  });
  const initialValues = { username: '', email: '', age: '', course: '', level: 'junior', details: '', isTermsAccepted: false };

  return (
    <div className={s.formWrapper}>
      <Formik validationSchema={orderSchema} onSubmit={handleSubmit} initialValues={initialValues}>
        {({ values }) => (
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
              <span>Age:</span>
              <Field className={s.input} type='number' name='age' />
            </label>

            <label className={s.label}>
              <span>Course:</span>
              <Field as='select' className={s.input} type='text' name='course'>
                <option value='backend'>Backend</option>
                <option value='frontend'>Frontend</option>
                <option value='devOps'>DevOps</option>
                <option value='fullstack'>Fullstack</option>
              </Field>
            </label>
            <div>
              <label>
                <Field type='radio' value='junior' name='level' />
                <span>Junior</span>
              </label>
              <label>
                <Field type='radio' value='middle' name='level' />
                <span>Middle</span>
              </label>
              <label>
                <Field type='radio' value='senior' name='level' />
                <span>Senior</span>
              </label>
            </div>
            <label className={s.label}>
              <span>Details:</span>
              <Field as='textarea' className={s.input} name='details' />
            </label>
            <label>
              <Field type='checkbox' name='isTermsAccepted' />
              <span>All terms and rules accepted!</span>
            </label>
            <button disabled={!values.isTermsAccepted} className={s.button} type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ControlledForm;
