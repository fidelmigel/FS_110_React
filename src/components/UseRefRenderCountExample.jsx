import { useEffect, useRef, useState } from 'react';

function UseRefRenderCountExample() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const renderCount = useRef(1);

  // const [renderStateCount, setRenderStateCount] = useState(1);
  useEffect(() => {
    console.log(renderCount.current);
    renderCount.current++;
  });
  const inputRef = useRef();

  return (
    <div>
      <h2>useRef - Count of Renders</h2>
      <p>Counter: {count}</p>
      <button onClick={() => renderCount.current++}>UPDATE REF NOW!!!!!</button>
      <input type='text' onChange={e => setValue(e.target.value)} />
      <p>Component was rendered: {renderCount.current} раз</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button onClick={() => inputRef.current.click()}>Open file </button>
      <input ref={inputRef} style={{ visibility: 'hidden' }} type='file' />
    </div>
  );
}

export default UseRefRenderCountExample;
