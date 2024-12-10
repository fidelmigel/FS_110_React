import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  // RULES
  // 1. Можна створювати хуки тільки всередині функціональних компонентах
  // 2. НЕ Можна оголосити хук всередині умов
  // 3. НЕ Можна оголосити хук всередині циклів

  const [counter, setCounter] = useState(0);

  const handleClickPlus = () => {
    setCounter(counter + 1);
  };

  const handleClickMinus = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
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
