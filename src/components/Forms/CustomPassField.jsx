import { ErrorMessage, Field } from 'formik';
import s from './Forms.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { useState } from 'react';
const CustomPassField = ({ label, type = 'text', name }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <label className={s.label}>
      <span>{label}</span>
      <div className={s.wrapper}>
        <Field className={s.input} type={isOpen ? 'text' : type} name={name} />
        <button type='button' onClick={() => setIsOpen(prev => !prev)} className={s.icon}>
          {isOpen ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <ErrorMessage name={name} className={s.error} component='div' />
    </label>
  );
};
export default CustomPassField;
