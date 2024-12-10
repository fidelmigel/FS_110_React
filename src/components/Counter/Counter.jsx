import s from './Counter.module.css';

export const Counter = () => {
  const handleClickPlus = e => {
    console.log('Plus click');
    console.log(e);
  };
  const handleReset = name => {
    console.log(`Hello ${name}`);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button onClick={() => console.log('Hello')} className='btn'>
            minus
          </button>
          <button onClick={() => handleReset('Oleh')} className='btn'>
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
