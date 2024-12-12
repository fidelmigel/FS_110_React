import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, title = 'Default modal', onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.key);
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    console.log('Modal is open!');
    const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    const timeoutId = setTimeout(() => {
      console.log('🔥🔥🔥🔥');
    }, 4000);
    // cleanup fn
    return () => {
      console.log('Пока пока 😉');
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

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
