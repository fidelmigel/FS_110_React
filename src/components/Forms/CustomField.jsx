import { ErrorMessage, Field } from 'formik';
import s from './Forms.module.css';

const CustomField = ({ label, type = 'text', name }) => {
  return (
    <label className={s.label}>
      <span>{label}</span>
      <Field className={s.input} type={type} name={name} placeholder={`Enter ${name}`} />
      <ErrorMessage name={name} className={s.error} component='div' />
    </label>
  );
};
export default CustomField;
