import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  // RULES
  // 1. Можна створювати хуки тільки всередині функціональних компонентах
  // 2. НЕ Можна оголосити хук всередині умов
  // 3. НЕ Можна оголосити хук всередині циклів

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handleClickPlus = () => {
    setCounter(prev => prev + step); // ✅

    if (counter > 12000) {
      alert('Не так швидко! ');
    }
  };

  const handleClickMinus = () => {
    // setCounter(counter - 1);
    setCounter(prev => prev - step); // ✅
  };

  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input type='number' value={step} onChange={e => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button onClick={handleClickMinus} className='btn'>
            minus
          </button>
          <button onClick={handleReset} className='btn'>
            reset
          </button>
          <button onClick={handleClickPlus} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
