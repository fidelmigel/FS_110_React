import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  // Виконається ЛИШЕ 1 раз!
  useEffect(() => {
    console.log("Компонент з'явився в DOM ✅");
  }, []);

  // Виконується ПЕРШИЙ РАЗ при монтуванні і всі наступні при зміні залежності
  useEffect(() => {
    console.log('❗Змінився лічильник: ', counter);
    if (counter === 5) {
      console.log('Лічильник = 5, скидаємо до 0');
      setCounter(0);
    }
  }, [counter]);

  // Виконується ПЕРШИЙ РАЗ при монтуванні і всі наступні при зміні залежності
  useEffect(() => {
    console.log('💬Змінився крок для лічильника: ', step);
  }, [step]);

  // Виконується ПЕРШИЙ РАЗ при монтуванні і всі наступні при зміні ОДНІЄЇ з залежностей
  useEffect(() => {
    console.log('🔥Помінялось або лічильник, або крок!');
  }, [counter, step]);

  const handleClickPlus = () => {
    setCounter(prev => prev + step); // ✅
  };

  const handleClickMinus = () => {
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
