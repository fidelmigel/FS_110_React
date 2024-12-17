import { useState } from 'react';
import s from './Forms.module.css';
const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
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
    const { name, value } = e.target;
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
          <input className={s.input} type='text' name='username' onChange={handleChangeInput} />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input className={s.input} type='text' name='email' onChange={handleChangeInput} />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input className={s.input} type='password' name='password' onChange={handleChangeInput} />
        </label>
        <button className={s.button} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default ControlledForm;
