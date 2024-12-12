import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, title = 'Default modal', onClose }) => {
  useEffect(() => {
    console.log('Modal is open!');

    // cleanup fn
    return () => {
      console.log('Пока пока 😉');
    };
  }, []);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <h1>{title}</h1>
        <hr />
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
