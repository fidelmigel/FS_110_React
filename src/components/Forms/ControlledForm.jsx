import { useState } from 'react';
import s from './Forms.module.css';

const INITIAL_STATE = { username: '', email: '', course: '', level: 'junior', details: '', isTermsAccepted: false };

const ControlledForm = ({ onRegister }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = e => {
    e.preventDefault();

    onRegister(formData);
    setFormData(INITIAL_STATE); //🔥
  };

  // ❌ const handleChangeUsername = e => {
  //   setFormData(prev => {
  //     return {
  //       ...prev,
  //       username: e.target.value,
  //     };
  //   });
  // };

  // const handleChangeEmail = e => {
  //   setFormData(prev => {
  //     return {
  //       ...prev,
  //       email: e.target.value,
  //     };
  //   });
  // };
  // const handleChangePassword = e => {
  //   setFormData(prev => {
  //     return {
  //       ...prev,
  //       password: e.target.value,
  //     };
  //   });
  // };

  const handleChangeInput = e => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      return setFormData(prev => ({ ...prev, [name]: !prev[name] }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input className={s.input} type='text' name='username' value={formData.username} onChange={handleChangeInput} />
        </label>

        <label className={s.label}>
          <span>Email:</span>
          <input className={s.input} type='text' name='email' value={formData.email} onChange={handleChangeInput} />
        </label>

        <label className={s.label}>
          <span>Course:</span>
          <select className={s.input} type='text' name='course' value={formData.course} onChange={handleChangeInput}>
            <option value='backend'>Backend</option>
            <option value='frontend'>Frontend</option>
            <option value='fullstack'>Fullstack</option>
            <option value='devOps'>DevOps</option>
          </select>
        </label>
        <div>
          <label>
            <input type='radio' value='junior' checked={formData.level === 'junior'} name='level' onChange={handleChangeInput} />
            <span>Junior</span>
          </label>
          <label>
            <input type='radio' value='middle' name='level' onChange={handleChangeInput} checked={formData.level === 'middle'} />
            <span>Middle</span>
          </label>
          <label>
            <input type='radio' value='senior' name='level' onChange={handleChangeInput} checked={formData.level === 'senior'} />
            <span>Senior</span>
          </label>
        </div>
        <label className={s.label}>
          <span>Details:</span>
          <textarea className={s.input} name='details' value={formData.details} onChange={handleChangeInput} />
        </label>
        <label>
          <input type='checkbox' name='isTermsAccepted' checked={formData.isTermsAccepted} onChange={handleChangeInput} />
          <span>All terms and rules accepted!</span>
        </label>
        <button disabled={!formData.isTermsAccepted} className={s.button} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default ControlledForm;
