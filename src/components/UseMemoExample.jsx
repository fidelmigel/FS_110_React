import { useState } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false);

  // Hard logic
  const heavyCompute = num => {
    console.log('heavyCompute called');
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2;
  };

  const result = heavyCompute(count);
  const style = {
    color: colored ? 'tomato' : 'black',
  };

  return (
    <div>
      <h2>useMemo Example</h2>
      <p style={style}>Result: {result}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button
        onClick={() => {
          console.log('change color');

          setColored(prev => !prev);
        }}
      >
        Change color
      </button>
    </div>
  );
}

export default UseMemoExample;
