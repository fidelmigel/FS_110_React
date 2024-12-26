import { useState } from 'react';

function UseRefStoreValueExample() {
  const [value, setValue] = useState('');

  return (
    <div>
      <h2>useRef - Memo Result</h2>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      <p>Current value: {value}</p>
      <p>Prev value: {'ref logic'}</p>
    </div>
  );
}

export default UseRefStoreValueExample;
