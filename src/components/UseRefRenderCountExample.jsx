import { useState } from 'react';

function UseRefRenderCountExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useRef - Count of Renders</h2>
      <p>Counter: {count}</p>
      <p>Component was rendered: {1} раз</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </div>
  );
}

export default UseRefRenderCountExample;
