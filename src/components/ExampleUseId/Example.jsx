import { useState } from 'react';
import CustomInput from './CustomInput';

const Example = () => {
  const [value, setValue] = useState(3);
  return (
    <div>
      <h2>Рецепт коктейлю:</h2>
      <div>
        <button onClick={() => setValue(prev => prev - 1)}>-</button>
        <button onClick={() => setValue(prev => prev + 1)}>+</button>
      </div>
      {Array(value)
        .fill('')
        .map((_, idx) => (
          <CustomInput key={idx} idx={idx + 1} />
        ))}
    </div>
  );
};
export default Example;
