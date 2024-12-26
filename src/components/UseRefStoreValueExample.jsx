import { useEffect, useRef, useState } from 'react';

function UseRefStoreValueExample() {
  const [value, setValue] = useState('');
  const [arr, setArr] = useState([]);
  const prevStateRef = useRef(value);

  useEffect(() => {
    prevStateRef.current = value;
  });

  useEffect(() => {
    setArr(prev => [...prev, value]);
  }, [value]);

  const handleRollback = () => {
    setValue(arr[arr.length - 2]);
  };
  return (
    <div>
      <h2>useRef - Preview value Result</h2>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      <p>Current value: {value}</p>
      <p>Prev value: {prevStateRef.current}</p>
      <button onClick={handleRollback}>Set prev value</button>
    </div>
  );
}

export default UseRefStoreValueExample;
